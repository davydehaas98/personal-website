import { formatDuration, formatPeriod, parseYearMonth } from './dates'

describe('experience dates', () => {
  it('counts durations like LinkedIn, including the first and last month', () => {
    expect(formatDuration(parseYearMonth('2020-09'), parseYearMonth('2021-02'))).toBe('6 mos')
    expect(formatDuration(parseYearMonth('2017-09'), parseYearMonth('2020-03'))).toBe('2 yrs 7 mos')
    expect(formatDuration(parseYearMonth('2022-01'), parseYearMonth('2022-12'))).toBe('1 yr')
    expect(formatDuration(parseYearMonth('2022-01'), parseYearMonth('2022-01'))).toBe('1 mo')
  })

  it('formats finished and current jobs', () => {
    expect(formatPeriod('2019-02', '2019-07', { year: 2026, month: 11 })).toEqual({
      range: 'Feb 2019 – Jul 2019',
      duration: '6 mos',
    })
    expect(formatPeriod('2022-01', undefined, { year: 2026, month: 11 })).toEqual({
      range: 'Jan 2022 – Present',
      duration: '4 yrs 11 mos',
    })
  })
})
