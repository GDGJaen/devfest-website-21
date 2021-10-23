import Layout from "../components/Layout";
import PageTitle from "../components/elements/PageTitle";
import Section from "../components/elements/Section";
import Footer from "../components/Footer";

const conduct = () => (
  <Layout>
    <Section>
      <PageTitle>Código de conducta</PageTitle>

      <p>
        Cuando te unes a nuestros programas, te unes a una comunidad. Y como
        cualquier comunidad en crecimiento, algunas reglas básicas sobre el
        comportamiento esperado son buenas para todos. Estas pautas cubren el
        comportamiento en línea (por ejemplo, listas de correo, canales
        sociales) y fuera de línea (por ejemplo, reuniones en persona).
      </p>

      <p>
        Las violaciones de este código de conducta pueden resultar en la
        eliminación de los miembros del programa. Use su mejor criterio, y si
        desea más claridad o tiene preguntas, no dude en comunicarse.
      </p>

      <ol>
        <li>
          <b>Sé bueno</b>. Todos somos parte de la misma comunidad, así que sea
          amable, acogedor y, en general, una buena persona. Sé alguien con
          quien otras personas quieran estar.
        </li>
        <li>
          <b>Sé respetuoso y constructivo</b>. Recuerde ser respetuoso y
          constructivo con su comunicación con los demás miembros. No entre en
          llamas, realice ataques personales, desahogue o divague de manera poco
          constructiva. Todos deberían asumir la responsabilidad de la comunidad
          y tomar la iniciativa de disipar la tensión y detener un hilo negativo
          lo antes posible.
        </li>
        <li>
          <b>Sé colaborativo</b>. ¡Trabajar juntos! Podemos aprender mucho el
          uno del otro. Compartir conocimientos y ayudarse mutuamente.
        </li>
        <li>
          <b>Participar</b>. Participe en las discusiones, asista regularmente a
          reuniones en persona, ofrezca comentarios y ayude a implementar esos
          comentarios.
        </li>
        <li>
          <b>Renunciar con consideración</b>. Si tiene alguna forma de
          responsabilidad en su comunidad, tenga en cuenta sus propias
          limitaciones. Si sabe que un nuevo trabajo o situación personal
          limitará su tiempo, busque a alguien que pueda hacerse cargo de usted
          y transfiera la información relevante (contactos, contraseñas, etc.)
          para una transición sin problemas.
        </li>
        <li>
          <b>Etiqueta básica para discusiones en línea</b>. No envíe mensajes a
          una lista grande que solo necesite ir a una persona. Mantenga las
          conversaciones sobre temas al mínimo. No seas spam publicitando o
          promocionando proyectos personales que están fuera de tema.
        </li>
      </ol>
    </Section>

    <Footer />
  </Layout>
);

export default conduct;
