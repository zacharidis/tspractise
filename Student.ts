class Student {

    private _firstName:string;
    private _lastName:string;
    

    public get firstName():String{
        return this._firstName;
    }

    public get lastName():String{
        return this._lastName;
    }


    constructor(theFirstName:string, theLastName:string){
        this._firstName = theFirstName;
        this._lastName = theLastName;
        
    }

}

let mystudent = new Student("George","Zachs");


console.log(mystudent.firstName);
console.log(mystudent.lastName);