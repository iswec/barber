import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import beard from "../assets/img/icons-skills/beard.png";
import haircut from "../assets/img/icons-skills/haircut.png";
import beardTriming from "../assets/img/icons-skills/beard-trimming.png";
import beardOil from "../assets/img/icons-skills/beard-oil.png";
import hidratation from "../assets/img/icons-skills/hair-cut.png";
import boy from "../assets/img/icons-skills/boy.png";
import clipper from "../assets/img/icons-skills/clipper.png";
import hairHi from "../assets/img/icons-skills/epidermis.png";
import skincare from "../assets/img/icons-skills/skincare.png";
import foot from "../assets/img/icons-skills/foot-massage.png";
import hot from "../assets/img/icons-skills/hot-stones.png";
import health from "../assets/img/icons-skills/health.png";
import facial from "../assets/img/icons-skills/facial-treatment.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Serviços</h2>
              <p>
                Com mais de 20 opções de cuidados pessoais disponíveis, estamos
                prontos para atender a todas as suas necessidades estéticas.
                Explore nossa seleção abrangente de serviços e descubra um mundo
                de opções para elevar sua estética a um nível superior.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={beard} alt="Image" />
                  <h5>Barba</h5>
                </div>
                <div className="item">
                  <img src={haircut} alt="Image" />
                  <h5>Corte</h5>
                </div>
                <div className="item">
                  <img src={beardTriming} alt="Image" />
                  <h5>Barba + corte</h5>
                </div>

                <div className="item">
                  <img src={beardOil} alt="Image" />
                  <h5>Barba + hidratação</h5>
                </div>
                <div className="item">
                  <img src={hidratation} alt="Image" />
                  <h5>
                    Corte + barba<br></br> + hidratação
                  </h5>
                </div>

                <div className="item">
                  <img src={boy} alt="Image" />
                  <h5>Corte infantil</h5>
                </div>
                <div className="item">
                  <img src={clipper} alt="Image" />
                  <h5>Corte zero</h5>
                </div>
                <div className="item">
                  <img src={hairHi} alt="Image" />
                  <h5>
                    Hidratação profunda<br></br> no cabelo/barba
                  </h5>
                </div>
                <div className="item">
                  <img src={skincare} alt="Image" />
                  <h5>Limpeza de pele</h5>
                </div>
                <div className="item">
                  <img src={hot} alt="Image" />
                  <h5>
                    Massagem com <br></br>pedras quentes
                  </h5>
                </div>
                <div className="item">
                  <img src={health} alt="Image" />
                  <h5>
                    Massagem corporal<br></br> 15/30/60min
                  </h5>
                </div>
                <div className="item">
                  <img src={facial} alt="Image" />
                  <h5>
                    Massagem facial<br></br> relaxante
                  </h5>
                </div>
                <div className="item">
                  <img src={foot} alt="Image" />
                  <h5>Reflexologia podal</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
