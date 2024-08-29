const btn = document.querySelector('.modalBtn')
const modal = document.querySelector('.modal')

function login() {
  var nome = $("#nome").val();
  var senha = $("#senha").val();
  
  if (nome && senha && nome === "admin" && senha === "admin") {
    const user = {
      name: nome,
      dataEntrada: new Date(),
      id: Math.floor(Math.random() * 100000),
    };
    
    localStorage.setItem("usuario", JSON.stringify(user));
    
    window.location.href = "../Loja/loja.html";
  } else {
    modal.style.display = 'block'
  }
}


const switchModal = () => {
  const actualStyle = modal.style.display
  if(actualStyle == 'block') {
    modal.style.display = 'none'
  } else {
    modal.style.display = 'block'
  }
}

btn.addEventListener('click', switchModal)