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
  const [likesCounter, setLikesCounter] = useState(props.likes);
  const [likesIcon, setLikesIcon] = useState("heart-outline");
  return (
    <div data-test="post" className="post">
      <Topo username={props.username} />
      <div className="conteudo">
        <img
          alt="post-image"
          data-test="post-image"
          onClick={() => {
            handleLikeByImageClick(
              { value: likesIcon, set: setLikesIcon },
              { value: likesCounter, set: setLikesCounter }
            );
          }}
          src={props.image}
        />
      </div>
      <div className="fundo">
        <Acoes
          likesIcon={{ value: likesIcon, set: setLikesIcon }}
          likesCounter={{ value: likesCounter, set: setLikesCounter }}
        />
        <Curtidas username={props.likedBy} likes={likesCounter} />
      </div>
    </div>
  );
}

function Topo(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img alt={props.username} src={`assets/img/${props.username}.svg`} />
        {props.username}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function Acoes(props) {
  const [bookmark, setBookmark] = useState("bookmark-outline");
  return (
    <div className="acoes">
      <div>
        <ion-icon
          data-test="like-post"
          onClick={() => handleLikeByIconClick(props)}
          name={props.likesIcon.value}
        ></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div>
        <ion-icon
          data-test="save-post"
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
      <img alt={props.username} src={`assets/img/${props.username}.svg`} />
      <div className="texto">
        Curtido por <strong>{props.username}</strong> e{" "}
        <strong data-test="likes-number">outras {props.likes} pessoas</strong>
      </div>
    </div>
  );
}

function handleLikeByIconClick(obj) {
  obj.likesIcon.set(changeIcon(obj.likesIcon.value));
  if (obj.likesIcon.value.includes("-outline")) {
    obj.likesCounter.set(obj.likesCounter.value + 1);
  } else {
    obj.likesCounter.set(obj.likesCounter.value - 1);
  }
}

function handleLikeByImageClick(icon, counter) {
  icon.set(icon.value.replace("-outline", ""));
  if (icon.value.includes("-outline")) {
    counter.set(counter.value + 1);
  }
}

function changeIcon(str) {
  if (str.includes("-outline")) {
    return str.replace("-outline", "");
  } else {
    return str + "-outline";
  }
}
