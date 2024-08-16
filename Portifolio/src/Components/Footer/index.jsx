import "./style.css";

export default function Footer() {
  return (
    <footer className="container_footer" id="contato">
      <div className="container_contato">
        <p className="contato">Telefone: +55 (11) 94552-2618</p>
        <p className="contato">E-mail: edubezerra_oliveira@hotmail.com</p>
      </div>
      <div className="footer_botoes">
        <ul className="footer_botoes_lista">
          <li className="footer_botoes_lista_item">
            <button className="botao">
              <a href="https://www.linkedin.com/in/eduardo-bezerra-oliveira/" target="_blank" className="link">
                LinkedIn
              </a>
            </button>
          </li>
          <li className="footer_botoes_lista_item">
            <button className="botao">
              <a href="https://github.com/EduardoBOliveira" target="_blank" className="link">
                GitHub
              </a>
            </button>
          </li>
        </ul>
      </div>
      <p className="ano">2024</p>
    </footer>
  );
}
