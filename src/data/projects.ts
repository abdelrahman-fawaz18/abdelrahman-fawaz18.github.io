export const projects = [
  {
    slug: '5g-sa-validation', number: '01', title: '5G core, from setup to fault diagnosis', shortTitle: '5G SA protocol validation',
    category: 'Protocol validation', tools: 'Open5GS · UERANSIM · Linux · Python',
    description: 'Following the service path from registration to user traffic—and finding where it breaks.',
    featured: false, repository: 'https://github.com/abdelrahman-fawaz18/5g-sa-core-protocol-lab',
  },
  {
    slug: 'cloud-native-5g', number: '02', title: 'Cloud-native 5G platform', shortTitle: 'Cloud-native 5G platform',
    category: 'Cloud platforms', tools: 'Kubernetes · Helm · Observability',
    description: 'Deploying a multi-UE 5G platform with isolated data networks, service monitoring, and recovery tests.',
    featured: true, repository: 'https://github.com/abdelrahman-fawaz18/cloud-native-5g-core-platform',
  },
  {
    slug: 'ev-connectivity-qos', number: '03', title: 'EV connectivity & QoS', shortTitle: 'EV connectivity & QoS',
    category: 'Industry + research', tools: 'MQTT · ns-3 / 5G-LENA',
    description: 'Connecting EV maintenance telemetry and testing how 5G QoS protects urgent messages during congestion.',
    featured: true, repository: null,
  },
  {
    slug: 'wearable-health-monitoring', number: '04', title: 'Wearable sensing & health monitoring', shortTitle: 'Wearable sensing',
    category: 'Team project · 2021–2023', tools: 'Raspberry Pi · Sensors · Python · Node-RED',
    description: 'Bringing sensor acquisition, remote monitoring, and fall and sleep classification into a wearable research system.',
    featured: true, repository: 'https://github.com/abdelrahman-fawaz18/iot-smart-wearable-health-monitor',
  },
  {
    slug: 'nr-scheduler-validation', number: '05', title: '5G NR scheduler validation', shortTitle: '5G NR scheduler validation',
    category: 'Research simulation', tools: 'Python · 3GPP-informed models · QoS',
    description: 'Comparing scheduling policies through controlled, reproducible downlink experiments.',
    featured: false, repository: 'https://github.com/abdelrahman-fawaz18/5g-nr-ran-simulator',
  },
  {
    slug: 'cv2x-montreal', number: '06', title: 'C-V2X across Montreal road layouts', shortTitle: 'C-V2X in Montreal',
    category: 'Communication systems · 2026', tools: 'OMNeT++ · Veins · SUMO · Python',
    description: 'Studying how road layout, vehicle count, and fading affect direct vehicle-to-vehicle message reception.',
    featured: false, repository: 'https://github.com/abdelrahman-fawaz18/cv2x-mode4-montreal',
  },
  {
    slug: 'ble-indoor-localization', number: '07', title: 'BLE indoor localization', shortTitle: 'BLE indoor localization',
    category: 'Embedded systems · 2021', tools: 'ESP32 · BLE · Trilateration',
    description: 'A real-time indoor localization system for tracking medical equipment using ESP32 and Bluetooth Low Energy.',
    featured: false, repository: null,
  },
  {
    slug: 'microstrip-patch-antenna', number: '08', title: 'Antenna design, fabrication & testing', shortTitle: 'Microstrip patch antenna',
    category: 'Electronics · 2020', tools: 'CST Studio · Fabrication · Network analyzer',
    description: 'Taking a microstrip patch antenna from simulation to fabrication, then comparing the measured RF response.',
    featured: false, repository: null,
  },
  {
    slug: 'industrial-lab-integration', number: '09', title: 'Industrial lab integration', shortTitle: 'Industrial lab integration',
    category: 'Lab integration · 2024', tools: 'PLC · TIA Portal · Sensors · Interfaces',
    description: 'Supporting the connections between industrial control, robots, RFID, cameras, and sensors in the ICPS Lab.',
    featured: false, repository: null,
  },
  {
    slug: 'production-line-simulation', number: '10', title: 'Electronics production-line simulation', shortTitle: 'Production-line simulation',
    category: 'Team course project · 2024', tools: 'AnyLogic · OptQuest · Excel',
    description: 'Modeling an eight-station production line and exploring how buffers, pallets, and batch sizes change its performance.',
    featured: false, repository: null,
  },
  {
    slug: 'equipment-failure-prediction', number: '11', title: 'Equipment failure prediction', shortTitle: 'Equipment failure prediction',
    category: 'Applied study · 2024', tools: 'Machine learning · Feature engineering · SMOTE',
    description: 'Comparing classification approaches for five industrial equipment-failure modes.',
    featured: false, repository: null,
  },
];

const highlightOrder = ['ev-connectivity-qos', 'cloud-native-5g', 'wearable-health-monitoring'];
export const featuredProjects = projects.filter(project => project.featured).sort((a, b) => highlightOrder.indexOf(a.slug) - highlightOrder.indexOf(b.slug));
const profileOrder = [...highlightOrder, 'nr-scheduler-validation', 'cv2x-montreal'];
export const profileProjects = projects.filter(project => profileOrder.includes(project.slug)).sort((a, b) => profileOrder.indexOf(a.slug) - profileOrder.indexOf(b.slug));

export const roles = [
  { organization: 'Solutions Serafin', title: 'Wireless Systems Specialist — EV Connectivity', dates: 'Jan 2024 – Oct 2026', summary: 'EV telemetry connectivity and 5G QoS simulation.' },
  { organization: 'ICPS Lab · Polytechnique Montréal', title: 'Graduate Researcher', dates: '2024 – Oct 2026', summary: 'Wireless research, simulation, and system integration.' },
  { organization: 'Egyptian Space Agency', title: 'Electronics and Communications Engineering Intern', dates: 'Jun – Oct 2021', summary: 'Linux-based satellite-swarm prototype.' },
];
