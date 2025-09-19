const button = document.getElementById("button");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");

button.addEventListener("click", postClick);

async function postClick() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
