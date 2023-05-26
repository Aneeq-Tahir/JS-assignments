const eric = "eRIc"; // its in different casing due to testing 
console.log(eric.toLowerCase());
console.log(eric.toUpperCase());

const titleCase = eric.slice(0, 1).toUpperCase() + eric.slice(1).toLowerCase();
// the slice method takes two parameters; first starting index and the second is ending index which is optional
console.log(titleCase);