function search(budget, prices) {
    return prices.filter(p => p <= budget).sort((a,b) => a-b).join();
  }