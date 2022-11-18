import Corpo from "./Corpo.js";
import Navbar from "./NavBar.js";

const buttons = [
  "home",
  "search-outline",
  "add-circle-outline",
  "heart-outline",
  "person-outline",
];

export default function App() {
  return (
    <div>
      <Navbar />
      <Corpo />
      <div class="fundo-mobile">
        {buttons.map((b) => (
          <ion-icon name={b}></ion-icon>
        ))}
      </div>
    </div>
  );
}
