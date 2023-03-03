// products/productsId(MoreDetails)/[id].js

import { categories } from "@/data/categories";
import Styles from "@/styles/categories.module.css";

//=-=-=-=-=-= getStaticPaths =-=-=-=-=-=
export async function getStaticPaths() {
  const paths = categories.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`http://localhost:3000/api/categories`);
  const { categories } = await req.json();
  return {
    props: {
      categories,
      id,
    },
  };
}
const itemDetail = ({ categories, id }) => {
  const product = categories.filter((item) => {
    return item.id == id;
  });

  return (
    <div className={Styles.categoriesContainer + " py-8 "}>
      <div className="container">
        <div className={Styles.categoriesTopSection}>
          <h1>CATEGORIES</h1>
          <div className="flex">
            <img src="https://static.globaltribes.io/site/arrow-white.svg" />
            <h1>FILTERS</h1>
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
              <img
                src="https://staging.globaltribes.io/_next/image?url=%2Fcamping_img.png&w=1920&q=75"
                className={Styles.itemImage}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default itemDetail;
