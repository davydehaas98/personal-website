import {
  siApachemaven,
  siArgo,
  siCilium,
  siDocker,
  siDotnet,
  siGrafana,
  siHelm,
  siJavascript,
  siKubernetes,
  siOpenjdk,
  siOpenzfs,
  siPostgresql,
  siPrometheus,
  siPython,
  siRaspberrypi,
  siTalos,
  siTerraform,
  siUnity,
} from 'simple-icons'

// Logos from Simple Icons (CC0) that projects.json can use, by name. Only these end up in the bundle.
export const logos = {
  argo: siArgo,
  cilium: siCilium,
  docker: siDocker,
  dotnet: siDotnet,
  grafana: siGrafana,
  helm: siHelm,
  javascript: siJavascript,
  kubernetes: siKubernetes,
  maven: siApachemaven,
  openjdk: siOpenjdk,
  postgresql: siPostgresql,
  prometheus: siPrometheus,
  python: siPython,
  raspberrypi: siRaspberrypi,
  talos: siTalos,
  terraform: siTerraform,
  unity: siUnity,
  zfs: siOpenzfs,
}

export type LogoName = keyof typeof logos
