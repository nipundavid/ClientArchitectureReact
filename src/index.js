
//Constructor Pattern
function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {

  this.color = theColor;
  this.sweetness = theSweetness;
  this.fruitName = theFruitName;
  this.nativeToLand = theNativeToLand;

  this.showName = function () {
      console.log("This is a " + this.fruitName);
  }

  this.nativeTo = function () {
  this.nativeToLand.forEach(function (eachCountry)  {
     console.log("Grown in:" + eachCountry);
      });
  }
}

var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); 
// This is a Mango.
mangoFruit.nativeTo();
// Grown in:South America
// Grown in:Central America
// Grown in:West Africa

var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); 
// This is a Pineapple.
pineappleFruit.nativeTo()
// Grown in: United States



//Prototype Pattern
function car (manufacturer, engineType, transmission) {
  this.manufacturer = manufacturer;
  this.engineType = engineType;
  this.transmission = transmission;

  this.showManufacturer = function() {
    console.log("Manufacturer is: "+this.manufacturer);
  }

  this.showEngineType = function() {
    console.log("Engine type is: "+this.engineType);
  }

  this.showTransmission = function() {
    console.log("Transmission is: "+this.transmission);
  }
}


var myCar = new car("BMW", "Petrol", "Manual");
myCar.showManufacturer();
myCar.showEngineType();
myCar.showTransmission();


// added one variable in the class -> isHybrid
car.prototype.isHybrid = true;
// added one method in the class -> startCar
car.prototype.startCar = function () {
  console.log("start my"+this.manufacturer);
}

var myAnotherCar = new car("Tesla", "Electric","automatic",true)
console.log(myAnotherCar.isHybrid);
myAnotherCar.startCar();
