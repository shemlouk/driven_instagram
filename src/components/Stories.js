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
    <div className="stories">
      {usernames.map((u) => (
        <Storie key={u} username={u} />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

function Storie(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img alt={props.username} src={`assets/img/${props.username}.svg`} />
      </div>
      <div className="usuario">{props.username}</div>
    </div>
  );
}
