const person = 16.5;
if (person < 2) console.log("The person is a baby");
else if (person >= 2 && person < 4) console.log("The person is a toddler");
else if (person >= 4 && person < 13) console.log("The person is a kid");
else if (person >= 13 && person < 20) console.log("The person is a teenager");
else if (person >= 20 && person < 65) console.log("the person is an adult");
else console.log("The person is an elder")