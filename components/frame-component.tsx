import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.tmWrapper}>
            <div className={styles.tm}>TM</div>
          </div>
          <div className={styles.helpfrybixcomParent}>
            <div className={styles.helpfrybixcom}>help@frybix.com</div>
            <div className={styles.div}>+1 234 456 678 89</div>
          </div>
        </div>
      </div>
      <div className={styles.linksParent}>
        <h2 className={styles.links}>links</h2>
        <div className={styles.homeWrapper}>
          <div className={styles.home}>home</div>
        </div>
        <div className={styles.aboutUsWrapper}>
          <div className={styles.aboutUs}>about us</div>
        </div>
        <div className={styles.bookingsWrapper}>
          <div className={styles.bookings}>bookings</div>
        </div>
        <div className={styles.blogWrapper}>
          <div className={styles.blog}>blog</div>
        </div>
      </div>
      <div className={styles.legalParent}>
        <h2 className={styles.legal}>legal</h2>
        <div className={styles.termsOfUse}>terms of use</div>
        <div className={styles.privacyPolicy}>privacy policy</div>
        <div className={styles.cookiePolicy}>cookie policy</div>
      </div>
      <div className={styles.productParent}>
        <h2 className={styles.product}>product</h2>
        <div className={styles.takeTour}>take tour</div>
        <div className={styles.liveChat}>live chat</div>
        <div className={styles.reveiws}>reveiws</div>
      </div>
      <div className={styles.newsletterParent}>
        <h2 className={styles.newsletter}>Newsletter</h2>
        <div className={styles.stayUpTo}>Stay up to date</div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.yourEmailWrapper}>
            <div className={styles.yourEmail}>{`Your email `}</div>
          </div>
          <button className={styles.group}>
            <div className={styles.rectangle1} />
            <div className={styles.subscribe}>Subscribe</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
