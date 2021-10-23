import styled from "styled-components";

const MapContainer = styled.div`
  height: 400px;
  margin: 30px 0;
  max-width: 600px;
  overflow: hidden;
  position: relative;
  width: 100%;

  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export default () => (
  <MapContainer>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.069845591004!2d-3.7794054842095637!3d37.78840287975688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd7abfa6a10df%3A0xf05fe5191735ab43!2sJaen%20University!5e0!3m2!1sen!2ses!4v1634985806119!5m2!1sen!2ses"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen
      title="Google Maps Miller Hall Loyola University"
    ></iframe>
  </MapContainer>
);
