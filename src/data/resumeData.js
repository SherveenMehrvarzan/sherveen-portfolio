export const resumeData = {
  name: "Sherveen Mehrvarzan",
  title: "M.S. Mechanical Engineering — University of Washington",
  email: "shervm@uw.edu",
  links: {
    resume: "/SherveenMehrvarzan_FinalResume.pdf",
  },
    skills: [
    "High-voltage battery design (128S1P / 537.5V)",
    "Battery thermal modeling & Python simulations",
    "Embedded firmware & CAN (Python, C++)",
    "ADC/CAN debugging, oscilloscope & SPI",
    "PCB design (Altium), HV/LV circuitry",
    "CAD & FEA (SolidWorks, ANSYS)",
    "Testing, DAQ, sensor integration (5–200 Hz)",
    "Manufacturing & CAM (CNC mills, lathes)",
    "Vehicle dynamics, EV controls",
    "Antenna/EMC enclosures, vibration & fatigue (Miles’ Eq., Miner’s Rule)",
  ],

  highlights: [
    {
      id: "powertrain",
      logo: "/images/logo-uw-fsae.png",
      role: "Electric Powertrain Lead — UW Formula Motorsports",
      period: "Jun 2024 — Jun 2025",
      blurb: "537.5V battery redesign (128S1P), Python thermal sims, HV safety"
    },
    {
      id: "firmware",
      logo: "/images/logo-fw.png",
      role: "Firmware Member — UW Formula Motorsports",
      period: "Jun 2023 — Jun 2024",
      blurb: "550V pack charging GUI & state machine; LTC2449 C++ lib; 30+ sensors over CAN"
    },
    {
      id: "fsae",
      logo: "/images/logo-uw.png",
      role: "Technical Director — UW Formula Motorsports",
      period: "Jun 2022 — Jun 2023",
      blurb: "Led 80+ members; system integration; 3rd overall FSAE Michigan 2023"
    },
    {
      id: "suspension",
      logo: "/images/logo-uw.png",
      role: "Suspension Lead — UW Formula Motorsports",
      period: "Mar 2021 — Jun 2022",
      blurb: "Kinematics, FEA in Ansys, SolidWorks, manufacturing (CNC/Lathes)"
    },
    {
      id: "secondorder",
      logo: "/images/logo-secondorder.png",
      role: "Electrical Eng. Intern — Second Order Effects",
      period: "Sep 2023 — Dec 2023",
      blurb: "Altium PCBs; HV/LV circuitry; DC load switching & current sensing; PWM filtering"
    },
    {
      id: "tesla",
      logo: "/images/logo-tesla.png",
      role: "Mechanical Eng. Intern — Tesla",
      period: "Jun 2023 — Sep 2023",
      blurb: "Torque testing, resonance fatigue, lateral link fatigue bench, brake dyno"
    },
    {
      id: "boeing",
      logo: "/images/logo-boeing.png",
      role: "Product Dev. Intern — Boeing Commercial Airplanes",
      period: "Jun 2022 — Sep 2022",
      blurb: "Inboard flap torque tube design; wing mechanisms; composites training"
    },
    {
      id: "spacex",
      logo: "/images/logo-spacex.png",
      role: "Mechanical Eng. Intern — SpaceX",
      period: "Jun 2024 — Sep 2024",
      blurb: "Antenna geometry & gain optimization; EMC enclosures; vib testing brackets"
    },
    {
      id: "amazon",
      logo: "/images/logo-amazon.png",
      role: "Electromechanical Co-op — Amazon Robotics",
      period: "Jan 2025 — Jun 2025",
      blurb: "TCC machine; pulley life calc; gripper redesign; >$3M/yr projected savings"
    }
  ],

  experiences: [
    {
      id: "powertrain",
      company: "UW Formula Motorsports",
      logo: "/images/logo-uw-fsae.png",
      role: "Electric Powertrain Lead",
      period: "Jun 2024 — Jun 2025",
      bullets: [
        "Designed a 537.5V 128S1P battery with complete HV redesign.",
        "Set performance goals and analyzed thermal losses and efficiency.",
        "Developed Python simulations modelling battery thermal behavior with active cooling during charge/discharge.",
        "Managed safety and HV circuitry; mentored junior engineers."
      ],
      images: ["/images/fsae.jpg"]
    },
    {
      id: "firmware",
      company: "UW Formula Motorsports",
      logo: "/images/logo-fw.png",
      role: "Firmware Member",
      period: "Jun 2023 — Jun 2024",
      bullets: [
        "Developed charging firmware for a 550V pack; Python for CAN read/write.",
        "Built GUI and state-machine for charging safety checks.",
        "Debugged ADC & CAN transceiver via oscilloscope SPI lines; wrote C++ library for LTC2449 ADC.",
        "Managed 30+ sensors (5–200 Hz), parsing analog data and distributing over CAN."
      ],
      images: ["/images/firmware.jpg"]
    },
    {
      id: "fsae",
      company: "UW Formula Motorsports",
      logo: "/images/logo-uw.png",
      role: "Technical Director",
      period: "Jun 2022 — Jun 2023",
      bullets: [
        "Oversaw technical operations for 80+ members; reviewed ME & EE designs.",
        "Led integration of electrical & mechanical subsystems; set top-level goals & timelines.",
        "Competition: FSAE Michigan 2023 — 3rd overall; Accel (3rd), AutoX (3rd), Endurance (2nd), Design (5th), Skidpad (5th)."
      ],
      images: ["/images/td.jpg"]
    },
    {
      id: "suspension",
      company: "UW Formula Motorsports",
      logo: "/images/logo-uw.png",
      role: "Suspension Lead",
      period: "Mar 2021 — Jun 2022",
      bullets: [
        "Taught kinematic suspension geometry & vehicle dynamics; mechanical design integration.",
        "Validated structures via mechanics of materials & FEA (Ansys).",
        "Managed advanced assemblies & complex parts in SolidWorks; CAM for CNC mills & conventional lathes."
      ],
      images: ["/images/suspension.jpg"]
    },
    {
      id: "secondorder",
      company: "Second Order Effects",
      logo: "/images/logo-secondorder.png",
      role: "Electrical Engineering Intern",
      period: "Sep 2023 — Dec 2023",
      bullets: [
        "Designed PCBs in Altium; fault testing; firmware on PCBs for clients.",
        "Built HV/LV compatible circuitry; DC load switching with current sensing; AC current sensing with shunts & amplifiers.",
        "Implemented PWM duty-cycle filtering & buffering circuits."
      ],
      images: ["/images/soe.jpg"]
    },
    {
      id: "tesla",
      company: "Tesla",
      logo: "/images/logo-tesla.png",
      role: "Mechanical Engineering Intern",
      period: "Jun 2023 — Sep 2023",
      bullets: [
        "Cybertruck ultrasonic torque durability testing; clamp load data collection for joint design improvements.",
        "Investigated O-ring failure (Model 3/Y) via resonance fatigue testing to determine root cause.",
        "Developed fatigue test bench for lateral links (S/X/3/Y); designed brake dyno adapters (half-shafts, custom key & gear tooth).",
        "Studied corrosion in extreme-weather subframes; proposed mitigation; planned validation for new knuckle boot designs."
      ],
      images: ["/images/tesla.jpg"]
    },
    {
      id: "boeing",
      company: "Boeing Commercial Airplanes",
      logo: "/images/logo-boeing.png",
      role: "Product Development Engineering Intern",
      period: "Jun 2022 — Sep 2022",
      bullets: [
        "Kinematic design practices for wing edge mechanisms (BCA).",
        "Inboard flap torque tube design (future BCA program).",
        "Capstone: inboard flap mechanism in kinematics course.",
        "Composite layups & bagging (Boeing Concept Center course)."
      ],
      images: ["/images/boeing.jpg"]
    },
    {
      id: "spacex",
      company: "SpaceX",
      logo: "/images/logo-spacex.png",
      role: "Mechanical Engineering Intern",
      period: "Jun 2024 — Sep 2024",
      bullets: [
        "Contributed to next-gen antenna design; optimized main reflector geometry and antenna gain.",
        "Rapid prototyped EMC-conscious enclosures for power electronics; reduced interference in high-EMI environments.",
        "MATLAB tool to generate antenna variants from geometry (reflector diameters, subtend angle, focus length).",
        "Formulated equations for aperture efficiency, feed losses, spillover efficiency; Gregorian geometry.",
        "Environmental attenuation testing (self-designed water & wind jigs).",
        "Redesigned gateway AC units to withstand transportation vibration profiles; test brackets & vibe bed testing.",
        "Applied Miles' Equation & Miner's Rule to derive max G loads & fatigue stress from PSD curves."
      ],
      images: ["/images/spacex.jpg"]
    },
    {
      id: "amazon",
      company: "Amazon Robotics",
      logo: "/images/logo-amazon.png",
      role: "Electromechanical Co-op",
      period: "Jan 2025 — Jun 2025",
      bullets: [
        "Developed & tested Transfer Cartesian Cell (TCC) machine for rapid tote transfer.",
        "Specified pulley mechanism for bearing cart rail system; in-house bearing life calculator for unique travel paths.",
        "Researched & developed mechanical grippers replacing legacy pneumatics; projected >$3M annual savings per building."
      ],
      images: ["/images/amazon.jpg"]
    }
  ],

  awards: [
    "FSAE Michigan 2023 — 3rd Overall (3rd Accel, 3rd AutoX, 2nd Endurance, 5th Design, 5th Skidpad)",
    "UW College of Engineering — Leadership Recognition",
    "Amazon Robotics — Projected >$3M annual savings via gripper redesign (team project)"
  ],

  education: [
    {
      school: "University of Washington",
      degree: "M.S., Mechanical Engineering",
      period: "Graduating June 2026",
      notes: "Focus: Powertrain systems, HV batteries, embedded systems"
    },
    {
      school: "University of Washington",
      degree: "B.S., Mechanical Engineering",
      period: "June 2024 — GPA 3.8/4.0",
      notes: "Kinematics & Dynamics, Mechanics of Materials, Materials, Applied Computing, Statics, Chemistry, Calculus, Physics, Thermodynamics, Systems/Fluids, FEA, Embedded Systems, Machining"
    }
  ]
}
