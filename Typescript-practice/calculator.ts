function calculate(a: number, b: number, operation: string): number {
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    } else {
        throw new Error("Invalid operation");
    }
}

// Test the calculator function
console.log(calculate(10, 5, "add"));        
console.log(calculate(10, 5, "subtract"));   
console.log(calculate(10, 5, "multiply"));   
console.log(calculate(10, 5, "divide"));     
