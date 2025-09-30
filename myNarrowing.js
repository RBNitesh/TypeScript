function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    if (typeof val === "object") {
        return val[0] + 5;
    }
    return val + 5;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide your id!");
        return;
    }
    return id.toLowerCase();
}
function padLeft(padding, input) {
    var pad = "";
    if (typeof padding === "number") {
        for (var i = 0; i < padding; i++) {
            pad += " ";
        }
    }
    else
        pad += padding;
    return (pad += input);
}
console.log(padLeft("my", "dear"));
