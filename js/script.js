const pages = [
  { title: "Ao Amor da Minha Vida", text: "Feliz aniversário, meu amor! 🌹 Você é a razão dos meus sorrisos, minha poesia diária e a alegria da nossa família. Que cada dia seja cheio de risadas, amor e momentos inesquecíveis juntos. 🎂💖", img: "img/img_1.jpg" },
  { title: "Feliz Aniversário, Meu Mundo", text: "Você ilumina minha vida e torna nossa casa um lar cheio de amor. Que este novo ano venha com gargalhadas, abraços apertados e muitas lembranças lindas para a nossa família. 🌎", img: "img/img_2.jpg" },
  { title: "Para Minha Rainha no Seu Dia Especial", text: "Minha rainha, parabéns! Que sua vida seja doce como nossas brincadeiras, bonita como nossos momentos juntos e cheia de amor da nossa família. Obrigado por ser meu tudo. 👑", img: "img/img_3.jpg" },
  { title: "Celebrando Você, Meu Amor", text: "Hoje celebramos você, o coração da nossa família e a risada que alegra nossos dias. Que nunca faltem abraços, piadas bobas e muito amor no nosso lar. 🎉", img: "img/img_4.jpg" },
  { title: "Mais um Ano ao Seu Lado, o Melhor Presente", text: "O tempo passa, mas meu amor por você só cresce. Entre risadas, beijos e bagunças em família, cada momento contigo é um presente que quero repetir todos os anos. 🎁", img: "img/img_5.jpeg" },
  { title: "Minha Eterna Namorada", text: "Feliz aniversário, minha linda! Você continua sendo minha paixão, minha parceira de aventuras e a luz da nossa família. Que nossos dias juntos sejam sempre cheios de amor e risadas. 💘", img: "img/img_6.jpeg" },
  { title: "Nosso Amor em Cada Detalhe", text: "Você transforma o simples em extraordinário, as rotinas em poesia e a nossa casa em um lar cheio de amor. Obrigado por ser meu riso, meu abrigo e a melhor mãe/pai da nossa família! ✨", img: "img/img_7.jpeg" },
  { title: "Meu Presente Favorito", text: "De todos os presentes que a vida me deu, você é o único que não quero trocar. Entre risadas, abraços e pequenas bagunças familiares, você é meu tesouro mais precioso. 🎁", img: "img/img_8.jpeg" },
  { title: "O Doce da Minha Vida", text: "Você é mais doce que brigadeiro e faz nosso lar mais alegre do que qualquer festa. Que nunca faltem gargalhadas, amor e momentos divertidos com a família. 🍫", img: "img/img_9.jpeg" },
  { title: "Meu Paraíso Particular", text: "Seu abraço é meu refúgio, seu sorriso é meu sol e nosso lar é o lugar mais feliz do mundo. Que venham muitos aniversários, cheios de amor, risadas e memórias em família. 🌹", img: "img/img_10.jpeg"},
  { title: "Parceira de Todas as Horas", text: "Com você rio, sonho, aprendo e até passo vergonha feliz. Entre aventuras, histórias engraçadas e amor familiar, que este novo ciclo seja nosso melhor até agora. ❤️", img: "img/img_11.jpeg" }
];
let current = 0;

// Função para mostrar a página atual
function showPage(index) {
  document.getElementById("pageTitle").innerText = pages[index].title;
  document.getElementById("pageText").innerText = pages[index].text;
  document.getElementById("pageImage").src = pages[index].img;
}

// Mostra a primeira página ao carregar
window.onload = function() {
  showPage(current);
};

// Função para avançar para a próxima página
function nextPage() {
  current++;
  if (current >= pages.length) current = 0;
  showPage(current);
}

// Função confete
function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");
  document.body.appendChild(confetti);

  const size = Math.random() * 8 + 5 + "px";
  confetti.style.width = size;
  confetti.style.height = size;

  confetti.style.left = Math.random() * 100 + "vw";

  const colors = ["#ff4e50", "#fc913a", "#f9d423", "#ede574", "#e1f5c4"];
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

  const duration = Math.random() * 3 + 2;
  confetti.style.animationDuration = duration + "s";

  setTimeout(() => confetti.remove(), duration * 1000);
}

setInterval(createConfetti, 200);