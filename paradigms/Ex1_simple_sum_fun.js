/*
Implement sum of 2 numbers
 */

// Imperative Paradigm
var x = 1 ;
var y = 2 ;
var sum = x+y ;
console.log(sum)


// OOP ( Object Oriented  Programming) Paradigm
class SUM {
    constructor() {
        this.x= 1
        this.y = 2
    }
    get sum (){
        return this.x + this.y
    }

}

// Functional paradigm
var sum = (x,y)=> x+y
