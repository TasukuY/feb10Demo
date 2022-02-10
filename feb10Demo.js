let hamburgerBackpack = []

hamburgerBackpack.push("Bagel Sandwich")
hamburgerBackpack.push("Row Boat")
hamburgerBackpack.push("Mr. Gassy")

hamburgerBackpack.splice(1, 1)

let coat = "Pink BomberJacket"
hamburgerBackpack.push(coat)

hamburgerBackpack.pop()

let itemCount = hamburgerBackpack.length

console.log(itemCount)
console.log(hamburgerBackpack)