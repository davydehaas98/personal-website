import { invisibleOn, logoName } from './logos'

describe('logos', () => {
  it('accepts the logo names from logos.ts and stops on an unknown one', () => {
    expect(logoName('kubernetes')).toBe('kubernetes')
    expect(() => logoName('kubernets')).toThrow('Unknown logo "kubernets"')
  })

  it('falls back to the text colour only where a brand colour would vanish', () => {
    expect(invisibleOn('ffffff')).toBe('light')
    expect(invisibleOn('000000')).toBe('dark')
    expect(invisibleOn('326ce5')).toBeUndefined()
  })
})
