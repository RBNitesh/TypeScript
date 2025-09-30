function createUser(user) {
    return {
        id: 123,
        name: "nitesh",
        email: "email@gmail.com",
        isActive: true,
        class: 12,
    };
}
var user = createUser({
    id: 1234,
    name: "nitesh",
    email: "email@gmail.com",
    isActive: true,
});
console.log(user);
