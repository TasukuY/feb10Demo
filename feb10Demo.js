let hamburgerBackpack = []

hamburgerBackpack.push("Bagel Sandwich")
hamburgerBackpack.push("Row Boat")
hamburgerBackpack.push("Mr. Gassy")

hamburgerBackpack.splice(1, 1)

let coat = "Pink BomberJacket"
hamburgerBackpack.push(coat)

hamburgerBackpack.pop()

hamburgerBackpack.push("Extra shoes", "Juice Boxes", "First Aid Kit","Camera", "Garnet's cat")

let hotdogDufflebag = hamburgerBackpack.splice(2, 3)
if(hamburgerBackpack.length >= 3){
    for(let i = 0; i < 3; i++){
        console.log(hamburgerBackpack[i])
    }
}else{
    for(let i = 0; i < hamburgerBackpack.length; i++){
        console.log(hamburgerBackpack[i])
    }
}
// for(let i = 0; i < hamburgerBackpack.length; i++){
//     console.log("ham: ", hamburgerBackpack[i])
// }

// for(let i = 0; i < hotdogDufflebag.length; i++){
//     console.log("hot: ", hotdogDufflebag[i])
// }

// let itemCount = hamburgerBackpack.length
// console.log(itemCount)
// console.log(`HamburgerBackpack: `, hamburgerBackpack)
// console.log(`HotdogDufflebag: `, hotdogDufflebag)