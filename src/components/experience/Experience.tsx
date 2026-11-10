import React, { useSyncExternalStore } from 'react'
import { siCredly } from 'simple-icons'
import appStyles from '../../App.module.css'
import { ArrowUpRightIcon, AwardIcon, BrandIcon, BriefcaseIcon, GraduationCapIcon } from '../icons/Icons'
import SectionHeader from '../section-header/SectionHeader'
import { formatPeriod, parseYearMonth } from './dates'
import styles from './Experience.module.css'
import experience from './experience.json'
import badges from './badges.json'

// Replaced with the build month ("YYYY-MM") by Vite (define in vite.config.ts).
declare const BUILD_MONTH: string

// The current job's duration runs up to "now". The pre-rendered HTML uses the build month; React then switches
// to the browser's current month right after hydrating, so the first render matches the HTML.
const subscribe = (): (() => void) => () => {}
const currentMonth = (): string => new Date().toISOString().slice(0, 7)
const buildMonth = (): string => BUILD_MONTH

// Badges grouped by issuer, newest first ("YYYY-MM" sorts as text). A badge earned again (a renewal) is shown once,
// linking to the newest one; the group with the most recent badge comes first.
const badgeGroups = (() => {
  const newestFirst = [...badges].sort((a, b) => b.earned.localeCompare(a.earned))
  const unique = newestFirst.filter((badge, index) => newestFirst.findIndex((other) => other.name === badge.name) === index)
  const groups = new Map<string, typeof unique>()
  for (const badge of unique) {
    groups.set(badge.issuer, [...(groups.get(badge.issuer) ?? []), badge])
  }
  return [...groups.entries()].map(([issuer, items]) => ({ issuer, items }))
})()

const Experience = (): React.JSX.Element => {
  const now = parseYearMonth(useSyncExternalStore(subscribe, currentMonth, buildMonth))

  return (
    <section id="experience" className={appStyles.section} aria-labelledby="experience-title">
      <SectionHeader id="experience-title" icon={<BriefcaseIcon />} title="Experience" />
      <ol className={styles.list}>
        {experience.work.map((job) => {
          const { range, duration } = formatPeriod(job.start, job.end, now)
          return (
            <li key={`${job.role} ${job.start}`} className={styles.item}>
              <div className={styles.what}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.organisation}>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">{job.organisation}</a> · {job.type}
                </p>
                <p className={styles.meta}>{job.location}</p>
              </div>
              <p className={styles.when}>
                <span>{range}</span>
                <span>{duration}</span>
              </p>
            </li>
          )
        })}
      </ol>

      <SectionHeader level={3} icon={<GraduationCapIcon />} title="Education" />
      <ol className={styles.list}>
        {experience.education.map((study) => (
          <li key={study.degree} className={styles.item}>
            <div className={styles.what}>
              <h4 className={styles.role}>{study.degree}</h4>
              <p className={styles.organisation}>
                <a href={study.link} target="_blank" rel="noopener noreferrer">{study.school}</a>
              </p>
            </div>
            <p className={styles.when}>
              <span>{study.start} – {study.end}</span>
            </p>
          </li>
        ))}
      </ol>

      <SectionHeader level={3} icon={<AwardIcon />} title="Certifications" />
      {badgeGroups.map(({ issuer, items }) => (
        <div key={issuer} className={styles.badgeGroup}>
          <h4 className={styles.issuer}>{issuer}</h4>
          <ul className={styles.badges}>
            {items.map((badge) => (
              <li key={badge.link}>
                <a className={styles.badge} href={badge.link} target="_blank" rel="noopener noreferrer">
                  <span className={styles.badgeBubble}>
                    <img src={badge.image} alt="" width={72} height={72} loading="lazy" />
                  </span>
                  <strong className={styles.badgeName}>{badge.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className={styles.more}>
        <a className={styles.credly} href="https://www.credly.com/users/davy-de-haas" target="_blank" rel="noopener noreferrer">
          <BrandIcon icon={siCredly} fill={`#${siCredly.hex}`} className={styles.credlyLogo} />
          All badges on Credly
          <ArrowUpRightIcon className={styles.credlyArrow} />
        </a>
      </p>
    </section>
  )
}

export default Experience
