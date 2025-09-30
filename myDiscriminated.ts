type Circle = {
  kind: "circle";
  radi: number;
};

type Square = {
  kind: "square";
  side: number;
};

type Rectangle = {
  kind: "rectangle";
  length: number;
  width: number;
};

type Shape = Circle | Square | Rectangle | undefined;

function Area(s: Shape): number | undefined {
  if (!s) return;

  if (s.kind === "circle") {
    return Math.PI * s.radi ** 2;
  }

  if (s.kind === "square") {
    return s.side ** 2;
  }

  return s.length * s.width;
}

console.log(Area({ kind: "circle", radi: 5 }));
console.log(Area({ kind: "square", side: 6 }));
console.log(Area({ kind: "rectangle", length: 5, width: 7 }));
console.log(Area(undefined));
