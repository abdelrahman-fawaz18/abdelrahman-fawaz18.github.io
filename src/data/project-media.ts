type ProjectMedia = {
  file: string;
  small?: string;
  alt: string;
  caption: string;
  credit?: { text: string; href: string };
  tone: 'paper' | 'dark' | 'photo';
};

export const projectMedia: Record<string, ProjectMedia> = {
  'ev-connectivity-qos': {
    file: 'ev-telemetry-overview.svg',
    alt: 'Two paths show motor testbed telemetry flowing over MQTT to the lab, and a separate simulation comparing traffic priorities.',
    caption: 'Project schematic · telemetry integration and separate QoS simulation',
    tone: 'dark',
  },
  'cloud-native-5g': {
    file: 'cloud-recovery-preview.webp',
    alt: 'Saved Grafana recovery dashboard reporting nine accepted trials, zero automatic recoveries, and nine assisted recoveries.',
    caption: 'Saved lab dashboard · recovery trial outcomes',
    tone: 'dark',
  },
  'wearable-health-monitoring': {
    file: 'wearable-prototype.webp',
    small: 'wearable-prototype-640.webp',
    alt: 'Green prototype enclosure with exposed Raspberry Pi ports, fastened to a wrist with a black strap.',
    caption: 'Prototype photograph · wrist-mounted sensing device',
    tone: 'photo',
  },
  '5g-sa-validation': {
    file: 'core-packet-trace.webp',
    alt: 'Wireshark capture from the 5G Standalone lab showing PFCP and GTP-U packets.',
    caption: 'Packet capture · PFCP and GTP-U in the 5G Standalone lab',
    tone: 'dark',
  },
  'nr-scheduler-validation': {
    file: 'nr-load-response.svg',
    alt: 'Study plots compare system goodput and low-latency deadline success as offered load increases for three scheduler policies.',
    caption: 'Simulation results · goodput and deadline success under increasing load',
    tone: 'paper',
  },
  'cv2x-montreal': {
    file: 'cv2x-road-layouts.webp',
    alt: 'Side-by-side SUMO road networks for the downtown Montreal grid and lower-density corridor.',
    caption: 'SUMO road networks · the two Montreal simulation scenarios',
    credit: { text: '© OpenStreetMap contributors', href: 'https://www.openstreetmap.org/copyright' },
    tone: 'paper',
  },
  'ble-indoor-localization': {
    file: 'ble-workflow.svg',
    alt: 'Illustration of BLE observations feeding trilateration to estimate an indoor equipment position.',
    caption: 'Illustrated workflow · BLE observations to a position estimate',
    tone: 'dark',
  },
  'microstrip-patch-antenna': {
    file: 'antenna-workflow.svg',
    alt: 'Illustration of a patch antenna moving from electromagnetic simulation to fabrication and network analyzer testing.',
    caption: 'Illustrated workflow · simulation, fabrication, and RF measurement',
    tone: 'dark',
  },
  'industrial-lab-integration': {
    file: 'industrial-interfaces.svg',
    alt: 'Illustration of interface checks across industrial sensors, PLC control, and robotic equipment.',
    caption: 'Illustrated scope · sensor, control, and equipment interfaces',
    tone: 'dark',
  },
  'production-line-simulation': {
    file: 'production-model.svg',
    alt: 'Illustration of part streams converging into a production-line model used to compare operating choices.',
    caption: 'Illustrated model · part flows, eight stations, and operating choices',
    tone: 'dark',
  },
  'equipment-failure-prediction': {
    file: 'failure-classification.svg',
    alt: 'Illustration of equipment data preparation and model comparison for five failure modes.',
    caption: 'Illustrated workflow · feature preparation and model comparison',
    tone: 'dark',
  },
};
