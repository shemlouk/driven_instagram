const posts = [
  {
    username: "meowed",
    image: "assets/img/gato-telefone.svg",
    likedBy: "respondeai",
    likes: 101523,
  },
  {
    username: "barked",
    image: "assets/img/dog.svg",
    likedBy: "adorable_animals",
    likes: 99159,
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {posts.map((p) => (
        <Post {...p} />
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div class="post">
      <Topo username={props.username} />
      <div class="conteudo">
        <img src={props.image} />
      </div>
      <div class="fundo">
        <Acoes />
        <Curtidas username={props.likedBy} likes={props.likes} />
      </div>
    </div>
  );
}

function Topo(props) {
  return (
    <div class="topo">
      <div class="usuario">
        <img src={`assets/img/${props.username}.svg`} />
        {props.username}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Acoes() {
  const botoes = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
  return (
    <div class="acoes">
      <div>
        {botoes.map((b) => (
          <ion-icon name={b}></ion-icon>
        ))}
      </div>
      <div>
        <ion-icon name="bookmark-outline"></ion-icon>
      </div>
    </div>
  );
}

function Curtidas(props) {
  return (
    <div class="curtidas">
      <img src={`assets/img/${props.username}.svg`} />
      <div class="texto">
        Curtido por <strong>{props.username}</strong> e{" "}
        <strong>outras {props.likes} pessoas</strong>
      </div>
    </div>
  );
}
