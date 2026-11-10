import React from 'react'
import styles from './SectionHeader.module.css'

type SectionHeaderProps = {
  icon: React.ReactNode
  title: string
  // h2 for a section's own header (with an id the section is labelled by), h3 for a group inside a section.
  level?: 2 | 3
  id?: string
  lead?: string
}

// A header with the icon in a green circle on a line across the page, and the title under it.
// On phones the circle and title sit side by side on the left, without the line.
const SectionHeader = ({ icon, title, level = 2, id, lead }: SectionHeaderProps): React.JSX.Element => {
  const Heading = level === 2 ? 'h2' : 'h3'
  return (
    <div className={`${styles.header} ${level === 2 ? styles.section : styles.group}`}>
      <div className={styles.rule}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <div>
        <Heading id={id} className={styles.title}>{title}</Heading>
        {lead && <p className={styles.lead}>{lead}</p>}
      </div>
    </div>
  )
}

export default SectionHeader
