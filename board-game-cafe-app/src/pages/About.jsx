import { Helmet } from "react-helmet";
import { ImageContainer } from "../components/CardComponent";
import photo from "../assets/photo.webp";
import { BaseText, BaseTitle } from "../styles/styles";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Sip&Play</title>
        <meta
          name="description"
          content="Learn more about our board game cafe in New York and our collection of tabletop games."
        />

        <p></p>
      </Helmet>
      <main>
        <img src={photo} style={{ width: "100%" }}></img>
        <BaseTitle>OUR STORY</BaseTitle>
        <BaseText>
          Founder, Jonathan Li, shares a passion for board games, boba, and
          delicious food, so he combined them all to become Sip & Play, Park
          Slope’s first board game cafe. It is a straightforward concept, come
          in with your friends and family to play any board game from our
          library of 300+ games! We hope when you visit, you also enjoy our
          coffee, espresso, boba, sandwiches, and snacks!
        </BaseText>
        
      </main>
    </>
  );
}
