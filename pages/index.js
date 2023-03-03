import Head from "next/head";
import Styles from "@/styles/home.module.css";
import Gallery from "@/components/Carousel";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/api/destinations`);
  const { destinations } = await req.json();
  return {
    props: {
      destinations,
    },
  };
}
const images = [
  "https://static.globaltribes.io/site/slides/slide1.png",
  "https://static.globaltribes.io/site/slides/slide2.png",
  "https://static.globaltribes.io/site/slides/slide3.png",
  "https://static.globaltribes.io/site/slides/slide4.png",
];

const Home = ({ destinations }) => {
  const [imagesList, setImagesList] = useState(images);
  const [currentImg, setCurrentImg] = useState(0);

  const changeBackgroundImage = () => {
    let newCurrentImg = 0;
    const noOfImages = imagesList.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }
    setCurrentImg(newCurrentImg);
  };

  useEffect(() => {
    const interval = setInterval(() => changeBackgroundImage(), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImg]);

  const urlString = `url('${images[currentImg]}')`;

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <div className="dynamicImage" style={{ backgroundImage: urlString }}>
          <div className={Styles.searchWrapper}>
            <h2>Plan your trip</h2>
            <input placeholder="find your detination" />
          </div>
        </div>
      </div>
      <div className={Styles.scheduleWrapper + " py-4 "}>
        <div className="container">
          <div className={Styles.scheduleTopSection}>
            <h1>OUR SCHEDULED</h1>
            <div className="flex">
              <img src="https://static.globaltribes.io/site/arrow.svg" />
              <h1>TRIPS</h1>
            </div>
          </div>
          <Gallery />
        </div>
      </div>
      <div className={Styles.destinationsWrapper + " py-4 "}>
        <div className="container">
          <div className={Styles.destinationsContainer}>
            <div className={Styles.destinationsLeftSection}>
              <h1>DESTINATIONS</h1>
              <div className="flex">
                <img src="https://static.globaltribes.io/site/arrow-white.svg" />
                <h1>TO VISIT</h1>
              </div>
              <p>
                Integer eget mollis augue. Curabitur efficitur efficitur risus
                id ornare. Phasellus varius turpis eu libero hendrerit rhoncus
                Interdum et malesuada fames ac ante ipsum primis in
                faucibus.Interdum et malesuada fames ac ante ipsum primis in
                faucibus.
              </p>
            </div>
            <div className={Styles.spacer}></div>
            <div className={Styles.destinationsRightSection}>
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
      </div>
    </>
  );
};

export default Home;
