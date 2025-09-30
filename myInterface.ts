interface User {
  readonly api_key: string;
  email: string;
  userId: number;
  gender?: string;
  getInfo(): string;
}

interface User {
  uniqueId?: number;
}

interface Admin extends User {
  role?: string;
}

const newUser: User = {
  api_key: "42kj2k25h2j5k2",
  email: "email123@gamil.com",
  userId: 343,
  getInfo: (): string => "koi string return kar do",
};

const sai: Admin = {
  api_key: "42kj2k25h2j5k2",
  email: "email123@gamil.com",
  userId: 343,
  getInfo: (): string => "koi string return kar do",
};

console.log(newUser);
console.log(sai);
