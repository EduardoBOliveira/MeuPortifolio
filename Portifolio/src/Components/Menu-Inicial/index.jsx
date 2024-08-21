import "./style.css";

export default function Header() {
  return (
    <header className="container_header_inicial" id="inicio">

      <ul className="header_lista_inicial">
        <li className="header_lista_item_inicial">
          <a href="#inicio" className="header_lista_item_link_inicial">
            INICIO
          </a>
        </li>
        <li className="header_lista_item_inicial">
          <a href="#sobre" className="header_lista_item_link_inicial">
            SOBRE
          </a>
        </li>
        <li className="header_lista_item_inicial">
          <a href="#tecnologias" className="header_lista_item_link_inicial">
            SKILLS
          </a>
        </li>
        <li className="header_lista_item_inicial">
          <a href="#projetos" className="header_lista_item_link_inicial">
            PROJETOS
          </a>
        </li>
        <li className="header_lista_item_inicial">
          <a href="#contato" className="header_lista_item_link_contato_inicial">
            CONTATO
          </a>
        </li>
      </ul>
    </header>
  );
}
