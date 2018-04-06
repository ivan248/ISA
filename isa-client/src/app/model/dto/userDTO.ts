export class User
{
    private firstName : string;
    private lastName : string;
    private username : string;
    private phoneNumber : number;
    private city : string;

    constructor(
        firstName : string,
        lastName : string,
        username : string,
        phoneNumber : number,
        city : string    
    ) {
 
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.city = city;

    }

 }