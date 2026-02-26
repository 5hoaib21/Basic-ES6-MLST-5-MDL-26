const employee = {
  name: "john doe",
  1: `desk one`,
  "home-address": `123 main st`,
  salary: 50000,
  family: {
    father: "Richard doe",
    mother: {
      name: "jane doe",
      age: 55,
    },
  },
  position: "SoftWare Engineer",
};

const value = employee.name;
console.log(employee?.family?.mother?.age);

