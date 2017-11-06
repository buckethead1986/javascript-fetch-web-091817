const app = "I don't do much.";

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/repos/jquery/jquery/commits");
// xhr.responseType = "json";
//
// xhr.onload = function() {
//   console.log(xhr.response);
// };
//
// xhr.onerror = function() {
//   console.log("Booo");
// };
//
// xhr.send();

const token = "dfdf8a66992d377232eb6402f14fa7721e3c0bf9";
fetch("https://api/github.com/repos/jquery/jquery/commits"){
    headers: {
      Authorization: `token ${token}`
    }
}.then(res => res.json())
  .then(json => console.log(json));
