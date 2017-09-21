class Pet{
	constructor(name){
		this.name = name;
		this.owner = '';
	}
	setOwner(owner){
		this.owner = owner;
	}
}


class Dog extends Pet{
	constructor(price,name){
	super(name)
	this.price = price;
	}
	bark(){
		console.log("Bark")
	}
	chaseTail(){
		console.log('oh boy oh boy oh boy')
	}
	getPrice(){
		return this.price;
	}
}

const sparky = new Dog('5 bucks','old yeller');
sparky.bark()
sparky.chaseTail()
sparky.getPrice()
console.log(sparky)

class Cat extends Pet{
	constructor(price, name){
		super(name)
	}
	purr(){
		console.log('purrrrrr')
	}
	clean(){
		console.log("cleaning")
	}
	getPrice(){
	return this.price;
	}
};



const sprinkles = new Cat('dollar', 'fluffy');
sprinkles.purr()
sprinkles.clean()
sprinkles.getPrice()
console.log(sprinkles)


class Person{
	constructor(name){
		this.age = 0;
		this.weight = 0;
		this.mood = 0;
		this.pets = []
		this.bankaccount = 0;
	}
	getName(){
		return this.name;
	}
	getAge(){
		return this.age;
	}
	getWeight(){
		return this weight;
	}
	greet(anotherPerson){
		console.log("sup" + anotherPerson)
	}
	eat(){
		return this.weight = this.weight += 1;
	}
	exercise(){
		return this.weight = this.weight -= 1;
	}
	age(){
		return this.age = this.age += 1;
		return this.weight = this.weight += 1;
		return this.mood = this.mood -= 1;
		return this.bankaccount += 10;
	}
	buyPet(pet){
		return this.pets.push(pet)
		return this.mood += 10;
		return bankaccount - pet.getPrice()
	}
}

const jill = new Person('jill')
jill.getName();
jill.getAge();
jill.getWeight();
jill.greet('Jeff');
jill.eat();
jill.exercise();
jill.age();
jill.buyPet('sprinkles');
jill;

























