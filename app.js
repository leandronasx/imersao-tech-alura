
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let secao = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa, converte para minúsculas e remove espaços em branco
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
  
    // Inicializa uma string para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre o array de tecnologias
    for (let tecnologia of tecnologias) {
      // Obtém o nome da tecnologia e o resumo, convertendo para minúsculas
      let tech = tecnologia.tecnologia.toLowerCase();
      let res = tecnologia.resumo.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente no nome ou no resumo da tecnologia
      if (tech.includes(campoPesquisa) || res.includes(campoPesquisa)) {
        // Cria o HTML para exibir um resultado da pesquisa
        resultados += `
            <div class="item-resultado">
                
                <img src="${tecnologia.LinkImg}" alt="imagem ${tecnologia.tecnologia}" />
                
                <div>
                    <h2>
                        <a href="#" target="_blank">${tecnologia.tecnologia}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${tecnologia.resumo}
                    </p>
                    <a href="${tecnologia.linkDocumentacao}" target="_blank">Saiba mais!</a>
                </div>
               
                <div class="resultado-codigo">
                    ${tecnologia.codigoExemplo}
                </div>
            </div>
        `;
      }
    }
  
    // Verifica se não há termo de pesquisa ou resultados
    if (!campoPesquisa || !resultados) {
      // Exibe uma mensagem indicando que não foram encontrados resultados
      resultados = `
        <div class="item-resultado">
          <p id='sem-resultado'>Nada foi encontrado!</p>
        </div>
      `;
    }
  
    // Atualiza o conteúdo da seção de resultados
    secao.innerHTML = resultados;
  }