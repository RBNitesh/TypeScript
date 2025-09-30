const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  console.log(typeof val);
  return true;
}

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 1;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 1;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function fun<T, U extends Database>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

console.log(
  fun(3, {
    connection: "abc",
    username: "riya",
    password: "riya@123",
  })
);

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(products: T) {
    this.cart.push(products);
  }
}
