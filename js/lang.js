var placeholder = document.getElementById("placeholder");
var translations = ["Hello", "Rise to the challenge", "Thanks", "See you soon!", "Please", "You're welcome!"];

var navi = [];

for (i = 1; i <= 6; i++) {
  navi.push(document.getElementById("lang-translations").children[i]);
}

var word;
var speed = 150;
var x;

navi[0].addEventListener("click", function() {
    word = translations[0];         // Define English translation
    placeholder.innerHTML = "";     // Clear current content of placeholder
    x = 0;                          // Reset index
    type();                         // Execute type function
  }, false
);

navi[1].addEventListener("click", function() {
    word = translations[1];         // Define English translation
    placeholder.innerHTML = "";     // Clear current content of placeholder
    x = 0;                          // Reset index
    type();                         // Execute type function
  }, false
);

navi[2].addEventListener("click", function() {
    word = translations[2];         // Define English translation
    placeholder.innerHTML = "";     // Clear current content of placeholder
    x = 0;                          // Reset index
    type();                         // Execute type function
  }, false
);

navi[3].addEventListener("click", function() {
    word = translations[3];         // Define English translation
    placeholder.innerHTML = "";     // Clear current content of placeholder
    x = 0;                          // Reset index
    type();                         // Execute type function
  }, false
);

navi[4].addEventListener("click", function() {
    word = translations[4];         // Define English translation
    placeholder.innerHTML = "";     // Clear current content of placeholder
    x = 0;                          // Reset index
    type();                         // Execute type function
  }, false
);

navi[5].addEventListener("click", function() {
    word = translations[5];         // Define English translation
    placeholder.innerHTML = "";     // Clear current content of placeholder
    x = 0;                          // Reset index
    type();                         // Execute type function
  }, false
);

function type() {
  if (x < word.length) {
    placeholder.innerHTML += word.charAt(x);
    x++;
    setTimeout(type, speed);
  }
}