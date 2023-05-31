// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
  }

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name){
    const newCatsA = [name, ...cats]
    return newCatsA
}
function removeLastCat(){
   return cats.slice(0,2)
}

function removeFirstCat(){
    return cats.slice(1)
}
