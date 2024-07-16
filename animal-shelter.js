const animalData = require('./animal-data.json');

class Animal {
    constructor (name, species, color, hunger=50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }
    greet () {
        console.log(`Hi, my name is ${this.name} the ${this.species}`)
    }
    feed () {
        this.hunger = this.hunger - 20
        console.log(`Yum, I love food`)
    }
}

class Cat extends Animal {
    constructor(name, color, hunger = 50){
        super(name, color, hunger)
        this.species = 'cat'
        this.food = 'fish'
    }
    greet () {
        console.log(`Meow, my name is ${this.name} the ${this.species}`)
    }
    feed () {
        console.log(`Yum, I love ${this.food}`)
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50){
        super(name, color, hunger)
        this.species = 'dog'
        this.food = 'kibble'
    }
    greet () {
        console.log(`Woof, my name is ${this.name} the ${this.species}`)
    }
    feed () {
        console.log(`Yum, I love ${this.food}`)
    }
}

class AnimalShelter {
    constructor () {
        this.animals = []
    }
    addAnimal (animal) {
        this.animals.push(animal)
    }
    adopt (animal) {
        this.animals = this.animals.filter((el) => el.name != animal.name)
    }
    getAnimalBySpecies(species) {
        const speciesArray = []
        this.animals.forEach((animal) => {
            if(animal.species === species)
            {
                speciesArray.push(animal)
            }
        })
        return speciesArray
    }

}

const shelter = new AnimalShelter()

animalData.forEach((el) => {
    let hunger = 50
    if(el.hunger){
        hunger = el.hunger
    }

    let newAnimal = null
    if(el.species === 'cat'){
        newAnimal = new Cat(el.name, el.color, hunger)
    }
    else if(el.species === 'dog'){
        newAnimal = new Dog(el.name, el.color, hunger)
    }
    else{
        newAnimal = new Animal(el.name, el.species, el.color, hunger)
    }
    shelter.addAnimal(newAnimal)
})

//console.log(shelter)
shelter.animals.forEach((animal) => {
    animal.greet()
    animal.feed()
})

//console.log(shelter.getAnimalBySpecies('dog'))