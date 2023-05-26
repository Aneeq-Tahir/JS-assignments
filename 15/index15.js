const places = ["Saudi Arabia", "Japan", "United States", "France", "Italy"];

console.log(places); // original array
console.log([...places].sort()); //  alphabetical order but is original's copy
console.log(places); // original array
// reverse alphabetical order and is a copy
console.log(
  [...places].sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    return 0;
  })
);
console.log(places); // original array

places.reverse(); // original array in reverse order
console.log(places);

places.reverse();
console.log(places);

places.sort();
console.log(places);

places.sort((a, b) => {
  if (a < b) return 1;
  else if (a > b) return -1;
  return 0;
});
console.log(places)