function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Exibe a seção no console para fins de depuração (opcional)

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
      section.innerHTML = "<p> Nada foi encontrado. Digite o nome de um planeta</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      if(titulo.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    }

  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }