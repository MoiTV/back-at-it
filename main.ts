export class User {
    firstName: string;
    lastName: string;
    email: string;

    constructor(firstName: string, lastName: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    checkEmail(email: string): boolean {
        const currentEmail = this.email;

        return email === currentEmail;
    }
}

const userOne = new User('moises', 'valdez', 'moisesvaldez@email.com');

console.log(userOne.checkEmail('msdsfdf'));
