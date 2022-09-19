let found : boolean = true ; 
let grade : number = 100;
let firstName : string = "George";
let lastName : string = "Zedd";

console.log(found);
console.log(`The grade is : ${grade}`)
console.log(`${firstName} ${lastName}`)     

let i : number = 1 ; 

for (i=0 ; i <5 ; i++) {
    console.log(i)
}


let myGrades : number[] = [9,8,6,7,8,8,8,8,20]

for (i=0 ; i <myGrades.length; i++) {

    console.log(myGrades[i]);       
}

let names : string[] = ["George" , "Georgie" , "Porgie"] 

for (i=0 ; i < names.length; i++) {
    if(names[i]==='Georgie'){
        console.log("It's georgie !!!")
    }else {
        console.log(" its not georgie ")
    }
}

for (let aSport of names) {
    console.log(aSport)
}

let mySecondGrades : string[] = ["Georgie","Porgie","Rinoula"]

for (let aGrade of mySecondGrades){
    console.log(aGrade)
}

mySecondGrades.push("Zorje");

for (let aGrade of mySecondGrades){
    console.log(aGrade)
}

mySecondGrades.pop();
for (let aGrade of mySecondGrades){
    console.log(aGrade)
}



