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
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((s) => (
        <Sugestao key={s.username} {...s} />
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={`assets/img/${props.username}.svg`} alt={props.username} />
        <div className="texto">
          <div className="nome">{props.username}</div>
          <div className="razao">{props.status}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}
