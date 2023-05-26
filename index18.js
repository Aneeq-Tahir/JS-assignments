function objGenerator(...args) {
  const obj = {
    car: args[0],
    model: args[1],
    make: args[-2],
    color: args[3],
  };
  console.log(obj);
  obj.make = args[2];
  console.log(obj);
}
objGenerator("Prius", 2022, "Toyota", "Silver");
