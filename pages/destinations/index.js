import Styles from "@/styles/destinations.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/api/destinations`);
  const { destinations } = await req.json();
  return {
    props: {
      destinations,
    },
  };
}

const Destinations = ({ destinations }) => {
  return (
    <div className={Styles.destinationsContainer + " py-8 "}>
      <div className="container">
        <div className={Styles.destinationsTopSection}>
          <h1>DESTINATIONS</h1>
          <div className="flex">
            <img src="https://static.globaltribes.io/site/arrow-white.svg" />
            <h1>TO VISIT</h1>
          </div>
        </div>
        <div className={Styles.destinationsBottomSection}>
          {destinations.map((item) => {
            return (
              <Link href={`/destinations/${item.id}`}>
                <div className={Styles.destinationsCard}>
                  <img src={item.image} />
                  <h3>{item.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
