let car = "subaru";
console.log("Is car subaru?");
car === "subaru" ? console.log("Car is subaru") : console.log("car is not subaru");
console.log("Is car sonata?");
car === "sonata" ? console.log("Car is sonata") : console.log("car is not sonata");

let num = 13;
console.log("Is num greater than 0 and greater than 13?");
num > 0 && num > 15 ? console.log(true) : console.log(false);
console.log("Is num greater than 0 or greater than 15");
num > 0 || num > 15 ? console.log(true) : console.log(false);
console.log("Is num greater than equals to 5 and equals to 13 or greater than 35 and less than 68?");
(num >= 5 && num === 13) || (num > 35 && num < 68) ? console.log(true) : console.log(false);

let name = "aNeEq"
console.log("is name a string?");
typeof name !== "string" ? console.log("name is not a string") : console.log("name is a string")
console.log("Is name in lower case?");
name.toLowerCase() !== name ? console.log("name is not in lower case") : console.log("name is in lower case");
name = name.toUpperCase()
console.log("Is name in upper case?");
name.toUpperCase() === name ? console.log("name is in upper case") : console.log("name is not in upper case");
// checking if items are in an array
let arr = [34,35]
arr.map((e) => {
    if (e === 35) console.log(`35 is a part of the array`)
    else if (e !== 30) console.log("30 is not part of the array");
})
