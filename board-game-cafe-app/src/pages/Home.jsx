
import HeroSection from "../components/hero/HeroSection";
import {
  Section,
  BaseTitle,
} from "../styles/styles";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <main>
        <Section>
          <BaseTitle>Come Play With Us!</BaseTitle>
          <article>
            <h2>
              Experience the joy of board games in a welcoming, fun-filled
              environment. Whether you're a seasoned player or new to tabletop
              games, our Board Game Cafe is the perfect place to unwind,
              connect, and play. We can't wait to welcome you!
            </h2>
            <h1>Ambiance & Atmosphere</h1>
            <h2>
              Step into a warm, inviting space with comfortable seating and a
              vibrant atmosphere. Our cafe is designed to make you feel at home,
              with ambient lighting, rustic decor, and modern style. Whether
              you're here for a quick coffee or a marathon gaming session, our
              environment is perfect for relaxing and having fun.
            </h2>
            <h1>Extensive Game Library</h1>
            <h2>
              Our extensive library boasts over 500 board games, catering to all
              ages and preferences. From classic games like Monopoly and
              Scrabble to modern favorites like Catan and Ticket to Ride,
              there's something for everyone. Our knowledgeable staff can always
              recommend games and explain the rules, ensuring you have the best
              possible experience.
            </h2>
            <h1>Delicious Food & Drinks:</h1>
            <h2>
              Savor our delightful menu, which features a variety of snacks,
              meals, and beverages. Enjoy freshly brewed coffee, artisanal teas,
              and a selection of craft beers and wines. Our kitchen serves up
              delicious sandwiches, salads, and pastries, perfect for fueling
              your gaming adventures.
            </h2>
            <h1>Events & Community</h1>
            <h2>
              Join us for regular events, including game nights, tournaments,
              and special-themed nights. Our cafe is more than just a place to
              play games; it's a community hub where you can meet new friends
              and share your love for board games. Check our calendar for
              upcoming events, and reserve your spot!
            </h2>
          </article>
        </Section>
      </main>
    </>
  );
}
