// Type alias - for reusability
type User = { id: number; name: string; isActive: boolean };
const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false,
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type Theme = "light" | "dark";

function setTheme(t: Theme) {
  return t;
}

const theme = setTheme("dark");
