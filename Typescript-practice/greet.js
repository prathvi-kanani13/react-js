function greetUser(user) {
    if (user.isAdmin) {
        return "Hello Admin ".concat(user.name, ", age ").concat(user.age, ".");
    }
    else {
        return "Hello ".concat(user.name, ", age ").concat(user.age, ".");
    }
}
var user1 = {
    name: "Alice",
    age: 25,
    isAdmin: true
};
console.log(greetUser(user1));
