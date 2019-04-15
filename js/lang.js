var placeholder = document.getElementById("placeholder");
var translations = ["Hello", "Rise to the challenge", "Thanks", "See you soon!", "Please", "You're welcome!"];

var navi = [];

for (i = 1; i <= 6; i++) {
  navi.push(document.getElementById("lang-translations").children[i]);
}

navi[0].addEventListener("click", function() {
    placeholder.innerHTML = translations[0];
  }, false
);

navi[1].addEventListener("click", function() {
    placeholder.innerHTML = translations[1];
  }, false
);

navi[2].addEventListener("click", function() {
    placeholder.innerHTML = translations[2];
  }, false
);

navi[3].addEventListener("click", function() {
    placeholder.innerHTML = translations[3];
  }, false
);

navi[4].addEventListener("click", function() {
    placeholder.innerHTML = translations[4];
  }, false
);

navi[5].addEventListener("click", function() {
    placeholder.innerHTML = translations[5];
  }, false
);