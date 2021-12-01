import styled from "styled-components";
import Layout from "../components/Layout";
import PersonList from "../components/Person/PersonList";
import AnchorButton from "../components/elements/AnchorButton";
import OffsetHeading from "../components/elements/OffsetHeading";
import Section from "../components/elements/Section";
import SponsorList from "../components/SponsorList";
import GDGLogo from "../components/icons/gdg_logo.svg";
import Footer from "../components/Footer";
import Anchor from "../components/elements/Anchor";
import Schedule from "../components/Schedule";
import Emcee from "../components/Emcee";
import Tito from "../components/Tito";
const speakers = require("../data/speakers.yml.json");
const emcee = require("../data/mc.yml.json")[0];
const schedule = require("../data/schedule.yml.json");
const sponsors = require("../data/sponsors.yml.json");
const organizers = require("../data/organizers.yml.json");

const Title = styled.h1`
  font-family: "Product Sans", sans-serif;
  margin-left: 20px;
  text-align: center;
  &#title {
    font-size: 3em;
  }
`;

export default () => (
  <Layout>
    <Section skyline>
      <Title id="title">
        <GDGLogo
          alt="GDG"
          width="120px"
          style={{ position: "relative", top: "11px" }}
        />
        DevFest Jaén 2021
      </Title>
    </Section>

    <Section color="green">
      <h1>11 de Diciembre, 2021</h1>
      <p>
        DevFest es una conferencia inclusiva de un solo día para todos los
        desarrolladores. GDG Jaén te invita a unirte a nosotros el sábado 11 de
        diciembre de 2021 en la Universidad de Jaén.
      </p>
      <div>
        <h2>Venta de entradas online</h2>
        <AnchorButton
          color="blue"
          href="https://billetto.es/e/devfest-2021-entradas-583107"
          target="_blank"
          rel="noopener noreferrer"
        >
          Comprar entrada
        </AnchorButton>
      </div>
      <h2>Venta de entradas presencial</h2>
      <p>También puedes comprar las entradas en persona.</p>
      <h4>⏰ Horario</h4>
      <p>De Lunes a Viernes: 12:30-14:30 | 16:30-18:30</p>
      <h4>📍 Lugar</h4>
      <p>Universidad de Jaén, Edificio: C2-308</p>
    </Section>

    <Section>
      <OffsetHeading id="speakers">Ponentes</OffsetHeading>
      <PersonList people={speakers} rainbow />
    </Section>

    <Section color="blue">
      <OffsetHeading id="schedule">Programación del evento</OffsetHeading>
      <Schedule schedule={schedule} />
    </Section>

    <Section>
      <OffsetHeading id="sponsors">Patrocinadores</OffsetHeading>
      <SponsorList sponsors={sponsors} />
      <p>
        El patrocinio ofrece exposición de marketing, contratación de ayuda y
        adoración de nuestra comunidad, y puede ser en especie (espacio,
        bebidas, voluntarios, etc.) o monetario. Interesado en ser un
        patrocinador? Póngase en contacto con nosotros hoy:
      </p>
      <p className="cta">
        <AnchorButton
          href="mailto:gdgjaen@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conviértete en patrocinador
        </AnchorButton>
      </p>
    </Section>

    <Section color="red">
      <OffsetHeading id="organizers">Organizadores</OffsetHeading>
      <PersonList people={organizers} />
    </Section>

    <Footer />
  </Layout>
);
