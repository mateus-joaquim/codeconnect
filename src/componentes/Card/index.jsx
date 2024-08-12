import Capa from "./assets/capa.png";
import Code from "./assets/code.svg";
import Chat from "./assets/chat.svg";
import Share from "./assets/share.svg";
import Icone from "./assets/icone.png";
import "./styles.css";

export default function Card() {
  return (
    <article className="card">
      <div className="card__imagem">
        <img src={Capa} alt="Imagem do post" />
      </div>
      <div className="card__conteudo">
        <div className="conteudo__texto">
          <h3>Titulo do post</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint.
          </p>
        </div>
        <div className="conteudo__rodape">
          <div>
            <ul>
              <li>
                <img src={Code} alt="códigos" />
                100
              </li>
              <li>
                <img src={Share} alt="compartilhamentos" />
                12
              </li>
              <li>
                <img src={Chat} alt="comentários" />
                12
              </li>
            </ul>
          </div>
          <div className="rodape__usuario">
            <img src={Icone} alt="Ícone do usuário" />
            @Mateus
          </div>
        </div>
      </div>
    </article>
  );
}
