// Exercise 1
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      console.log('Im no longer hungry!')
    }
  }
}

person.feed() //should log "I'm no longer hungry"

// Exercise 2
const pump = function (amount) {
  this.liters += amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

const garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// Exercise 3
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,
  fly: function () {
    if (this.fuel < 2) {
      return 'on the ground!';
    }
    else {
      return 'flying!';
    }
  }
};

console.log('The plane should not be able to fly (yet): ' + airplane.fly());

pumpFuel(airplane);
console.log('The plane should STILL not be able to fly: ' + airplane.fly());

pumpFuel(airplane);
console.log('Take off! ' + airplane.fly());

// Exercise 4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (num) {
    this.coinCount -= num;
  }
};

tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);


// Exercise 5
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  console.log(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

const narkis = {
  name: "Narkis",
  secret: "I don't have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

// Exercise 6
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    let beansNeeded = this.drinkRequirements[drinkType];
    if (beansNeeded === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    if (this.beans < beansNeeded) {
      console.log("Sorry, we're all out of beans");
      return;
    }
    this.beans -= beansNeeded;
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
console.log("--------------");

// Exercise 6.1-2
const coffeeShop2 = {
  beans: 40,
  money: 100,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 8 },
    frenchPress: { beanRequirement: 12, price: 7 },
  },

  buyBeans: function (numBeans) {
    let beanCost = 2;
    let totalCost = numBeans * beanCost;
    this.money -= totalCost;
    this.beans += numBeans;
  },

  buyDrink: function (drinkType) {
    this.money += this.drinkRequirements[drinkType].price;
    this.makeDrink(drinkType);
  },

  makeDrink: function (drinkType) {
    let drink = this.drinkRequirements[drinkType];
    if (drink === undefined) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }
    let beansNeeded = drink.beanRequirement;
    if (this.beans < beansNeeded) {
      console.log("Sorry, we're all out of beans for " + drinkType);
      return;
    }
    this.beans -= beansNeeded;
    console.log("Successfully made a " + drinkType);
  }
}

coffeeShop2.makeDrink("latte");
coffeeShop2.makeDrink("americano");
coffeeShop2.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop2.makeDrink("doubleShot");
coffeeShop2.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
coffeeShop2.buyBeans(12);
coffeeShop2.makeDrink("frenchPress");
coffeeShop2.buyDrink("latte");

