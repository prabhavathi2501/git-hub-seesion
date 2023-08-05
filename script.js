//var countdown = 10;
//var i =0;
//while(i < countdown)

//console.log(countdown);
//countdown--;
//console.log(Math.floor(5.8)); 
//console.log(Math.floor(-4.7));
 

//console.log(Math.floor(5.8)); 
//console.log(Math.floor(-4.7));

// var a = 10;
//var b =  40;
//var c = a+b;
//console.log(`the value of a: ${a}
//the value of b: ${b}
//the value of c: ${c}`)
//console.log(`${a} ${b} ${c}`)


//===>this refer the paticular object
//====>this refer immetiate contant   
//console.log(this.length)
//console.log(this.innerHeight)
//console.log(this.ondrop)

//const car1 ={
    //Brand: "hondacity",
    //color: "red",
    //year: "2021",
   // drive: function() {
        //console.log(`your drive the ${this.Brand}`)
    //}
//}
//car1.drive();
const car2 ={
    Brand: "hero",
    color: "yellow",
    year: "2023",
    drive: function() {
        console.log(car2)
        console.log(`the car is properties: ${this.color} ${this.Brand} ${this.year}`)
        console.log(this.color)
    }
}
car2.drive();
const car1 ={
    Brand: "hondacity",
    color: "red",
    year: "2021",
    drive: function() {
        console.log(`your drive the ${this.Brand}`)
    }
}
car1.drive();


