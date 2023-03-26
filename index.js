// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyAppendCat = [...cats, name];
    return copyAppendCat;
}

function prependCat(name) {
    const copyPrependCat = [name, ...cats];
    return copyPrependCat;
}

function removeLastCat() {
    const copyRemoveLastCat = cats.slice(0, cats.length - 1);
    return copyRemoveLastCat;
}

function removeFirstCat() {
    const copyRemoveFirstCat = cats.slice(1);
    return copyRemoveFirstCat;
}