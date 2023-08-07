import classes from "./AboutUs.module.css";
import about_us from "../../assets/about-us.jpeg";
export default function AboutUs() {
  return (
    <div className={classes.container}>
      <div className={classes.description_container}>
        <h1 className={classes.title}>About Us</h1>
        <div className={classes.description}>
          <p>We started operations in 2020. We guarantee fresh produce.</p>
          <p> Save time
          by shopping on our app and we&apos;ll deliver the products right to your
          home. <span>We use Stripe to process your payment.</span></p>
        </div>
      </div>

      <img
        className={classes.landing_img}
        src={about_us}
        alt="image of bag with groceries"
      />
    </div>
  );
}
