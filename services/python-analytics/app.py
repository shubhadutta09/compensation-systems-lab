from flask import Flask, jsonify, request
from modules.monte_carlo import run_budget_simulation

app = Flask(__name__)


@app.get("/health")
def health():
    return jsonify({"status": "ok"})


@app.post("/budget")
def budget():
    payload = request.get_json(force=True)
    result = run_budget_simulation(
        payload.get("headcountGrowth", 10),
        payload.get("promotionRate", 8),
        payload.get("meritIncreaseBudget", 4),
        payload.get("equityRefreshRate", 20),
        payload.get("iterations", 1000),
    )
    return jsonify(result)


if __name__ == "__main__":
    app.run(port=8001)
