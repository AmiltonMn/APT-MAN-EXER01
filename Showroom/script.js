let produtos;

document.addEventListener("DOMContentLoaded", function() {
    fetch("../Dados/produtos.json")
        .then((response) => response.json())
        .then((data) => {
            produtos = data;
            console.log(produtos);
            
            /* o "document,getElementByTagName" foi alterado para "document.getElementById" pois a função que estava anteriormente não existe*/
            const produtosContainer = document.getElementById("produtosContainer")

            produtos.forEach((produto, index) => {
                const card = document.createElement("div");
                    card.className = "card";
                    card.style.width = "400px";
                    card.style.height = "500px";
                    card.style.marginRight = "10px";
                    card.style.marginBottom = "10px";
                    

                const imagem = document.createElement("img");
                    console.log(produto.Imagem)
                    imagem.src = produto.Imagem;
                    imagem.className = "card-img-top";
                    imagem.style.width = "300px";
                    imagem.style.height = "300px";
                    imagem.style.display = "flex";
                    imagem.style.justifyContent = "center";

                const cardBody = document.createElement("div");
                    cardBody.className = "card";
                    cardBody.width = "350px";
                    cardBody.height = "250px";
                    cardBody.style.display = "flex";
                    cardBody.style.alignItems = "center";

                const cardTitle = document.createElement("h5");
                    cardTitle.className = "TituloCard";
                    cardTitle.textContent = produto.Nome;

                const cardText = document.createElement("p");
                    cardText.textContent = "Preço: R$" + produto.Valor;
                    cardText.style.marginLeft = "10px";

                const statusProduto = document.createElement("div")
                    statusProduto.className = "Status";
                    statusProduto.style.width = "50px";
                    statusProduto.style.height = "50px";
                    statusProduto.style.borderRadius = "10px";
                    statusProduto.style.marginLeft = "10px";
                    if (produto.Status == false) 
                    {
                        statusProduto.style.backgroundColor = "#00FF00"                        
                    } else {
                        statusProduto.style.backgroundColor = "#FF0000" 
                    }

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                cardBody.appendChild(statusProduto);

                card.appendChild(imagem);
                card.appendChild(cardBody);

                produtosContainer.appendChild(card)
            });
        })
        .catch((error) => console.error("Erro ao carregar o arquivo JSON", error));
})