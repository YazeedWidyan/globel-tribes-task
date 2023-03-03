import Link from "next/link";
import Styles from "@/styles/navbar.module.css";
const Navbar = ({ product }) => {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.container + " container "}>
        <img
          src="https://static.globaltribes.io/site/logos/main.svg"
          className={Styles.logo}
        />
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/destinations"> Destinations </Link>
          </li>
          <li>
            <Link href="/categories"> Categories </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
