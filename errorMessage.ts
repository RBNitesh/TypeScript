function consoleError1(errmsg: string): void {
  console.log(errmsg);
}

function handleError1(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
