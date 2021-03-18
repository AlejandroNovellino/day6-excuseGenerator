let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function getRandom(array){
    return array[Math.floor(Math.random()*array.length)];
}

function displayRandom(){
    return `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}`;
}
document.getElementById("excuse").innerHTML = displayRandom();
