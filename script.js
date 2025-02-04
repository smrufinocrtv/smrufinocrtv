window.addEventListener("scroll", function(){
    let header1 = this.document.querySelector('.nav4')
    let header2 = this.document.querySelector('.nav3')
    let imagem1 = "img/Logo.png"
    let imagem2 = "img/Logo-Colorful.png"



    header1.classList.toggle('rolagem1', window.scrollY > 0)
    header2.classList.toggle('nav3p', window.scrollY > 0)

    if(window.scrollY > 0){
        document.getElementById("mi").src = imagem2
    } else{
        document.getElementById("mi").src = imagem1
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const box = document.querySelector(".boxtextogalery1");
  
    // Cria o elemento <a>
    const link = document.createElement("a");
    link.href = "https://www.behance.net/samuelmiguel5"; // Substitua pelo link do seu Behance
    link.target = "_blank"; // Abre em uma nova aba
    link.rel = "noopener noreferrer"; // Boa prática de segurança

    link.style.textDecoration = "none";
    link.style.color = "inherit";
  
    // Insere o <a> como pai do conteúdo
    box.parentNode.insertBefore(link, box);
    link.appendChild(box);
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
  
    // Abrir o modal
    openModalBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  
    // Fechar o modal
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Fechar ao clicar fora do modal
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  const menuLinks = document.querySelectorAll('.menu-link');
  
  // Adiciona um evento de clique para cada link
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Desmarca o checkbox
      document.getElementById('checkbox').checked = false;
    });
  });