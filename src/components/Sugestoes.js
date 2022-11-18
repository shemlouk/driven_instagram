const sugestoes = [
  {
    username: "bad.vibes.memes",
    status: "Segue você",
  },
  {
    username: "chibirdart",
    status: "Segue você",
  },
  {
    username: "razoesparaacreditar",
    status: "Novo no Instagram",
  },
  {
    username: "adorable_animals",
    status: "Segue você",
  },
  {
    username: "smallcutecats",
    status: "Segue você",
  },
];

export default function Sugestoes() {
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((s) => (
        <Sugestao {...s} />
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={`assets/img/${props.username}.svg`} />
        <div class="texto">
          <div class="nome">{props.username}</div>
          <div class="razao">{props.status}</div>
        </div>
      </div>
      <div class="seguir">Seguir</div>
    </div>
  );
}
