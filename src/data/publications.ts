interface Publication {
  year: string;
  title: string;
  authors: string;
  venue: string;
  description: string;
  project: 'ev-connectivity-qos' | 'wearable-health-monitoring';
  doi: string;
  url: string;
  linkLabel?: string;
}

export const publications: Publication[] = [
  {
    year: '2026',
    title: 'A Reliability-Enhancing Framework for Remote Electric Vehicle Maintenance Telemetry Using 5G QoS-Aware Network Slicing',
    authors: 'Abdelrahman Elsayed and Soumaya Yacout',
    venue: 'Journal of Quality in Maintenance Engineering · Published September 1, 2026',
    description: 'When the simulated 5G network was congested, giving maintenance alerts and fault reports priority helped more of them arrive. Routine diagnostics could receive less favorable service under the same load.',
    project: 'ev-connectivity-qos',
    doi: '10.1108/JQME-06-2026-0131',
    url: 'https://doi.org/10.1108/JQME-06-2026-0131',
  },
  {
    year: '2023',
    title: 'Fall Detection Algorithm Using a Smart Wearable System for Remote Health Monitoring',
    authors: 'Abdelrahman Fawaz, Moaz Elsayed, Ahmed Sharshar, Mohammed S. Sayed, Ahmed H. Abd El-Malek, and Mohammed Abo-Zahhad',
    venue: 'ICBB · 9th World Congress on New Technologies',
    description: 'The team tested whether a wrist-worn sensor and a classification model could distinguish falls from other recorded movements.',
    project: 'wearable-health-monitoring',
    doi: '10.11159/icbb23.111',
    url: 'https://doi.org/10.11159/icbb23.111',
  },
  {
    year: '2023',
    title: 'Design of Smart Wearable System for Sleep Tracking Using SVM and Multi-Sensor Approach',
    authors: 'Moaz Elsayed, Abdelrahman Fawaz, Ahmed H. Abd El-Malek, Mohammed S. Sayed, Ahmed Sharshar, and Mohammed Abo-Zahhad',
    venue: 'ICBB · 9th World Congress on New Technologies',
    description: 'The team combined readings from multiple wearable sensors and tested how those signals could be used to classify sleep-related activity.',
    project: 'wearable-health-monitoring',
    doi: '10.11159/icbb23.110',
    url: 'https://pdfs.semanticscholar.org/7de7/55246563b6590fd476cb21b46a5c75af6a00.pdf',
    linkLabel: 'Read paper (PDF)',
  },
  {
    year: '2021',
    title: 'An IoT-Based Smart Wearable System for Remote Health Monitoring',
    authors: 'Mohammed Abo-Zahhad, Mohammed S. Sayed, Ahmed H. Abd El-Malek, Abdelrahman Fawaz, Ahmed A. Zakaria, Ahmed E. Wahdan, Moaz Elsayed, and Aya Taghian',
    venue: '9th International Japan-Africa Conference on Electronics, Communications, and Computations (JAC-ECC)',
    description: 'The prototype brought motion and vital-sign readings into one wearable device and made them available for remote monitoring.',
    project: 'wearable-health-monitoring',
    doi: '10.1109/JAC-ECC54461.2021.9691431',
    url: 'https://doi.org/10.1109/JAC-ECC54461.2021.9691431',
  },
];
