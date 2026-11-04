interface Publication {
  year: string;
  title: string;
  authors: string;
  venue: string;
  description: string;
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
    description: 'A controlled ns-3/5G-LENA study of differentiated treatment for diagnostics, maintenance alerts, and fault reporting under congestion.',
    doi: '10.1108/JQME-06-2026-0131',
    url: 'https://doi.org/10.1108/JQME-06-2026-0131',
  },
  {
    year: '2023',
    title: 'Fall Detection Algorithm Using a Smart Wearable System for Remote Health Monitoring',
    authors: 'Abdelrahman Fawaz, Moaz Elsayed, Ahmed Sharshar, Mohammed S. Sayed, Ahmed H. Abd El-Malek, and Mohammed Abo-Zahhad',
    venue: 'ICBB · 9th World Congress on New Technologies',
    description: 'Wearable motion sensing and support-vector classification for fall detection.',
    doi: '10.11159/icbb23.111',
    url: 'https://doi.org/10.11159/icbb23.111',
  },
  {
    year: '2023',
    title: 'Design of Smart Wearable System for Sleep Tracking Using SVM and Multi-Sensor Approach',
    authors: 'Moaz Elsayed, Abdelrahman Fawaz, Ahmed H. Abd El-Malek, Mohammed S. Sayed, Ahmed Sharshar, and Mohammed Abo-Zahhad',
    venue: 'ICBB · 9th World Congress on New Technologies',
    description: 'Multisensor acquisition and support-vector models for sleep-related classification.',
    doi: '10.11159/icbb23.110',
    url: 'https://pdfs.semanticscholar.org/7de7/55246563b6590fd476cb21b46a5c75af6a00.pdf',
    linkLabel: 'Read paper (PDF)',
  },
  {
    year: '2021',
    title: 'An IoT-Based Smart Wearable System for Remote Health Monitoring',
    authors: 'Mohammed Abo-Zahhad, Mohammed S. Sayed, Ahmed H. Abd El-Malek, Abdelrahman Fawaz, Ahmed A. Zakaria, Ahmed E. Wahdan, Moaz Elsayed, and Aya Taghian',
    venue: '9th International Japan-Africa Conference on Electronics, Communications, and Computations (JAC-ECC)',
    description: 'An embedded multisensor monitoring system combining motion and vital-sign sensing with a remote monitoring workflow.',
    doi: '10.1109/JAC-ECC54461.2021.9691431',
    url: 'https://doi.org/10.1109/JAC-ECC54461.2021.9691431',
  },
];
