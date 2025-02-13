// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo").value;

  if (inputAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(inputAmigo);

  document.getElementById("amigo").value = "";

  recorrerAmigos();

  return amigos;
}

function recorrerAmigos() {
  let listaAmigos = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos += `<li>${amigos[i]}</li>`;
  }

  document.getElementById("listaAmigos").innerHTML = listaAmigos;

  return listaAmigos;
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, agregue al menos un amigo.");

    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  let texto = `<h2>Tu amigo secreto es: ${amigoSorteado}</h2>`;

  document.getElementById("resultado").innerHTML = texto;

  return amigoSorteado;
}
