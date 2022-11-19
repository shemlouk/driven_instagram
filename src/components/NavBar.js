const ionIcons = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline",
];

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="separador"></div>
          <img alt="logo" src="assets/img/logo.png" />
        </div>
        <div className="logo-mobile">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="instagram-mobile">
          <img alt="logo" src="assets/img/logo.png" />
        </div>
        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <div className="icones">
          {ionIcons.map((icon) => (
            <ion-icon key={icon} name={icon}></ion-icon>
          ))}
        </div>
        <div className="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
}
