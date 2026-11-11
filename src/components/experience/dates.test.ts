import { formatDuration, formatPeriod, parseYearMonth } from './dates'

const duration = (start: string, end: string): string => formatDuration(parseYearMonth(start), parseYearMonth(end))

describe('experience dates', () => {
  it('counts durations like LinkedIn, including the first and last month', () => {
    expect({
      'Sep 2020 – Feb 2021': duration('2020-09', '2021-02'),
      'Sep 2017 – Mar 2020': duration('2017-09', '2020-03'),
      'Jan 2022 – Dec 2022': duration('2022-01', '2022-12'),
      'Jan 2022 – Jan 2022': duration('2022-01', '2022-01'),
    }).toEqual({
      'Sep 2020 – Feb 2021': '6 mos',
      'Sep 2017 – Mar 2020': '2 yrs 7 mos',
      'Jan 2022 – Dec 2022': '1 yr',
      'Jan 2022 – Jan 2022': '1 mo',
    })
  })

  it('formats finished and current jobs', () => {
    const now = { year: 2026, month: 11 }

    expect({
      finished: formatPeriod('2019-02', '2019-07', now),
      current: formatPeriod('2022-01', undefined, now),
    }).toEqual({
      finished: { range: 'Feb 2019 – Jul 2019', duration: '6 mos' },
      current: { range: 'Jan 2022 – Present', duration: '4 yrs 11 mos' },
    })
  })
})
