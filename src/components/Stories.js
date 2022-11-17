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
      {usernames.map((name) => {
        return (
          <div class="story">
            <div class="imagem">
              <img src={`assets/img/${name}.svg`} />
            </div>
            <div class="usuario">{name}</div>
          </div>
        );
      })}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
