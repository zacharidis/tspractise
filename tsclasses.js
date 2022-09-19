var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    return Customer;
}());
var myCustomer = new Customer("G", "Z");
console.log(myCustomer.getFirstName);
myCustomer.setFirstName("New name");
console.log(myCustomer.getFirstName);
