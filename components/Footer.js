import Section from "./elements/Section";
import AnchorButton from "./elements/AnchorButton";
import Lead from "./elements/Lead";
import GDGLogo from "./icons/gdg_logo.svg";
import Anchor from "./elements/Anchor";

export default () => (
  <Section skyline>
    <Lead>DevFest 2021 organizado por</Lead>
    <h1 style={{ fontSize: "2.5em" }}>
      <GDGLogo
        alt="GDG"
        width="110px"
        style={{ position: "relative", top: "11px" }}
      />{" "}
      GDG Jaén
    </h1>
    <p>
      <Anchor
        href="https://gdgjaen.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://gdgjaen.netlify.app
      </Anchor>
    </p>
    <p className="cta">
      {/* <AnchorButton
        href="https://ti.to/gdg-new-orleans/devfest-new-orleans-2019"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginRight: "20px" }}
      >
        Register now
      </AnchorButton> */}
      <AnchorButton
        color="red"
        href="https://www.meetup.com/es-ES/GDG-Jaen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Únete a nosotros en Meetup
      </AnchorButton>
    </p>
  </Section>
);
