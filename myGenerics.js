var score = [];
var names = [];
function identityOne(val) {
    console.log(typeof val);
    return true;
}
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 1;
    return products[myIndex];
}
var getMoreSearchProducts = function (products) {
    // do some database operations
    var myIndex = 1;
    return products[myIndex];
};
function fun(val1, val2) {
    return {
        val1: val1,
        val2: val2,
    };
}
console.log(fun(3, {
    connection: "abc",
    username: "riya",
    password: "riya@123",
}));
