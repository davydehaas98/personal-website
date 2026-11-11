import React from 'react'

import { ExternalLink } from '../ui/ExternalLink'

export const Timeline = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
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
  when: [range: string, duration?: string]
}

export const TimelineItem = ({
  heading: Heading,
  title,
  organisation,
  link,
  extra,
  location,
  when,
}: TimelineItemProps): React.JSX.Element => (
  <li className="relative grid pb-7 pl-15 last:pb-0 before:absolute before:top-1.5 before:left-4.5 before:size-3 before:rounded-full before:border-2 before:border-accent before:bg-page md:grid-cols-2 md:gap-x-14 md:pl-0 md:before:left-1/2 md:before:-translate-x-1/2">
    <div className="md:col-start-2 md:row-start-1">
      <Heading className="text-[1.0625rem]">{title}</Heading>
      <p className="mt-0.5">
        <ExternalLink className="hover:text-brand" href={link}>
          {organisation}
        </ExternalLink>
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
