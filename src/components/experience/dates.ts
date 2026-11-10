// Dates in experience.json are "YYYY-MM". Formatting is done by hand (not Intl) so the pre-rendered HTML and the
// browser always produce the same text.
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export type YearMonth = { year: number, month: number } // month 1–12

export const parseYearMonth = (value: string): YearMonth => {
  const [year, month] = value.split('-').map(Number)
  return { year, month }
}

export const formatYearMonth = ({ year, month }: YearMonth): string => `${months[month - 1]} ${year}`

// Counted like LinkedIn: both the first and the last month count, so Sep 2020 – Feb 2021 is 6 months.
export const formatDuration = (start: YearMonth, end: YearMonth): string => {
  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1
  const years = Math.floor(total / 12)
  const rest = total % 12
  const parts: string[] = []
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  }
  if (rest > 0) {
    parts.push(`${rest} ${rest === 1 ? 'mo' : 'mos'}`)
  }
  return parts.join(' ')
}

// { range: "Jan 2022 – Present", duration: "4 yrs 11 mos" }
export const formatPeriod = (
  start: string,
  end: string | undefined,
  now: YearMonth,
): { range: string, duration: string } => {
  const from = parseYearMonth(start)
  const to = end ? parseYearMonth(end) : now
  return {
    range: `${formatYearMonth(from)} – ${end ? formatYearMonth(to) : 'Present'}`,
    duration: formatDuration(from, to),
  }
}
