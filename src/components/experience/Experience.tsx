import React, { useSyncExternalStore } from 'react'

import { BriefcaseIcon, GraduationCapIcon } from '../icons/Icons'
import { SectionHeader } from '../section-header/SectionHeader'
import { Section } from '../ui/Section'
import { Certifications } from './Certifications'
import { formatPeriod, parseYearMonth } from './dates'
import experience from './experience.json'
import { Timeline, TimelineItem } from './Timeline'

// Replaced with the build month ("YYYY-MM") by Vite (define in vite.config.ts).
declare const BUILD_MONTH: string

// The current job's duration runs up to "now". The pre-rendered HTML uses the build month; React then switches
// to the browser's current month right after hydrating, so the first render matches the HTML.
const subscribe = (): (() => void) => () => {}
const currentMonth = (): string => new Date().toISOString().slice(0, 7)
const buildMonth = (): string => BUILD_MONTH

// Work and education as timelines, then the certifications.
export const Experience = (): React.JSX.Element => {
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

      <Certifications />
    </Section>
  )
}
