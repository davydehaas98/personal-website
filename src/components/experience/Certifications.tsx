import React from 'react'
import { siCredly } from 'simple-icons'

import { ArrowUpRightIcon, AwardIcon, BrandIcon } from '../icons/Icons'
import { SectionHeader } from '../section-header/SectionHeader'
import { Bubble } from '../ui/Bubble'
import { ExternalLink } from '../ui/ExternalLink'
import { Pill } from '../ui/Pill'
import badges from './badges.json'

// Badges grouped by issuer, newest first ("YYYY-MM" sorts as text). A badge earned again (a renewal) is shown once,
// linking to the newest one; the group with the most recent badge comes first.
const badgeGroups = (() => {
  const newestFirst = [...badges].sort((a, b) => b.earned.localeCompare(a.earned))
  const unique = newestFirst.filter(
    (badge, index) => newestFirst.findIndex((other) => other.name === badge.name) === index,
  )
  const groups = new Map<string, typeof unique>()
  for (const badge of unique) {
    groups.set(badge.issuer, [...(groups.get(badge.issuer) ?? []), badge])
  }
  return [...groups.entries()].map(([issuer, items]) => ({ issuer, items }))
})()

type Badge = (typeof badges)[number]

// The images are copies in public/, as the CSP only allows images from the site itself.
const BadgeLink = ({ badge }: { badge: Badge }): React.JSX.Element => (
  <ExternalLink className="group flex w-32.5 flex-col items-center gap-2.5 text-center md:w-37.5" href={badge.link}>
    <Bubble className="size-27">
      <img className="size-18" src={badge.image} alt="" width={72} height={72} loading="lazy" />
    </Bubble>
    <strong className="text-sm leading-[1.35] group-hover:text-brand">{badge.name}</strong>
  </ExternalLink>
)

export const Certifications = (): React.JSX.Element => (
  <>
    <SectionHeader level={3} icon={<AwardIcon />} title="Certifications" />
    {badgeGroups.map(({ issuer, items }) => (
      <div key={issuer} className="mt-7 md:text-center">
        <h4 className="text-[0.8125rem] font-semibold tracking-[0.04em] text-muted uppercase">{issuer}</h4>
        <ul className="mt-3.5 flex flex-wrap gap-x-5 gap-y-4 md:justify-center md:gap-x-8">
          {items.map((badge) => (
            <li key={badge.link}>
              <BadgeLink badge={badge} />
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
  </>
)
