import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import corteCelo from "../assets/img/img-barber/corte_celo.png";
import cortePefil from "../assets/img/img-barber/perfil_corte.png";
import corte from "../assets/img/img-barber/IMG_4945.png";
import corte_frontal from "../assets/img/img-barber/corte_frontal.png";
import corte_perfil_celo from "../assets/img/img-barber/corte_perfil_celo.png";
import barba from "../assets/img/img-barber/barba.png";
import frente from "../assets/img/img-barber/frente_barber.png";
import frente3 from "../assets/img/img-barber/frente3.png";
import jogos from "../assets/img/img-barber/jogos.png";
import comida from "../assets/img/img-barber/comidas.png";
import bilhar from "../assets/img/img-barber/bilhar.png";
import ambiente from "../assets/img/img-barber/ambiente.png";

import logo from "../assets/img/Icons/logotrans branco (1).png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Conexão gera destino",
      description: "@Barberflix_ofc",
      imgUrl: corte,
    },
    {
      title: "Auto cuidado",
      description: "@Barberflix_ofc",
      imgUrl: cortePefil,
    },
    {
      title: "Estética masculina",
      description: "@Barberflix_ofc",
      imgUrl: corteCelo,
    },
    {
      title: "Relacionamento",
      description: "@Barberflix_ofc",
      imgUrl: barba,
    },
    {
      title: "Desenvolvimento pessoal",
      description: "@Barberflix_ofc",
      imgUrl: corte_perfil_celo,
    },
    {
      title: "Tempo de qualidade",
      description: "@Barberflix_ofc",
      imgUrl: corte_frontal,
    },
  ];

  const projects2 = [
    {
      title: "Exclusividade",
      description: "@Barberflix_ofc",
      imgUrl: frente,
    },
    {
      title: "Relevância",
      description: "@Barberflix_ofc",
      imgUrl: bilhar,
    },
    {
      title: "Desafios e superação",
      description: "@Barberflix_ofc",
      imgUrl: frente3,
    },
    {
      title: "Praticidade",
      description: "@Barberflix_ofc",
      imgUrl: comida,
    },
    {
      title: "Excelência",
      description: "@Barberflix_ofc",
      imgUrl: ambiente,
    },
    {
      title: "Ambiente confortável",
      description: "@Barberflix_ofc",
      imgUrl: jogos,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Assinaturas</h2>
                  <p>
                    Descubra as vantagens de nossas assinaturas personalizadas.
                    Aproveite agendamentos prioritários, descontos exclusivos e
                    acesso a eventos especiais reservados para membros. Com
                    nossa plataforma intuitiva, você pode ajustar preferências e
                    agendar serviços facilmente. Eleve seu estilo com a
                    comodidade de uma experiência personalizada.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Cortes</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Ambiente</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Vídeo</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          <iframe
                            width="560"
                            height="615"
                            src="https://www.youtube.com/embed/watch?v=A58wCkPJtIU&list=RDrxmY1sMTsF8&index=3&ab_channel=CharlieBrownJr.-Topic"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={logo}></img>
    </section>
  );
};
