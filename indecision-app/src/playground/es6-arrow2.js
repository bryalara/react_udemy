
const add= (a,b) => {
    // console.log(arguments);
    return a+b;
};
console.log(add(55,1, 1001));


const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York','Dublin'],
    printPlacesLived () {
        return this.cities.map((city)=> this.name + ' had live in '+ city);
    }
};

console.log(user.printPlacesLived());



const multiplier = {
    numbers: [1,4,7],
    multiplyBy: 2,

    multiply(){
        return this.numbers.map((num)=>  num* this.multiplyBy);
    }

};
console.log(multiplier.multiply());