import Posts from "./Posts";
import Stories from "./Stories";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Corpo() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>

      <div class="sidebar">
        <Usuario />
        <Sugestoes />
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  );
}
