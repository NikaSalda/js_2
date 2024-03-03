var y = parseInt(prompt("guess number between 0 to 20"))
var x = parseInt(Math.random() * 20)

console.log(x)

if(y == x){
    console.log("it is correct")
}
else{
    while(y!=x){
        if(x > y){
            y = prompt("it is incorrect and it is less than original number")
        }
        else if(y > x){
            y = prompt("it is incorrect and it is greater than original number")
        }
        
    }
    console.log("it is correct")
}




// პროექტის მეორე დავალება
// მომხმარებელმა უნდა გამოიცნოს რიცხვი რომელიც იქნება რენდომ.
// ამავდროულად უნდა მოხდეს მინიშNების მიცემა უფრო მაღლა უნდა ეძებოს რიცხვი თუ უფრო დაბლა.