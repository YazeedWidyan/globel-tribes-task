import Styles from "@/styles/footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={Styles.footerContainer}>
      <div className={Styles.subscribeText}>Subscribe to our newsletter</div>
      <div className="container py-4">
        <div className={Styles.footerWrapper}>
          <div className="flex-column">
            <Link href="/">Explore</Link>
            <Link href="/">Category</Link>
            <Link href="/">Activities</Link>
            <Link href="/">Become A supplier</Link>
            <Link href="/">Influencers Portal - Sign up</Link>
          </div>
          <div className="flex-column">
            <Link href="/">Terms and Conditions</Link>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Refund and cancellation</Link>
            <Link href="/">Contact Us</Link>
            <Link href="/">Contact Information</Link>
          </div>
          <div className="spacer"></div>
          <img
            className={Styles.footerLogo}
            src="https://static.globaltribes.io/site/logos/allwhite.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
