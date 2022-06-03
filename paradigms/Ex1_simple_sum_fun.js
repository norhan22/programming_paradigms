/*
Implement sum of 2 numbers
 */

///////////////////////////
// Imperative Paradigms
///////////////////////////

/*# Procedural */

var x = 1 ;
var y = 2 ;
var sum = x+y ;
console.log(sum)


// OOP ( Object-Oriented  Programming)
class SUM {
    constructor(x,y) {
        this.x= x
        this.y = y
    }
    get result (){
        return this.x + this.y
    }

}

console.log( new SUM(1,2).result())


///////////////////////////
// Declarative Paradigms
///////////////////////////
// Functional paradigm
var sum = (x,y)=> x+y
console.log(sum)