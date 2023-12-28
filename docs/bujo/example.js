function pickRandomItem(list) {
    const randomIndex = Math.floor(Math.random() * list.length); // Generate a random index within the list's bounds
    return list[randomIndex]; // Return the item at that random index
  }


const myList = ["apple", "banana", "orange"];
const randomItem = pickRandomItem(myList);
console.log(randomItem); // Output: One of the items from the list (e.g., "banana")
