switch (1){
    case 1:
        console.log("1")
        break;
    default:
        console.log("fine")
}

// -------------------------------- ******************* -------------------------------------

// In JavaScript, the switch statement is typically used to evaluate a single expression against multiple cases. However, in your code, you're using the comma operator , to evaluate multiple expressions within the switch statement. The comma operator evaluates each of its operands and returns the value of the last operand. So, (1, 12) evaluates to 12.

// However, it's worth noting that using the comma operator in this context doesn't really serve a meaningful purpose because the switch statement only evaluates the value of the last expression (12 in this case). If you want to check multiple conditions within a switch statement, you would typically use a single expression that represents the state or value you're switching on.

// -------------------------------- ******************* -------------------------------------


// CHECK MULTIPLE CONDITION
switch (1,12){
    case 1:
    case 7:
        console.log("1")
        break;
    default:
        console.log("fine")
}

// -------------------------------- ******************* -------------------------------------


var value = 12;

switch (value) {
    case 1:
    case 7:
        console.log("Value is either 1 or 7");
        break;
    case 12:
        console.log("Value is 12");
        break;
    default:
        console.log("Value is something else");
}
