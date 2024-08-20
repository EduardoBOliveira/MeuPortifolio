import Cards from "../../Components/Cards";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { FaArrowDown } from "react-icons/fa";
import FotoSecundaria from "../../assets/linha_do_tempo.svg";
import "./intro.css";
import "./projetos.css";
import "./sobre.css";
import "./tecnologias.css";



export default function Home() {
  return (
    <>
      <main className="container">
        <article className="intro">
          <div className="corpo_da_tela_intro">
           
            <header className="container_header" id="inicio">
              <ul className="header_lista">
                <li className="header_lista_item">
                  <a href="#inicio" className="header_lista_item_link">
                    INICIO
                  </a>
                </li>
                <li className="header_lista_item">
                  <a href="#sobre" className="header_lista_item_link">
                    SOBRE
                  </a>
                </li>
                <li className="header_lista_item">
                  <a href="#tecnologias" className="header_lista_item_link">
                    SKILLS
                  </a>
                </li>
                <li className="header_lista_item">
                  <a href="#projetos" className="header_lista_item_link">
                    PROJETOS
                  </a>
                </li>
                <li className="header_lista_item">
                  <a href="#contato" className="header_lista_item_link_contato">
                    CONTATO
                  </a>
                </li>
              </ul>
            </header>

            <div>
              <div className="intro_tipografias">
                <p className="intro_tipografias_textos_introducao">Olá!</p>

                <p className="intro_tipografias_textos_introducao">
                  Seja Bem Vindo!
                </p>

                <p className="intro_tipografias_textos_apresentacao">
                  Me chamo <span className="destaque">Eduardo Bezerra</span>, um jovem 
                  desenvolvedor, com grande anseio de trabalhar com grandes projetos relacionados a Tecnologia.
                </p>

                <p className="intro_tipografias_textos_apresentacao">
                  <span className="destaque"> Vamos conversar?</span>
                </p>

                <div className="intro_tipografias_botoes">
                  <ul className="intro_tipografias_botoes_lista">
                    <li className="intro_tipografias_botoes_lista_item">
                      <button className="botao">
                        <a
                          href="https://www.linkedin.com/in/eduardo-bezerra-oliveira/"
                          target="_blank"
                          className="link"
                        >
                          LinkedIn
                        </a>
                      </button>

                    </li>
                    <li className="intro_tipografias_botoes_lista_item">
                      <button className="botao">
                        <a href="#contato" className="link">
                          E-mail
                        </a>
                      </button>
                    </li>

                    <li className="intro_tipografias_botoes_lista_item">
                      <button className="botao">
                        <a
                          href="https://github.com/EduardoBOliveira"
                          target="_blank"
                          className="link"
                        >
                          GitHub
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="div_botao_scroll">
                  <ul className="intro_tipografias_botoes_lista">
                    <li className="intro_tipografias_botoes_lista_item">
                      <a href="#sobre" className="link">
                        <button className="botao_scrol">
                          <FaArrowDown />
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </article>

        <article className="sobre">
          <div id="sobre">
            <Header />

              <div className="sobre_container">
                <img
                  src={FotoSecundaria}
                  alt="Foto do desenvolvedor Eduardo Bezerra, um homem branco com cabelo castanho claro e olhos castanhos."
                  className="sobre_foto"
                />
                <div className="container_texto">
                  <p className="sobre_texto">
                    
                  </p>
                  <p className="sobre_texto">
                    
                  </p>
                  <p className="sobre_texto">
                    
                  </p>
                
                  <p className="sobre_texto">
                    
                  </p>
                </div>
              </div>
          </div>
        </article>

        <article className="tecnologias">
          <p className="tecnologias_titulo" id="tecnologias">
            SKILLS
          </p>
          <p className="tecnologias_texto">
            Minha linguagem dominante é <span className="destaque">Python</span>, porem possuo conhecimento em Java, Spring, e frameworks Web,
            além de ter estagiado em Analise de Dados, utilizando ferramentas como Power BI e SQL Server .
          </p>

          <div className="tecnologias_icones">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="html5"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="css3"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="git"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="java"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              alt="spring"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="javascript"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="typescript"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="react"
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg"
              alt="sqlserver  "
              height="80px"
              width="80px"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="python"
              height="80px"
              width="80px"
            />

          </div>
        </article>
        <article className="projetos">
          <p className="projetos_titulo" id="projetos">
            Projetos
          </p>
          <Cards />
        </article>
        <Footer />
      </main>
    </>
  );
}
