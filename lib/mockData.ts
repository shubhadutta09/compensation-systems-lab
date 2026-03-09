export const preferenceClusters = [
  { name: "Security-first", salary: 82, equity: 25, pto: 58, learning: 42 },
  { name: "Balanced", salary: 61, equity: 57, pto: 49, learning: 55 },
  { name: "Upside-seeking", salary: 38, equity: 88, pto: 36, learning: 73 }
];

export const equitySalaryPoints = [
  { x: 35, y: 90 },
  { x: 45, y: 82 },
  { x: 55, y: 70 },
  { x: 62, y: 58 },
  { x: 72, y: 45 },
  { x: 80, y: 35 }
];

export const payCompression = [
  { quarter: "Q1", value: 0.66 },
  { quarter: "Q2", value: 0.7 },
  { quarter: "Q3", value: 0.74 },
  { quarter: "Q4", value: 0.78 }
];

export const laborHeatmap = [
  { role: "ML Engineer", dimension: "Modeling", value: 0.92 },
  { role: "ML Engineer", dimension: "MLOps", value: 0.85 },
  { role: "AI Researcher", dimension: "Research", value: 0.97 },
  { role: "AI Researcher", dimension: "Modeling", value: 0.94 },
  { role: "Product Manager", dimension: "Strategy", value: 0.58 },
  { role: "Product Manager", dimension: "Execution", value: 0.52 },
  { role: "Data Analyst", dimension: "SQL", value: 0.36 },
  { role: "Data Analyst", dimension: "BI", value: 0.34 }
];

export const adjustedPayGap = [
  { group: "Reference", gap: 0 },
  { group: "Group A", gap: -2.2 },
  { group: "Group B", gap: -1.3 },
  { group: "Group C", gap: -0.7 }
];

export const payEquityCoefficients = [
  { feature: "Role", value: 0.12 },
  { feature: "Level", value: 0.28 },
  { feature: "Tenure", value: 0.1 },
  { feature: "Performance", value: 0.2 },
  { feature: "Location", value: 0.09 },
  { feature: "Unexplained", value: -0.06 }
];

export const conjointImportance = [
  { label: "Salary", value: 33 },
  { label: "Equity", value: 24 },
  { label: "Benefits", value: 15 },
  { label: "Company brand", value: 11 },
  { label: "Learning opportunities", value: 17 }
];

export const payPathing = [
  { year: "Year 1", ic: 95000, mgmt: 98000, tech: 101000 },
  { year: "Year 2", ic: 106000, mgmt: 113000, tech: 118000 },
  { year: "Year 3", ic: 118000, mgmt: 132000, tech: 141000 },
  { year: "Year 4", ic: 131000, mgmt: 153000, tech: 167000 },
  { year: "Year 5", ic: 145000, mgmt: 176000, tech: 196000 }
];

export const talentPayMatrix = [
  { bucket: "High potential / High pay growth", count: 38 },
  { bucket: "High potential / Low pay growth", count: 24 },
  { bucket: "Low potential / High pay growth", count: 15 },
  { bucket: "Low potential / Low pay growth", count: 23 }
];

export const macroSeries = [
  { year: "2021", inflation: 4.7, unemployment: 5.4, funding: 74, wageGrowth: 4.1 },
  { year: "2022", inflation: 8.0, unemployment: 3.7, funding: 64, wageGrowth: 4.8 },
  { year: "2023", inflation: 4.1, unemployment: 3.9, funding: 57, wageGrowth: 3.9 },
  { year: "2024", inflation: 3.1, unemployment: 4.1, funding: 60, wageGrowth: 3.6 },
  { year: "2025", inflation: 2.8, unemployment: 4.2, funding: 66, wageGrowth: 3.5 }
];

export const salaryTrend = [
  { month: "Jan", ml: 182000, ai: 206000, pm: 164000, da: 114000 },
  { month: "Feb", ml: 183500, ai: 207500, pm: 165000, da: 114500 },
  { month: "Mar", ml: 184000, ai: 208500, pm: 165500, da: 115500 },
  { month: "Apr", ml: 185500, ai: 209000, pm: 166000, da: 116000 },
  { month: "May", ml: 186000, ai: 210000, pm: 166500, da: 116500 },
  { month: "Jun", ml: 186500, ai: 211000, pm: 167500, da: 117000 }
];

export const researchRepository = [
  {
    category: "Motivation and incentives",
    title: "Incentive Effects on Task Performance",
    authors: "Ariely et al.",
    summary: "Explores non-linear relationships between incentives and cognitive task quality.",
    insight: "Large incentives can backfire for complex tasks."
  },
  {
    category: "Organizational justice",
    title: "Organizational Justice Meta-Analysis",
    authors: "Colquitt et al.",
    summary: "Synthesizes distributive, procedural, and interactional justice outcomes.",
    insight: "Process fairness is a powerful predictor of trust."
  },
  {
    category: "Behavioral economics",
    title: "Reference Dependence in Compensation",
    authors: "Kahneman & Tversky inspired line",
    summary: "Shows compensation preferences anchor on reference points and fairness narratives.",
    insight: "Framing affects reward acceptance and motivation."
  },
  {
    category: "Labor economics",
    title: "Wage Dynamics Under Labor Tightness",
    authors: "Blanchard and Katz",
    summary: "Connects wage movement with regional labor market pressure.",
    insight: "Pay bands should adapt to local labor constraints."
  },
  {
    category: "Pay transparency",
    title: "Pay Transparency and Equity",
    authors: "Cullen and Perez-Truglia",
    summary: "Analyzes consequences of transparency policies for trust and pay distribution.",
    insight: "Transparency narrows unexplained disparities."
  }
];
