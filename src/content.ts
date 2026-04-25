export const profile = {
  name: 'Logan Diep',
  title: 'Hardware Engineering Portfolio',
  intro: [
    `I'm a computer engineering student focused on hardware engineering, with experience in PCB design, embedded systems, FPGA development, and board-level integration. My work centers on building real hardware, from digital design and microcontroller-based systems to multi-layer PCB architectures for robotics platforms.`,
    `Outside the classroom, I lead electrical development for Stony Brook Robotics Team's MATE ROV, where I work on vehicle power and control architecture, subsystem integration, and a 6-layer motherboard built around an STM32 and Jetson platform. I've also worked in test engineering, building automated board-level diagnostics and improving hardware validation workflows. I enjoy designing systems that are practical, reliable, and technically rigorous, and I'm especially interested in hardware roles that involve PCB design, embedded hardware, and FPGA-based development.`,
  ],
  location: 'Stony Brook, New York',
  email: 'logan.diep1@gmail.com',
  phone: '718-775-6853',
  linkedin: 'linkedin.com/in/logan-diep',
  education: 'B.E. Computer Engineering, Stony Brook University',
  gpa: '3.6 GPA',
};

export const summaryPoints = [
  'Computer engineering student focused on hardware design, embedded systems, FPGA development, and board-level validation.',
  'Experience spans automated test equipment, ROV electrical architecture, hardware bring-up, and technical support roles.',
  'Comfortable across SystemVerilog, VHDL, C/C++, Embedded C, Python, MATLAB, and EDA/test tools.',
];

export const coursework = [
  'Computer Architecture',
  'Digital Design Using VHDL',
  'Embedded MCU Systems Design',
  'Electrical Circuit Analysis',
  'Real-Time Operating Systems',
  'Data Structures & Algorithms',
];

export const projects = [
  {
    name: 'Single-Cycle RISC-V CPU on FPGA',
    summary:
      'Implementing an RV32I single-cycle CPU in SystemVerilog with separate instruction and data memories for a Basys 3 FPGA development board.',
    stack: ['SystemVerilog', 'Xilinx Vivado', 'Testbenches', 'Basys 3 FPGA'],
  },
  {
    name: 'Microcontroller-Based Roulette Wheel',
    summary:
      'Designed an ATmega32U4 PCB with native USB programmability, signal protection, and power regulation for a compact embedded product.',
    stack: ['Altium Designer', 'ATmega32U4', 'USB', 'Power Regulation'],
  },
  {
    name: 'EPL Standings Prediction & Analysis',
    summary:
      'Built a Python data pipeline to scrape, clean, and model season data with automated visualization for performance analysis.',
    stack: ['Python', 'Pandas', 'Plotly', 'Matplotlib'],
  },
];

export const skills = [
  'SystemVerilog',
  'VHDL',
  'TypeScript',
  'C++',
  'Embedded C',
  'C',
  'AVR Assembly',
  'Python',
  'MATLAB',
  'Altium Designer',
  'Xilinx Vivado',
  'Aldec Active-HDL',
  'LTspice',
  'KiCad',
  'OrCAD Capture CIS',
  'Arduino IDE',
  'Microchip Studio',
  'Oscilloscope',
  'Logic Analyzer',
  'Signal Generator',
  'Bench PSU',
  'Spectrum Analyzer',
  'GitHub Actions',
];

export const experience = [
  {
    role: 'Electrical Engineering Intern',
    company: 'BAE Systems, Inc.',
    timeframe: 'Incoming Summer 2026',
    summary: 'Incoming role in the Electronic Systems Hardware Engineering Department.',
  },
  {
    role: 'Test Engineering Intern',
    company: 'SRCTec, LLC',
    timeframe: 'May 2025 - August 2025',
    summary: [
      'Built custom automated test equipment (ATE) incorporating interface test adapter (ITA) modules to automate board-level diagnostics, executing repeatable voltage-rail checks, loopback, and I2C/SPI communication tests.',
      'Standardized LCMR radar test CSVs into JSON and integrated with WATS (Virinco) to enable per-board/test analytics, revealing recurring issues in loopback, voltage, and SPI/I2C/UART tests and prompting targeted design updates.',
      'Created interconnection diagrams in Visio for test stations, documenting PC ports, bench-PSU rails, wave-generator channels, DMM measurement points, and logic-analyzer probes, enabling repeatable board-specific station builds.',
    ],
  },
  {
    role: 'Electrical Team Lead',
    company: 'Stony Brook Robotics Team',
    timeframe: 'May 2025 - Present',
    summary: [
      'Leading electrical for MATE ROV, owning vehicle power and control architecture, running weekly design reviews, and coordinating integration with mechanical/software.',
      'Designing a 6-layer ROV motherboard around an STM32F407 and NVIDIA Jetson, integrating 12V and 5V rail sensing, dual 48V-to-12V power-card interfaces, and 8 ESC thruster channels through modular gold-finger card-slot connectors for scalable power distribution, easier fault isolation, and quick replacement of failed subsystems during debugging.',
      'Creating the ROV\'s Systems Integration Diagram (SID) to document power rails, signal routing, and subsystem integration points.',
    ],
  },
  {
    role: 'Lead Student Technologist',
    company: 'Stony Brook University, Division of Information Technology: Academic Technology Services',
    timeframe: 'January 2024 - Present',
    summary: [
      'Addresses and responds calls from students and professors who have technical issues involving Learning Management Systems',
      'Customizes and resolves trouble tickets that students and professors submit',
      'Organizing and facilitating ECAD/MCAD workshops, instructing over 60 students in foundational electronics design',
    ],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    company: 'Stony Brook University, Department of Electrical and Computer Engineering',
    timeframe: 'January 2026 - May 2026',
    summary: 'ESE 118: Digital Logic Design',
  },
  {
    role: 'Information Technology Intern',
    company: 'NYC Office of Chief Medical Examiner',
    timeframe: 'July 2024 - August 2024',
    summary: [
      'Streamlined device deployment processes, imaging, and integration of over 100 devices across multiple departments for operational efficiency',
      'Conducted in-house quality assurance testing on a case management system application, identifying and reporting bugs, and ensuring the software met performance and usability standards',
      'Assisted in troubleshooting and resolving PC setup issues across different departments, enhancing overall operational efficiency and user satisfaction',
    ],
  },
];

export const projectShowcases = [
  {
    id: 'rov-motherboard',
    name: 'Robotics ROV Control Motherboard',
    description:
      'A custom 6-layer control motherboard for an underwater robotics platform, designed to distribute power, interface with sensors, and coordinate propulsion and actuation systems from a central embedded controller. The design combines dual 48V-to-12V buck converter cards, onboard 5V and 3.3V regulation, an STM32F407-based control section, and modular gold-finger card slots for scalable power and ESC integration. The power converter cards connect to the motherboard through edge-card connectors, allowing the high-power conversion stage to remain modular and serviceable. Eight ESC thruster channels use similar gold-finger card-slot connectors, enabling quick replacement, cleaner wiring, and easier fault isolation. The board also integrates sensor inputs for dual IMUs, rail current sensing, depth sensing, and leak detection, along with stepper driver and servo outputs for auxiliary mechanisms. Altogether, it functions as the electrical backbone of the ROV, providing the processing, power management, and I/O infrastructure needed for reliable vehicle control and subsystem integration.',
    media: [
      { src: './projects/projects-1/image-1.png', label: '3D Motherboard View' },
      { src: './projects/projects-1/image-2.png', label: '2D Motherboard View' },
      { src: './projects/projects-1/image-3.png', label: '3D Buck Converter' },
      { src: './projects/projects-1/image-4.png', label: '2D Buck Converter' },
      { src: './projects/projects-1/image-5.png', label: '3D ESC Cards' },
      { src: './projects/projects-1/image-6.png', label: '2D ESC Cards' },
      { src: './projects/projects-1/image-7.pdf', label: 'Schematic' },
    ],
    tags: [
      'Embedded Systems',
      'STM32',
      'Robotics',
      'Power Distribution',
      'Motor Control',
      'PCB Design',
    ],
    date: 'January 2026 – April 2026',
    details: {
      technologies: [
        'Altium Designer',
        'STM32F407',
        'Buck Converters',
        'Motor Drivers',
        'Stepper Drivers',
        'I2C/UART',
      ],
    },
  },
  {
    id: 'roulette-wheel',
    name: 'Microcontroller-Based Roulette Wheel',
    description:
      'A USB-powered electronic roulette wheel built around an ATmega32U4 microcontroller, with a charlieplexed LED array used to simulate the spinning wheel and final landing position. The schematic shows integrated USB connectivity, ESD protection, a 16 MHz clock, voltage regulation, a buzzer for sound effects, a pushbutton for user input, and current-limited LED drive networks. The result is a compact interactive embedded system that combines firmware timing, multiplexed display control, and simple game logic to create a digital roulette experience with minimal hardware overhead.',
    media: [
      { src: './projects/projects-2/image-1.png', label: '3D Render' },
      { src: './projects/projects-2/image-2.png', label: '2D Layout' },
      { src: './projects/projects-2/image-3.pdf', label: 'Schematic' },
    ],
    tags: [
      'Embedded C',
      'ATmega32U4',
      'LED Multiplexing',
      'USB Device',
      'PCB Design',
    ],
    date: 'May 2025 – June 2025',
    details: {
      technologies: [
        'Altium Designer',
        'ATmega32U4',
        'Charlieplexing',
        'USB Protocol',
        'ESD Protection',
      ],
    },
  },
  {
    id: 'pi-motor-controller',
    name: 'Raspberry Pi Multi-Motor Controller',
    description:
      'A Raspberry Pi Zero 2 W–based motor control board for a small robotic system, integrating dual motor driver modules to control four DC motors, dedicated servo outputs, IR transmitter and receiver circuitry, onboard 5V regulation, battery power input, and GPIO breakout connectivity. The schematic indicates a compact control platform that allows the Raspberry Pi to drive locomotion, read IR sensing inputs, and actuate additional mechanisms such as servos, making it well suited for autonomous or remote-controlled robotic applications. In effect, it serves as a lightweight robotics controller that bridges high-level processing on the Pi with low-level motor and sensor hardware.',
    media: [
      { src: './projects/projects-3/image-1.png', label: '3D PCB View' },
      { src: './projects/projects-3/image-2.png', label: '2D Layout' },
      { src: './projects/projects-3/image-3.pdf', label: 'Schematic' },
    ],
    tags: [
      'Raspberry Pi',
      'Motor Drivers',
      'Robotics',
      'IR Sensing',
      'Power Regulation',
    ],
    date: 'September 2025 – October 2025',
    details: {
      technologies: [
        'Altium Designer',
        'Raspberry Pi Zero 2 W',
        'Motor Driver ICs',
        'GPIO Interfacing',
        'Battery Power',
      ],
    },
  },
  {
    id: 'premier-league-prediction',
    name: 'Premier League Standings Prediction Model',
    description:
      'A comprehensive data analysis and machine learning project that predicts Premier League season standings and outcomes using historical match data from 2013–2026. Originally developed in December 2024 – January 2025, this project has been remade and updated to account for the 2025–26 Premier League season, with the current portfolio display showing the latest analysis and predictions. The pipeline ingests detailed statistics including goals for/against, expected goals (xG), points-per-match ratios, and team performance metrics, then applies predictive modeling to forecast final league positions and championship probabilities. The analysis includes exploratory data visualization, season-by-season trend analysis, team performance clustering, and statistical forecasting. The dashboard displays historical standings, predictive models for upcoming seasons, and interactive visualizations enabling stakeholders to explore team trajectories, relegation risks, and championship contenders.',
    media: [
      { src: './projects/projects-4/image-1.png', label: 'Premier League Table (4/21/2026)' },
      { src: './projects/projects-4/image-2.png', label: 'Projected Points & Standings' },
      { src: './projects/projects-4/image-3.png', label: 'Top 4 Finishes Graph' },
      { src: './projects/projects-4/image-4.png', label: 'Championship Win Probabilities' },
    ],
    tags: ['Data Science', 'Prediction', 'Python', 'Machine Learning', 'Sports Analytics'],
    date: 'December 2024 – January 2025',
    details: {
      technologies: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'Plotly',
        'Jupyter Notebooks',
        'Statistical Modeling',
      ],
    },
  },
];