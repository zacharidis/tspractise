var found = true;
var grade = 100;
var firstName = "George";
var lastName = "Zedd";
console.log(found);
console.log("The grade is : ".concat(grade));
console.log("".concat(firstName, " ").concat(lastName));
var i = 1;
for (i = 0; i < 5; i++) {
    console.log(i);
}
var myGrades = [9, 8, 6, 7, 8, 8, 8, 8, 20];
for (i = 0; i < myGrades.length; i++) {
    console.log(myGrades[i]);
}
var names = ["George", "Georgie", "Porgie"];
for (i = 0; i < names.length; i++) {
    if (names[i] === 'Georgie') {
        console.log("It's georgie !!!");
    }
    else {
        console.log(" its not georgie ");
    }
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var aSport = names_1[_i];
    console.log(aSport);
}
var mySecondGrades = ["Georgie", "Porgie", "Rinoula"];
for (var _a = 0, mySecondGrades_1 = mySecondGrades; _a < mySecondGrades_1.length; _a++) {
    var aGrade = mySecondGrades_1[_a];
    console.log(aGrade);
}
mySecondGrades.push("Zorje");
for (var _b = 0, mySecondGrades_2 = mySecondGrades; _b < mySecondGrades_2.length; _b++) {
    var aGrade = mySecondGrades_2[_b];
    console.log(aGrade);
}
mySecondGrades.pop();
for (var _c = 0, mySecondGrades_3 = mySecondGrades; _c < mySecondGrades_3.length; _c++) {
    var aGrade = mySecondGrades_3[_c];
    console.log(aGrade);
}
