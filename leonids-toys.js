const toyToFind = 2

const toys = [
    {
        id: 1,
        name: "PlayStation 5",
        maker: "Sony",
        quantity: 7,
        price: 499.99,
        stock: false
    },
    {
        id: 2,
        name: "Gloomhaven",
        maker: "Cephalofair Games",
        quantity: 22,
        price: 199.99,
        stock: true
    },
    {
        id: 3,
        name: "Dungeons and Dragons: 5th edition",
        maker: "Wizards of the Coast",
        quantity: 20,
        price: 99.99,
        stock: true
    }
]


const beyblade = {
    id: 4,
    name: "Beyblades",
    maker: "Takara Tomy",
    quantity: 300,
    price: 9.99,
    stock: true
}
const wardedMan = {
    id: 5,
    name: "Warded Man Boxed Set",
    maker: "Peter V. Brett",
    quantity: 25,
    price: 59.99,
    stock: true

}
toys.push(beyblade)
toys.push(wardedMan)


const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxID = currentLastToy.id
    const idForNewToy = maxID + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const legendOfDrizzt = {
    name: "Legend of Drizzt Series Set",
    maker: "R.A. Salvatore",
    quantity: 22,
    price: 109.99,
    stock: true
}

addToyToInventory(legendOfDrizzt)

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price + toy.price * .05
    }
    console.log(`The price of the ${toy.name} is $${toy.price} and it is made by ${toy.maker}.`)

}