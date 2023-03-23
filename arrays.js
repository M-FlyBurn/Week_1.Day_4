let backpack = []

backpack.push('jacket','water','snack', 'sunglasses')

let jacket = backpack.splice(0,1)

//let inventory = backpack.splice()
let fannyPack = backpack.splice(0,2)
//console.log(fannyPack)

backpack.unshift('cool stick', 'shiny rock')


//console.log(backpack)
let inHand = 0


for(i=0; i < backpack.length; i++){
    console.log(backpack[i])
    if (backpack[i] === 'sunglasses'){
       // inHand = backpack.splice(i,1)
       console.log(backpack[i,i])
    }
}

//console.log(inHand)
//console.log(backpack)

inHand = fannyPack.pop()
console.log(inHand)


