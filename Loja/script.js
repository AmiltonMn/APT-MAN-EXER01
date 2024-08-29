// Declaração da variável produtos fora do escopo do evento para torná-la global
let produtos;


window.onload = function () {
  var storedUser = localStorage.getItem("usuario");
  var user = JSON.parse(storedUser);
  document.getElementById("user").textContent = user.name;
  document.getElementById("perfil").textContent = user.name;
  document.getElementById("idPerfil").textContent = user.id;
};

document.addEventListener("DOMContentLoaded", function () {
  fetch("../Dados/produtos.json") 
  .then((response) => response.json())
  .then((data) => {
    produtos = data;
    const produtosContainer =
    document.getElementById("produtosContainer");
    
    produtos.forEach((produto, index) => {
      const card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        card.style.marginRight = "9px";
      
      const imagem = document.createElement("img");
        imagem.src = produto.Imagem;
        imagem.className = "card-img-top";
        imagem.style.width = "200px";
        imagem.style.height = "200px";
        
        const cardBody = document.createElement("div");
          cardBody.className = "card-body";
        
        const cardTitle = document.createElement("h5");
          cardTitle.className = "card-title";
          cardTitle.textContent = produto.Nome;
        
        const cardText = document.createElement("p");
          cardText.className = "card-text";
          cardText.textContent = "Preço: $" + produto.Valor;
        
        const btnAdicionarAoCarrinho = document.createElement("a");
          btnAdicionarAoCarrinho.href = "#";
          btnAdicionarAoCarrinho.className = "btn-adicionar-ao-carrinho";
          btnAdicionarAoCarrinho.textContent = "Adicionar ao Carrinho";
          btnAdicionarAoCarrinho.setAttribute("data-indice", index);
        
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(btnAdicionarAoCarrinho);
        
        card.appendChild(imagem);
        card.appendChild(cardBody);
        
        produtosContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
    
    $("#produtosContainer").on(
      "click",
      ".btn-adicionar-ao-carrinho",
      function () {
        const indexDoProduto = $(this).data("indice");
        const produtoSelecionado = produtos[indexDoProduto];
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
        carrinho.push(produtoSelecionado);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        alert('Adicionado')
      }
    );
  });
