import { invisibleOn, logoName } from './logos'

const errorOf = (run: () => unknown): string | undefined => {
  try {
    run()
    return undefined
  } catch (error) {
    return error instanceof Error ? error.message : String(error)
  }
}

describe('logos', () => {
  it('accepts the logo names from logos.ts and stops on an unknown one', () => {
    expect({
      known: logoName('kubernetes'),
      unknown: errorOf(() => logoName('kubernets')),
    }).toEqual({
      known: 'kubernetes',
      unknown: 'Unknown logo "kubernets": add it to src/components/logos/logos.ts',
    })
  })

  it('falls back to the text colour only where a brand colour would vanish', () => {
    expect({
      white: invisibleOn('ffffff'),
      black: invisibleOn('000000'),
      blue: invisibleOn('326ce5'),
    }).toEqual({ white: 'light', black: 'dark', blue: undefined })
  })
})
