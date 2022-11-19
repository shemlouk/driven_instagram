export default function Usuario() {
  return (
    <div className="usuario">
      <img data-user="image" src="assets/img/catanacomics.svg" />
      <div className="texto">
        <strong>catanacomics</strong>
        <span data-user="name">
          Catana
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
