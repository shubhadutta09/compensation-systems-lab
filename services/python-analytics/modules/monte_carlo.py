import random


def run_budget_simulation(headcount_growth, promotion_rate, merit_increase_budget, equity_refresh_rate, iterations=1000):
    base_budget = 50_000_000
    outcomes = []

    for _ in range(iterations):
      noise = (random.random() - 0.5) * 0.06
      budget = base_budget * (
        1
        + (headcount_growth / 100) * 0.7
        + (promotion_rate / 100) * 0.4
        + (merit_increase_budget / 100)
        + (equity_refresh_rate / 100) * 0.3
        + noise
      )
      outcomes.append(budget)

    outcomes.sort()
    p10 = outcomes[int(iterations * 0.1)]
    p50 = outcomes[int(iterations * 0.5)]
    p90 = outcomes[int(iterations * 0.9)]
    expected = sum(outcomes) / len(outcomes)

    return {
      "expectedBudget": expected,
      "p10": p10,
      "p50": p50,
      "p90": p90,
    }
