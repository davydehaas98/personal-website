import React from 'react'

import { BrandIcon, MailIcon } from '../icons/Icons'
import { logos } from '../logos/logos'
import { SectionHeader } from '../section-header/SectionHeader'
import { Pill } from '../ui/Pill'
import { Section } from '../ui/Section'

const links = [
  { href: 'https://github.com/davydehaas98', icon: logos.github },
  { href: 'https://www.linkedin.com/in/davydehaas98', icon: logos.linkedin },
]

export const Contact = (): React.JSX.Element => {
  return (
    <Section id="contact" labelledBy="contact-title">
      <SectionHeader
        id="contact-title"
        icon={<MailIcon />}
        title="Contact"
        lead="You can find me on GitHub and LinkedIn."
      />
      <ul className="mt-6 flex flex-wrap gap-3 md:justify-center">
        {links.map(({ href, icon }) => (
          <li key={icon.title}>
            <Pill href={href}>
              <BrandIcon icon={icon} className="w-5.5" />
              {icon.title}
            </Pill>
          </li>
        ))}
      </ul>
    </Section>
  )
}
