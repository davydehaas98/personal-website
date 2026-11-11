import React, { useSyncExternalStore } from 'react'
import { siCredly } from 'simple-icons'
import { ArrowUpRightIcon, AwardIcon, BrandIcon, BriefcaseIcon, GraduationCapIcon } from '../icons/Icons'
import SectionHeader from '../section-header/SectionHeader'
import Bubble from '../ui/Bubble'
import Pill from '../ui/Pill'
import Section from '../ui/Section'
import { formatPeriod, parseYearMonth } from './dates'
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

// A timeline: a green line down the middle (on the left on phones), with a dot per entry.
const Timeline = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <ol className="relative mt-6 before:absolute before:top-1.5 before:bottom-1.5 before:left-5.75 before:w-0.5 before:bg-accent md:before:left-1/2 md:before:-translate-x-1/2">
    {children}
  </ol>
)

type TimelineItemProps = {
  // The heading level fits the header above it: h3 under Experience (h2), h4 under Education (h3).
  heading: 'h3' | 'h4'
  title: string
  organisation: string
  link: string
  extra?: string
  location?: string
  // The date range, and how long that was.
  when: string[]
}

// Details on the right of the line and dates on the left; on phones both under each other, right of the line.
const TimelineItem = ({ heading: Heading, title, organisation, link, extra, location, when }: TimelineItemProps): React.JSX.Element => (
  <li className="relative grid pb-7 pl-15 last:pb-0 before:absolute before:top-1.5 before:left-4.5 before:size-3 before:rounded-full before:border-2 before:border-accent before:bg-page md:grid-cols-2 md:gap-x-14 md:pl-0 md:before:left-1/2 md:before:-translate-x-1/2">
    <div className="md:col-start-2 md:row-start-1">
      <Heading className="text-[1.0625rem]">{title}</Heading>
      <p className="mt-0.5">
        <a className="hover:text-brand" href={link} target="_blank" rel="noopener noreferrer">{organisation}</a>
        {extra && ` · ${extra}`}
      </p>
      {location && <p className="mt-0.5 text-sm text-muted">{location}</p>}
    </div>
    <p className="mt-0.5 flex flex-wrap gap-x-1.5 text-sm text-muted md:col-start-1 md:row-start-1 md:mt-0 md:flex-col md:text-right">
      <span className="font-semibold text-ink">{when[0]}</span>
      {when[1] && <span className="before:content-['·_'] md:before:content-none">{when[1]}</span>}
    </p>
  </li>
)

const Experience = (): React.JSX.Element => {
  const now = parseYearMonth(useSyncExternalStore(subscribe, currentMonth, buildMonth))

  return (
    <Section id="experience" labelledBy="experience-title">
      <SectionHeader id="experience-title" icon={<BriefcaseIcon />} title="Experience" />
      <Timeline>
        {experience.work.map((job) => {
          const { range, duration } = formatPeriod(job.start, job.end, now)
          return (
            <TimelineItem
              key={`${job.role} ${job.start}`}
              heading="h3"
              title={job.role}
              organisation={job.organisation}
              link={job.link}
              extra={job.type}
              location={job.location}
              when={[range, duration]}
            />
          )
        })}
      </Timeline>

      <SectionHeader level={3} icon={<GraduationCapIcon />} title="Education" />
      <Timeline>
        {experience.education.map((study) => (
          <TimelineItem
            key={study.degree}
            heading="h4"
            title={study.degree}
            organisation={study.school}
            link={study.link}
            when={[`${study.start} – ${study.end}`]}
          />
        ))}
      </Timeline>

      {/* Certification badges from Credly, as the badge images in bubbles with the name under them, grouped by
          issuer. (The images are copies in public/, as the CSP only allows images from the site itself.) */}
      <SectionHeader level={3} icon={<AwardIcon />} title="Certifications" />
      {badgeGroups.map(({ issuer, items }) => (
        <div key={issuer} className="mt-7 md:text-center">
          <h4 className="text-[0.8125rem] font-semibold tracking-[0.04em] text-muted uppercase">{issuer}</h4>
          <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-4 md:justify-center md:gap-x-8">
            {items.map((badge) => (
              <li key={badge.link}>
                <a className="group flex w-32.5 flex-col items-center gap-2.5 text-center md:w-37.5" href={badge.link} target="_blank" rel="noopener noreferrer">
                  <Bubble className="size-27">
                    <img className="size-18" src={badge.image} alt="" width={72} height={72} loading="lazy" />
                  </Bubble>
                  <strong className="text-sm leading-[1.35] group-hover:text-brand">{badge.name}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="mt-8 md:text-center">
        <Pill href="https://www.credly.com/users/davy-de-haas">
          <BrandIcon icon={siCredly} fill={`#${siCredly.hex}`} className="w-7.5" />
          All badges on Credly
          <ArrowUpRightIcon className="w-3.5 text-muted group-hover:text-brand group-focus-visible:text-brand" />
        </Pill>
      </p>
    </Section>
  )
}

export default Experience
