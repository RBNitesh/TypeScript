type User = {
  readonly id: number;
  name: string;
  email: string;
  isActive: boolean;
  credit?: number; // optional
};

type student = {
  class: number;
};

function createUser(user: User): User & student {
  return {
    id: 123,
    name: "nitesh",
    email: "email@gmail.com",
    isActive: true,
    class: 12,
  };
}

const user = createUser({
  id: 1234,
  name: "nitesh",
  email: "email@gmail.com",
  isActive: true,
});

console.log(user);
