import Cards from "../../Components/Cards";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import MenuInicial from "../../Components/Menu-Inicial";
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
           
           <MenuInicial/>

            <div>
              <div className="intro_tipografias">
                <p className="intro_tipografias_textos_introducao">Olá!</p>

                <p className="intro_tipografias_textos_introducao">
                  Seja Bem Vindo!
                </p>

                <p className="intro_tipografias_textos_apresentacao">
                  Me chamo <span className="destaque_inicial">Eduardo Bezerra</span>, um jovem 
                  desenvolvedor, com grande anseio de trabalhar com grandes projetos relacionados a Tecnologia.
                </p>

                <p className="intro_tipografias_textos_apresentacao">
                  <span className="destaque_inicial"> Vamos conversar?</span>
                </p>

                <div className="intro_tipografias_botoes">
                  <ul className="intro_tipografias_botoes_lista">
                    <li className="intro_tipografias_botoes_lista_item">
                      <button className="botao_inicial">
                        <a
                          href="https://www.linkedin.com/in/eduardo-bezerra-oliveira/"
                          target="_blank"
                          className="link_inicial"
                        >
                          LinkedIn
                        </a>
                      </button>

                    </li>
                    <li className="intro_tipografias_botoes_lista_item">
                      <button className="botao_inicial">
                        <a href="#contato" className="link_inicial">
                          E-mail
                        </a>
                      </button>
                    </li>

                    <li className="intro_tipografias_botoes_lista_item">
                      <button className="botao_inicial">
                        <a
                          href="https://github.com/EduardoBOliveira"
                          target="_blank"
                          className="link_inicial"
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
                      <a href="#sobre" className="link_inicial">
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
          <div id="sobre" className="sobre_container">

            <Header />
              <div className="sobre_corpo">
                <img
                  src={FotoSecundaria}
                  alt="Foto do desenvolvedor Eduardo Bezerra, um homem branco com cabelo castanho claro e olhos castanhos."
                  className="sobre_foto"
                />
                <div className="container_texto">
                  <div className="texto01">
                    <p className="sobre_texto">
                      Sou um programador com foco em Python, 
                      apaixonado por transformar desafios em soluções criativas e eficientes. 
                    </p>
                  </div>
                  <div className="texto02"> 
                    <p className="sobre_texto">
                      Minha jornada profissional inclui um estágio como Analista de Dados, 
                      onde desenvolvi habilidades valiosas no uso de Power BI e SQL Server para análise e visualização de dados.
                    </p>
                  </div>
                  <div className="texto03">
                    <p className="sobre_texto">
                      Essa experiência me proporcionou uma visão ampla de como integrar e otimizar dados para gerar insights estratégicos, 
                      fortalecendo minha capacidade de aplicar conhecimento técnico em contextos práticos e dinâmicos.
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </article>

        <article className="tecnologias">
          <div className="corpo_tenologia" id="tecnologias">
            
            <p className="tecnologias_titulo">
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
