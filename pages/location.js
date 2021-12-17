import VenueMap from "../components/VenueMap";
import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer";
import AnchorButton from "../components/elements/AnchorButton";

export default () => (
  <Layout>
    <Section>
      <PageTitle>Lugar de encuentro</PageTitle>
      <p>En las instalaciones de la Universidad de Jaén.</p>
      <h2>Edificio A4</h2>
      <VenueMap />
    </Section>

    <Section color="green">
      <h1>¡Bienvenido a Jaén!</h1>
      <p>
        ¿Primera vez en Jaén? Aquí tienes algunas recomendaciones de los
        habitantes de la ciudad sobre restaurantes, bares, música y cosas para
        hacer mientras estás aquí:
      </p>
      <p className="cta">
        <AnchorButton
          color="white/green"
          href="https://www.mochileandoporelmundo.com/que-ver-y-hacer-en-jaen-y-provincia/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosas que hacer
        </AnchorButton>
      </p>
    </Section>

    <Footer />
  </Layout>
);
