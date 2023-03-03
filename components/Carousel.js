import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Styles from "@/styles/carousel.module.css";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <>
    <div className={Styles.content}>
      <div className={Styles.banner}>
        <p>Jordan</p>
        <p>25 June 2023</p>
        <p>5 days</p>
      </div>
      <h3 className="text-white mx-2 py-2">Experience the Karakol Nature</h3>
      <div className="flex mx-2 py-2 text-white justify-between">
        <div>
          <span>starts from</span>
          <span>300 $</span>
        </div>
        <button className={Styles.bookBtn}>book now</button>
      </div>
    </div>
    <img
      src="https://staging.globaltribes.io/_next/image?url=https%3A%2F%2Fstatic.globaltribes.io%2Fsite%2Fcard2.png&w=1920&q=75"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </>,
  <>
    <div className={Styles.content}>
      <div className={Styles.banner}>
        <p>Jordan</p>
        <p>25 June 2023</p>
        <p>5 days</p>
      </div>
      <h3 className="text-white mx-2 py-2">Experience the Karakol Nature</h3>
      <div className="flex mx-2 py-2 text-white justify-between">
        <div>
          <span>starts from</span>
          <span>300 $</span>
        </div>
        <button className={Styles.bookBtn}>book now</button>
      </div>
    </div>
    <img
      src="https://staging.globaltribes.io/_next/image?url=https%3A%2F%2Fstatic.globaltribes.io%2Fsite%2Fcard2.png&w=1920&q=75"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </>,
  <>
    <div className={Styles.content}>
      <div className={Styles.banner}>
        <p>Jordan</p>
        <p>25 June 2023</p>
        <p>5 days</p>
      </div>
      <h3 className="text-white mx-2 py-2">Experience the Karakol Nature</h3>
      <div className="flex mx-2 py-2 text-white justify-between">
        <div>
          <span>starts from</span>
          <span>300 $</span>
        </div>
        <button className={Styles.bookBtn}>book now</button>
      </div>
    </div>
    <img
      src="https://staging.globaltribes.io/_next/image?url=https%3A%2F%2Fstatic.globaltribes.io%2Fsite%2Fcard2.png&w=1920&q=75"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </>,
  <>
    <div className={Styles.content}>
      <div className={Styles.banner}>
        <p>Jordan</p>
        <p>25 June 2023</p>
        <p>5 days</p>
      </div>
      <h3 className="text-white mx-2 py-2">Experience the Karakol Nature</h3>
      <div className="flex mx-2 py-2 text-white justify-between">
        <div>
          <span>starts from</span>
          <span>300 $</span>
        </div>
        <button className={Styles.bookBtn}>book now</button>
      </div>
    </div>
    <img
      src="https://staging.globaltribes.io/_next/image?url=https%3A%2F%2Fstatic.globaltribes.io%2Fsite%2Fcard2.png&w=1920&q=75"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </>,
];

const Gallery = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <>
      {domLoaded ? (
        <AliceCarousel
          mouseTracking
          disableDotsControls
          items={items}
          responsive={responsive}
          infinite
        />
      ) : null}
    </>
  );
};
export default Gallery;
