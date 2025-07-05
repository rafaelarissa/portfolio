const clickSobre = document.getElementById("sobre");
const clickFormacao = document.getElementById("formacao");
const clickProjetos = document.getElementById("projetos");
const clickContato = document.getElementById("contato");

const conteudo = document.getElementById("conteudo");

clickSobre.addEventListener("click", function (event) {
  event.preventDefault();
  conteudo.innerHTML =
    "<div class=sobreMim><div><p>👋 Oi, meu nome é Rafaela — sou brasileira, nascida e criada em Natal, RN, a cidade do sol.</p><img src='rafinha ouro no valorant.png' alt=Descrição da imagem></div><div><p>📚 Sou paixonada por romances policiais, mas também aprecio gêneros como ficção e romance. Minha escritora favorita é a Agatha Christie, que sempre me consegue surpreender com suas obras.</p><img src='rafinha ouro no valorant.png' alt=Descrição da imagem></div><div><p>🎮 No meu tempo livre, gosto de jogar, e normalmente escolho desafios que exercitem a lógica e o raciocínio — sejam quebra-cabeças ou enigmas intricados. Também aprecio RPGs eletrônicos e jogos 2D de aventura e plataforma.</p><img src='rafinha ouro no valorant.png' alt=Descrição da imagem></div><div><p>🐾 Tenho dois gatinhos que são verdadeiros parceiros de vida: Luffy e Ace (Romeu). Eles acompanham minha rotina diariamente.</p><img src='rafinha ouro no valorant.png' alt=Descrição da imagem></div>";

  conteudo.style.fontFamily = "Roboto, sans-serif";
  conteudo.style.fontSize = "25px";
});

clickFormacao.addEventListener("click", function (event) {
  event.preventDefault();
  conteudo.innerHTML =
    "<div class=formacao><aside><p>Sou formada em Ciências e Tecnologia, com ênfase em Engenharia de Telecomunicações.<br> Foi na Universidade que tive meu primeiro contato com programação.</p><br><p>Realizei um bootcamp em desenvolvimento web onde trabalhei na criação de diversos projetos envolvendo principalmente Javascript, HTML, CSS.</p><br><p>Sou fluente em inglês e atualmente estou aprendendo Japonês e Francês.</p>Além do aprendizado de novos idiomas também ingressei recentemente no curso bacharelado em Engenharia de Software pela Uninter</p></aside><img src='rafinha ouro no valorant.png' alt=Descrição da imagem></div>";

  conteudo.style.fontFamily = "Roboto, sans-serif";
  conteudo.style.fontSize = "25px";
});

clickProjetos.addEventListener("click", function (event) {
  event.preventDefault();
  conteudo.innerHTML =
    "<div class=projetos><h1>Aqui disponho alguns projetos que desenvolvi</h1><section><div class=textoProjeto><h2>Track it</h2><br><a href=https://track-it-orcin.vercel.app>Link para visualização no Vercel</a><br><a href=https://github.com/rafaelarissa/track-it>Link para visualização no github</a></div><img src='track-it.png' alt=track-it></section><section><div class=textoProjeto><h2>Zap Recall</h2><br><a href=https://zaprecall-react-chi.vercel.app>Link para visualização no Vercel</a><br><a href=https://github.com/rafaelarissa/zaprecall-react>Link para visualização no github</a></div><img src='zap-react.png' alt=zap-react></section></div>";

  conteudo.style.fontFamily = "Roboto, sans-serif";
  conteudo.style.fontSize = "25px";
});

clickContato.addEventListener("click", function (event) {
  event.preventDefault();
  conteudo.innerHTML =
    "<div class=contato><form><label for=name>Nome:</label><input type=text id=name name=name required><br><label for=email>Email:</label><input type=email id=email name=email required><br><label for=telefone>Telefone:</label><input type=tel id=telefone name=telefone required><br><label for=mensagem>Mensagem:</label><textarea id=mensagem name=mensagem rows=4 cols=50 required></textarea><br><input type=submit value=Enviar mensagem></form><h1>Entre em contato comigo</h1></div>";

  conteudo.style.fontFamily = "Roboto, sans-serif";
  conteudo.style.fontSize = "25px";
});
