class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = parseFloat(preco);
    this.categoria = categoria;
  }
}

class ProdutoManager {
  constructor() {
    this.produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    this.listarProdutos();
  }

  adicionarProduto(produto) {
    this.produtos.push(produto);
    this.salvar();
    this.listarProdutos();
  }

  removerProduto(index) {
    this.produtos.splice(index, 1);
    this.salvar();
    this.listarProdutos();
  }

  listarProdutos() {
    const lista = document.getElementById('listaProdutos');
    lista.innerHTML = '';
    this.produtos.forEach((p, index) => {
      const div = document.createElement('div');
      div.className = 'produto-item';
      div.innerHTML = `
        <strong>${p.nome}</strong> - R$ ${p.preco.toFixed(2)} - ${p.categoria}
        <span class="remover-btn" onclick="manager.removerProduto(${index})">[Remover]</span>
      `;
      lista.appendChild(div);
    });
  }

  salvar() {
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
  }
}

const manager = new ProdutoManager();

document.getElementById('formProduto').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const categoria = document.getElementById('categoria').value;

  if (nome && preco && categoria) {
    const novoProduto = new Produto(nome, preco, categoria);
    manager.adicionarProduto(novoProduto);
    this.reset();
  }
});
var zip = new JSZip();
zip.file("index.html", "<html>...</html>");
zip.file("style.css", "body { color: blue; }"); 
zip.file("script.js", "console.log('Olá');"); 

zip.generateAsync({ type: "blob" })
  .then(function(content) { 
    saveAs(content, "meu_projeto.zip"); 
  });