import type { NextPage } from "next";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.promoBackgroundParent, className].join(" ")}>
      <div className={styles.promoBackground} />
      <div className={styles.promoBackground1} />
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-5.svg"
        />
        <img
          className={styles.gradientStarIcon}
          loading="lazy"
          alt=""
          src="/star-7-1.svg"
        />
        <img className={styles.frameItem} alt="" src="/rectangle-3.svg" />
        <p className={styles.makeTheBest}>make the best financial decisions</p>
        <b className={styles.uifryPremium}>Uifry Premium</b>
        <a className={styles.freeTrial}>free trial</a>
      </div>
      <div className={styles.thirdGradient} />
      <img className={styles.frameInner} alt="" src="/group-35920@2x.png" />
      <img
        className={styles.starIcon}
        loading="lazy"
        alt=""
        src="/star-8.svg"
      />
    </div>
  );
};

export default GroupComponent;
