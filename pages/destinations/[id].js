// products/productsId(MoreDetails)/[id].js

import { destinations } from "@/data/destinations";
import Link from "next/link";
import Styles from "@/styles/destinations.module.css";

//=-=-=-=-=-= getStaticPaths =-=-=-=-=-=
export async function getStaticPaths() {
  const paths = destinations.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`http://localhost:3000/api/destinations`);
  const { destinations } = await req.json();
  return {
    props: {
      destinations,
      id,
    },
  };
}
const itemDetail = ({ destinations, id }) => {
  const product = destinations.filter((item) => {
    return item.id == id;
  });

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

        {product.map((item) => {
          return (
            <div className={Styles.itemContainer} key={item.id}>
              <div className={Styles.itemLeftSection}>
                <div className={Styles.itemTitle}>{item.title}</div>
                <div className={Styles.itemDesc}>
                  {item.title} Integer eget mollis augue. Curabitur efficitur
                  efficitur risus id ornare. Phasellus varius turpis eu libero
                  hendrerit rhoncus. Integer et eros elit. Curabituin erat
                  consequat ultricies et nec sem. Interdac ante ipsum primis in
                  faucibus.Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.Integer eget mollis augue. Curabitur efficitur
                  efficitur risus id ornare. Phasellus varius turpis eu libero
                  hendrerit rhoncus. Integer et eros elit. Curabituin erat
                  consequat ultricies et nec sem. Interdac ante ipsum primis in
                  faucibus.Interdum et malesuada fames ac ante ipsum primis in
                  faucibus.
                </div>
                <div className={Styles.itemtrips}>
                  <span className={Styles.tripsSubTitle}>NUMBER OF TRIPS</span>
                  <span className={Styles.tripsCount}>{item.trips}</span>
                  <span className={Styles.tripsBtn}> EXPLORE MORE</span>
                </div>
              </div>
              <div className={Styles.spacer}></div>
              <div className={Styles.itemRightSection}>
                {destinations.map((item) => {
                  return (
                    <Link
                      className={Styles.destinationsCardWrapper}
                      href={`/destinations/${item.id}`}
                    >
                      <div
                        className={Styles.destinationsCardRounded}
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                      <h3 className="text-white">{item.title}</h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default itemDetail;
