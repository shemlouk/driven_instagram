import { useState } from "react";

const posts = [
  {
    id: 1,
    username: "meowed",
    image: "assets/img/gato-telefone.svg",
    likedBy: "respondeai",
    likes: 101523,
  },
  {
    id: 2,
    username: "barked",
    image: "assets/img/dog.svg",
    likedBy: "adorable_animals",
    likes: 99159,
  },
];

export default function Posts() {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p.id} {...p} />
      ))}
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <Topo username={props.username} />
      <div className="conteudo">
        <img src={props.image} />
      </div>
      <div className="fundo">
        <Acoes />
        <Curtidas username={props.likedBy} likes={props.likes} />
      </div>
    </div>
  );
}

function Topo(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={`assets/img/${props.username}.svg`} />
        {props.username}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Acoes() {
  const [bookmark, setBookmark] = useState("bookmark-outline");
  const botoes = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];
  return (
    <div className="acoes">
      <div>
        {botoes.map((b) => (
          <ion-icon key={b} name={b}></ion-icon>
        ))}
      </div>
      <div>
        <ion-icon
          onClick={() => setBookmark(changeIcon(bookmark))}
          name={bookmark}
        ></ion-icon>
      </div>
    </div>
  );
}

function Curtidas(props) {
  return (
    <div className="curtidas">
      <img src={`assets/img/${props.username}.svg`} />
      <div className="texto">
        Curtido por <strong>{props.username}</strong> e{" "}
        <strong>outras {props.likes} pessoas</strong>
      </div>
    </div>
  );
}

function changeIcon(str) {
  if (str.includes("-outline")) {
    return str.replace("-outline", "");
  } else {
    return str + "-outline";
  }
}
