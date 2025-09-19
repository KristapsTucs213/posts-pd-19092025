const button = document.getElementById("button");
const lists = document.getElementById("lists");
const forma = document.getElementById("forma");
const statuss = document.getElementById("status");

button.addEventListener("click", postClick);

async function postClick(event) {
  event.preventDefault();

  statuss.innerHTML = "Loading...";
  const formData = new FormData(forma);
  const vertiba = formData.get("asd");
  console.log(vertiba);

  const url = `https://jsonplaceholder.typicode.com/posts/${vertiba}`;

  const response = await fetch(url);
  const data = await response.json();
  statuss.innerHTML = "Done!";
  console.log(data);

  const l1 = document.createElement("li");
  const l2 = document.createElement("li");
  const l3 = document.createElement("li");
  const l4 = document.createElement("li");

  lists.appendChild(l1);
  lists.appendChild(l2);
  lists.appendChild(l3);
  lists.appendChild(l4);

  const user_id = document.createTextNode(data.userId);
  const idd = document.createTextNode(data.id);
  const titlee = document.createTextNode(data.title);
  const boddy = document.createTextNode(data.body);

  l1.appendChild(user_id);
  l2.appendChild(idd);
  l3.appendChild(titlee);
  l4.appendChild(boddy);
}
