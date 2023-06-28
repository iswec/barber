import { Container, Row } from "react-bootstrap";
import beard from "../assets/img/img-ass/Barber-cuate.svg";
import promoção from "../assets/img/img-ass/Savings-cuate.svg";
import familia from "../assets/img/img-ass/Men talking-cuate.svg";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <center>
        <label className="div-ass">Assinaturas</label>
      </center>
      <Container>
        <Row className="align-items-center">
          <img src={beard}></img>
          <figure>
            <section>
              <h4>Serviços</h4>
              <h4>Avulsos</h4>
            </section>

            <p>Vamos além de uma barbearia</p>
            <p>Mais de 21 serviços</p>
            <p>Centro estético masculino</p>
            <p>Ambiente familiar</p>
            <div>
              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                <button type="submit">Saiba mais</button>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                <button type="submit">Assinar</button>
              </a>
            </div>
          </figure>
        </Row>

        <Row className="align-items-center">
          <img src={familia}></img>

          <figure>
            <section>
              <h4>Assinatura </h4>
              <h4>Personalizada</h4>
            </section>
            <p>Assinatura compartilhada com família e amigos</p>
            <p>20% de desconto em todos os serviços</p>
            <p>Assinatura mensal, bimestral ou até trimestral</p>
            <p>Não tem multas e taxas de pagamento por cancelamento</p>
            <div>
              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                <button type="submit">Saiba mais</button>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                <button type="submit">Assinar</button>
              </a>
            </div>
          </figure>
        </Row>

        <Row className="align-items-center">
          <img src={promoção}></img>
          <figure>
            <section>
              <h4>Assinatura </h4>
              <h4>Ilimitada</h4>
            </section>

            <p>Corte o cabelo e faça barba as vezes que você quiser no mês</p>
            <p>Tenha acesso ilimitado a todos os serviços do centro estético</p>
            <p>Maior desconto em produto e serviço</p>
            <div>
              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                <button type="submit">Saiba mais</button>
              </a>

              <a href="https://api.whatsapp.com/send/?phone=5511913989895&text=Ol%C3%A1%2C+tudo+bem%3F&type=phone_number&app_absent=0">
                <button type="submit">Assinar</button>
              </a>
            </div>
          </figure>
        </Row>
      </Container>
    </section>
  );
};
