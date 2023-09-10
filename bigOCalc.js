// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
  
    for (let i = 0; i < input.length; i++) { // O(n) --> n is the input
      anotherFunction(); // O(n) --> it runs the same amount as input
      let stranger = true; // O(n)
      a++; // O(n)
    }
    return a; // O(1)
  }
  // BIG O(3 + 4n) --> 3 O(1) && 4 O(n)

  // ------------------------- Exercise 2
  // What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
    let a = 5; // O(1)
    let b = 10; // O(1)
    let c = 50; // O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1;  // O(n)
      let y = i + 2;  // O(n)
      let z = i + 3;  // O(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2;  // O(n)
      let q = j * 2;  // O(n)
    }
    let whoAmI = "I don't know";
  }
  // BIG O --> 3 + 5n --> O(n)