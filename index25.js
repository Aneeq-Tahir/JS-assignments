const favorite_fruits = ["mango", "grapes", "banana", "oranges" , "carrots"];

favorite_fruits.map(
  (e) => e === "mango" && console.log("All hail the great king Mango!!")
);
favorite_fruits.map((e) => e === "grapes" && console.log("Grapes are sour"));
favorite_fruits.map(
  (e) => e === "banana" && console.log("You really like bananas")
);
favorite_fruits.map(
  (e) => e === "oranges" && console.log("You should like oranges too")
);
favorite_fruits.map(
  (e) =>
    e === "carrots" &&
    console.log("You should eat carrots too because they're good for ur eyes")
);
