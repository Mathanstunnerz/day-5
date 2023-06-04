// forloop 

for(let i = 0; i < 10 ; i++) {

console.log(i + "for loop");

}


//for in loop

const forin = ["apple","orange","banana","pineapple","tomato"]

for (let i in forin) {
console.log(forin[i])

}

//for of loop 

const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
    console.log(x)
}

//for each 

const num = [3,4,5,6,7,8,9]

num.forEach(myfunction)


function myfunction(value,index,arry){

    console.log(value)
}