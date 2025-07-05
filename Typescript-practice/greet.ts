interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

function greetUser(user: User): string {
    if (user.isAdmin) {
        return `Hello Admin ${user.name}, age ${user.age}.`;
    } else {
        return `Hello ${user.name}, age ${user.age}.`;
    }
}

const user1: User = {
    name: "Alice",
    age: 25,
    isAdmin: true
};

console.log(greetUser(user1));
