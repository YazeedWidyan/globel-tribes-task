import Styles from "@/styles/categories.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/api/categories`);
  const { categories } = await req.json();
  return {
    props: {
      categories,
    },
  };
}

const Categories = ({ categories }) => {
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
        <div className={Styles.categoriesBottomSection}>
          {categories.map((item) => {
            return (
              <Link href={`/categories/${item.id}`}>
                <div className={Styles.categoriesCard}></div>
                <h3 className="text-white">{item.title}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
