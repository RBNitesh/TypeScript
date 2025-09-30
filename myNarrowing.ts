function detectType(val: number | string | number[]) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  if (typeof val === "object") {
    return val[0] + 5;
  }
  return val + 5;
}

function provideId(id: string | null) {
  if (!id) {
    console.log(`Please provide your id!`);
    return;
  }
  return id.toLowerCase();
}

function padLeft(padding: number | string, input: string): string {
  let pad = "";
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

console.log(padLeft(5, "dear"));
