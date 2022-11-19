import { useState } from "react";

export default function Usuario() {
  const [name, setName] = useState("Catana");
  const [image, setImage] = useState("assets/img/catanacomics.svg");
  return (
    <div className="usuario">
      <img
        onClick={() => setImage(changeProfile(image, "image"))}
        src={image}
      />
      <div className="texto">
        <strong>catanacomics</strong>
        <span>
          {name}
          <ion-icon
            onClick={() => setName(changeProfile(name, "name"))}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}

function changeProfile(defaultValue, type) {
  const msgs = {
    name: {
      get: "Qual o seu nome?",
      invalid: "Nome inválido!",
    },
    image: {
      get: "Qual a URL da imagem?",
      invalid: "URL inválida!",
    },
  };
  const newValue = prompt(msgs[type].get);
  if (!newValue) {
    alert(msgs[type].invalid);
    return defaultValue;
  }
  return newValue;
}
