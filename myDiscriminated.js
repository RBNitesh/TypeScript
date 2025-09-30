function Area(s) {
    if (!s)
        return;
    if (s.kind === "circle") {
        return Math.PI * Math.pow(s.radi, 2);
    }
    if (s.kind === "square") {
        return Math.pow(s.side, 2);
    }
    return s.length * s.width;
}
console.log(Area({ kind: "circle", radi: 5 }));
console.log(Area({ kind: "square", side: 6 }));
console.log(Area({ kind: "rectangle", length: 5, width: 7 }));
console.log(Area(undefined));
