function greet() {
    let msg="Wish you a good morning";
    return function name(username) {
        console.log(msg+" "+ username);
    }
}
greet()("Abhinandan"); // one of the way to call inner function

