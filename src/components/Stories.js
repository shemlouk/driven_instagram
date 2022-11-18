const usernames = [
  "9gag",
  "meowed",
  "barked",
  "nathanwpylestrangeplanet",
  "wawawicomics",
  "respondeai",
  "filomoderna",
  "memeriagourmet",
];

export default function Stories() {
  return (
    <div class="stories">
      {usernames.map((u) => (
        <Storie username={u} />
      ))}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Storie(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={`assets/img/${props.username}.svg`} />
      </div>
      <div class="usuario">{props.username}</div>
    </div>
  );
}
