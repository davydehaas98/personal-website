import React from 'react'

type SectionHeaderProps = {
  icon: React.ReactNode
  title: string
  level?: 2 | 3
  id?: string
  lead?: string
}

const line = 'h-0.5 flex-1 rounded-full from-transparent to-accent'

export const SectionHeader = ({ icon, title, level = 2, id, lead }: SectionHeaderProps): React.JSX.Element => {
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
        <Heading id={id} className={level === 2 ? 'text-[1.75rem]' : 'text-lg'}>
          {title}
        </Heading>
        {lead && <p className="mt-1 text-muted">{lead}</p>}
      </div>
    </div>
  )
}
