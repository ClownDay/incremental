var gameData = {
  coins: 0
};

class Generator {
  constructor(tier, type) {
    this.tier = tier;
    this.type = type;
    this.amount = 0;
    this.purchased = 0;
    this.multiplier = 1;
  }
  
  productionPerTick() {
    return this.amount * this.multiplier;
  }
  
}

const Gen1 = new Generator(1, normal);
