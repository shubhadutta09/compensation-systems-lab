# The Compensation Systems Lab

A full-stack research portfolio and analytics platform by **Subhadra Dutta, PhD**.

This project demonstrates applied compensation systems research across behavioral science, organizational psychology, labor economics, and analytics.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- TailwindCSS
- Chart.js + D3.js
- Node.js API routes
- Python analytics microservice (Flask)
- OpenAI API integration (AI compensation advisor)

## Repository Structure

```text
compensation-systems-lab/
  app/
    page.tsx
    layout.tsx
    projects/
      psychology-compensation/
      performance-pay/
      labor-market-intelligence/
      pay-equity/
      equity-waterfall/
    experimental-studies/
      conjoint-study/
      pay-pathing/
      talent-pay-potential/
      macro-pay/
    tools/
      compensation-simulator/
      ai-compensation-advisor/
      compensation-budget-simulator/
    dashboard/
      labor-market-dashboard/
    api/
      comp-recommendation/
      labor-market/
      budget-simulation/
  components/
    charts/
    ui/
  data/
    performance_pay_data.csv
    pay_equity_data.csv
    labor_market_data.json
    equity_distribution.json
  api/
    comp-recommendation/
  styles/
  services/
    python-analytics/
  README.md
```

## Features

- Academic-style research lab site design (serif headings, clean typography, large margins)
- Full project portfolio pages with dedicated visualizations
- Experimental studies section with charts
- Interactive tools:
  - Compensation Package Simulator
  - AI Compensation Advisor
  - Compensation Budget Simulator (1000-iteration Monte Carlo)
- Labor Market Dashboard with role/location/industry filters
- Curated research repository
- Methods, future essays, and about pages
- OpenAI-backed recommendation explanations with deterministic fallback

## Local Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env.local
```

Set:

- `OPENAI_API_KEY` (optional, enables AI explanation generation)

If `OPENAI_API_KEY` is not set, the advisor route still returns deterministic recommendations and explanation text.

### 3. Run Next.js app

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

## Python Analytics Service (Optional)

A Flask microservice is included for analytics extension workflows.

```bash
cd services/python-analytics
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python app.py
```

Service runs on [http://localhost:8001](http://localhost:8001).

Endpoints:

- `GET /health`
- `POST /budget`

## API Routes (Next.js)

- `POST /api/comp-recommendation`
  - Input: role, level, performance rating, market benchmark, retention risk, location
  - Output: salary adjustment, equity refresh grant, bonus adjustment, explanation, confidence score

- `POST /api/budget-simulation`
  - Input: headcount growth, promotion rate, merit increase budget, equity refresh rate, iterations
  - Output: expected budget, percentiles, histogram

- `GET /api/labor-market`
  - Optional query params: `role`, `location`, `industry`

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import project in Vercel.
3. Set `OPENAI_API_KEY` in Vercel Environment Variables (optional but recommended).
4. Deploy.

No extra build configuration is required for the Next.js app.

## Notes

- Datasets in `/data` are simulated and structured for fast demo rendering.
- The UI is intentionally academic and research-forward rather than corporate consulting style.
