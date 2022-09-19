class Customer {
    // 
    private firstName: string ; 
    private lastName : string ; 


    constructor(theFirst: string , theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast; 
    }

    public getFirstName() : string { 
        return this.firstName;
    }

    public setFirstName(theFirst : string) : void {
        this.firstName = theFirst;
    }





}


let myCustomer = new Customer("G","Z");

console.log(myCustomer.getFirstName);
myCustomer.setFirstName("New name");
console.log(myCustomer.getFirstName);
