import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.featuresParent}>
            <div className={styles.features}>features</div>
            <h1 className={styles.uifryPremium}>uifry premium</h1>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.budgetingIntervalsWrapper}>
              <b className={styles.budgetingIntervals}>budgeting intervals</b>
            </div>
            <p className={styles.cumEtConvallis}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.budgetingIntervalsContainer}>
              <b className={styles.budgetingIntervals1}>budgeting intervals</b>
            </div>
            <p className={styles.cumEtConvallis1}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.budgetingIntervalsFrame}>
              <b className={styles.budgetingIntervals2}>budgeting intervals</b>
            </div>
            <p className={styles.cumEtConvallis2}>
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.frameParent3}>
          <div className={styles.wrapperGroup35930Parent}>
            <div className={styles.wrapperGroup35930}>
              <img
                className={styles.wrapperGroup35930Child}
                loading="lazy"
                alt=""
                src="/group-35930.svg"
              />
            </div>
            <img className={styles.frameChild} alt="" src="/star-2.svg" />
            <img className={styles.star05Icon} alt="" src="/star05.svg" />
            <img className={styles.cube02Icon} alt="" src="/cube02.svg" />
            <img className={styles.cube04Icon} alt="" src="/cube04.svg" />
            <div className={styles.wrapperGroup35933}>
              <img
                className={styles.wrapperGroup35933Child}
                alt=""
                src="/group-35933@2x.png"
              />
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.frameParent4}>
              <div className={styles.advatnagesParent}>
                <div className={styles.advatnages}>advatnages</div>
                <h1 className={styles.whyChooseUifry}>why choose Uifry?</h1>
              </div>
              <div className={styles.cleverNotificationsWrapper}>
                <h3 className={styles.cleverNotifications}>
                  clever notifications
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapperGroup35931Parent}>
          <div className={styles.wrapperGroup35931}>
            <img
              className={styles.wrapperGroup35931Child}
              alt=""
              src="/group-35931.svg"
            />
          </div>
          <p className={styles.arcuAtDictum}>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
          <div className={styles.wrapperGroup35935}>
            <img
              className={styles.wrapperGroup35935Child}
              alt=""
              src="/group-35935@2x.png"
            />
          </div>
          <div className={styles.onHold}>
            <div className={styles.onHoldChild} />
            <img
              className={styles.onHoldItem}
              loading="lazy"
              alt=""
              src="/rectangle-13@2x.png"
            />
            <div className={styles.onHoldInner}>
              <div className={styles.frameParent5}>
                <div className={styles.frameParent6}>
                  <div className={styles.wrapper}>
                    <b className={styles.b}>$560.00</b>
                  </div>
                  <div className={styles.onHold1}>On Hold</div>
                </div>
                <div className={styles.fromAdom}>From Adom</div>
              </div>
            </div>
          </div>
          <div className={styles.starParent}>
            <img className={styles.frameItem} alt="" src="/star-2.svg" />
            <div className={styles.wrapperGroup35937}>
              <img
                className={styles.wrapperGroup35937Child}
                alt=""
                src="/group-35937@2x.png"
              />
            </div>
            <div className={styles.frameParent7}>
              <img
                className={styles.frameInner}
                alt=""
                src="/group-35932@2x.png"
              />
              <div className={styles.frame}>
                <div className={styles.rectangle} />
                <div className={styles.frameParent8}>
                  <div className={styles.groupParent}>
                    <img
                      className={styles.groupIcon}
                      loading="lazy"
                      alt=""
                      src="/group@2x.png"
                    />
                    <div className={styles.tmWrapper}>
                      <b className={styles.tm}>TM</b>
                    </div>
                  </div>
                  <div className={styles.creditCardvisaTypewhiteWrapper}>
                    <img
                      className={styles.creditCardvisaTypewhite}
                      loading="lazy"
                      alt=""
                      src="/credit-cardvisa-typewhite.svg"
                    />
                  </div>
                </div>
                <div className={styles.cardnoParent}>
                  <div className={styles.cardno}>0000 8888 2222 3333</div>
                  <div className={styles.frameParent9}>
                    <div className={styles.validThruWrapper}>
                      <div className={styles.validThru}>VALID THRU</div>
                    </div>
                    <div className={styles.div}>07/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
