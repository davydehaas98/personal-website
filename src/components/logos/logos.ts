import {
  siApachemaven,
  siArgo,
  siCilium,
  siDocker,
  siGrafana,
  siHelm,
  siJavascript,
  siKubernetes,
  siLinux,
  siOpenjdk,
  siOpenzfs,
  siPlex,
  siPostgresql,
  siPrometheus,
  siPython,
  siTalos,
  siTerraform,
} from 'simple-icons'

// Logos from Simple Icons (CC0) that projects.json can use, by name. Only these end up in the bundle.
export const logos = {
  argo: siArgo,
  cilium: siCilium,
  docker: siDocker,
  grafana: siGrafana,
  helm: siHelm,
  javascript: siJavascript,
  kubernetes: siKubernetes,
  linux: siLinux,
  maven: siApachemaven,
  openjdk: siOpenjdk,
  plex: siPlex,
  postgresql: siPostgresql,
  prometheus: siPrometheus,
  python: siPython,
  talos: siTalos,
  terraform: siTerraform,
  zfs: siOpenzfs,
}

export type LogoName = keyof typeof logos

// A logo name from projects.json, checked: a name missing above stops the build (pre-rendering) and the tests with
// this error, instead of failing somewhere in the page.
const isLogoName = (name: string): name is LogoName => Object.hasOwn(logos, name)

export const logoName = (name: string): LogoName => {
  if (isLogoName(name)) {
    return name
  }
  throw new Error(`Unknown logo "${name}": add it to src/components/logos/logos.ts`)
}

// Contrast ratio between two hex colours (WCAG relative luminance).
const luminance = (hex: string): number => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const value = parseInt(hex.slice(i, i + 2), 16) / 255
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const contrast = (a: string, b: string): number => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (light + 0.05) / (dark + 0.05)
}

// A brand colour that would all but vanish on the cards of one theme (white on white, black on dark) falls back
// to the text colour in that theme only. The card colours match --color-surface in index.css.
export const invisibleOn = (hex: string): 'light' | 'dark' | undefined => {
  if (contrast(hex, 'ffffff') < 1.3) {
    return 'light'
  }
  if (contrast(hex, '141416') < 1.5) {
    return 'dark'
  }
  return undefined
}
