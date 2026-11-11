import React from 'react'

type SectionHeaderProps = {
  icon: React.ReactNode
  title: string
  // h2 for a section's own header (with an id the section is labelled by), h3 for a group inside a section.
  level?: 2 | 3
  id?: string
  lead?: string
}

// A line that fades out towards the circle's far side, on both sides of it (from md up).
const line = 'h-0.5 flex-1 rounded-full from-transparent to-accent'

// A header with the icon in a green circle on a line across the page, and the title under it.
// On phones the circle and title sit side by side on the left, without the line.
const SectionHeader = ({ icon, title, level = 2, id, lead }: SectionHeaderProps): React.JSX.Element => {
  const Heading = level === 2 ? 'h2' : 'h3'
  return (
    <div className={`flex items-center gap-3 md:flex-col md:gap-2.5 md:text-center ${level === 3 ? 'mt-14' : ''}`}>
      <div className={`flex items-center gap-4 md:w-full ${level === 3 ? 'md:max-w-105' : ''}`}>
        <span className={`hidden bg-linear-to-r md:block ${line}`} />
        <span
          className={`grid size-12 flex-none place-items-center rounded-full border-2 border-accent bg-accent/18 text-brand *:w-6 ${level === 2 ? 'md:size-14' : ''}`}
        >
          {icon}
        </span>
        <span className={`hidden bg-linear-to-l md:block ${line}`} />
      </div>
      <div>
        <Heading id={id} className={level === 2 ? 'text-[1.75rem]' : 'text-lg'}>{title}</Heading>
        {lead && <p className="mt-1 text-muted">{lead}</p>}
      </div>
    </div>
  )
}

export default SectionHeader
