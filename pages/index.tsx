import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import SeventhPage from "../components/seventh-page";
import GroupComponent from "../components/group-component";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const AppLandingPage: NextPage = () => {
  return (
    <div className={styles.appLandingPage}>
      <FrameComponent3 />
      <div className={styles.aParent}>
        <b className={styles.a}>a</b>
        <FrameComponent2 />
      </div>
      <FrameComponent1 />
      <div className={styles.appLandingPageInner}>
        <div className={styles.frameParent}>
          <div className={styles.fullyCustomizableWrapper}>
            <h3 className={styles.fullyCustomizable}>fully customizable</h3>
          </div>
          <p className={styles.arcuAtDictum}>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
      <div className={styles.appLandingPageChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.testimonialWrapper}>
              <div className={styles.testimonial}>testimonial</div>
            </div>
            <h1 className={styles.whatOurUsers}>
              what our users say about us?
            </h1>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.theBestFinancialAccountingParent}>
              <h3 className={styles.theBestFinancial}>
                the best financial accounting app ever!
              </h3>
              <blockquote className={styles.arcuAtDictum1}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.”
              </blockquote>
            </div>
          </div>
          <div className={styles.nickJonasWrapper}>
            <b className={styles.nickJonas}>nick jonas</b>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.faqParent}>
          <div className={styles.faq}>faq</div>
          <h1 className={styles.frequentlyAskedQuestions}>
            Frequently asked questions
          </h1>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <h3 className={styles.theBestFinancial1}>
                the best financial accounting app ever!
              </h3>
              <p className={styles.arcuAtDictum2}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <h3 className={styles.theBestFinancial2}>
                the best financial accounting app ever!
              </h3>
              <p className={styles.arcuAtDictum3}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <h3 className={styles.theBestFinancial3}>
                the best financial accounting app ever!
              </h3>
              <p className={styles.arcuAtDictum4}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.rectangleParent1}>
              <div className={styles.rectangleDiv} />
              <h3 className={styles.theBestFinancial4}>
                the best financial accounting app ever!
              </h3>
              <p className={styles.arcuAtDictum5}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild1} />
              <h3 className={styles.theBestFinancial5}>
                the best financial accounting app ever!
              </h3>
              <p className={styles.arcuAtDictum6}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
            <div className={styles.rectangleParent3}>
              <div className={styles.frameChild2} />
              <h3 className={styles.theBestFinancial6}>
                the best financial accounting app ever!
              </h3>
              <p className={styles.arcuAtDictum7}>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.seventhpageWrapper}>
        <SeventhPage />
      </div>
      <main className={styles.wrapperGroup35897Parent}>
        <div className={styles.wrapperGroup35897}>
          <img
            className={styles.wrapperGroup35897Child}
            loading="lazy"
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <div className={styles.wrapperGroup1000002356}>
          <img
            className={styles.wrapperGroup1000002356Child}
            alt=""
            src="/group-35897.svg"
          />
        </div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-4.svg" />
        <GroupComponent />
        <div className={styles.wrapperGroup35899}>
          <img
            className={styles.wrapperGroup35899Child}
            loading="lazy"
            alt=""
            src="/group-35899.svg"
          />
        </div>
        <div className={styles.wrapperGroup35896}>
          <img
            className={styles.wrapperGroup35896Child}
            loading="lazy"
            alt=""
            src="/group-35896.svg"
          />
        </div>
        <img className={styles.rectangleIcon1} alt="" src="/rectangle@2x.png" />
        <img className={styles.groupIcon} alt="" src="/group-3.svg" />
        <img
          className={styles.starIcon}
          loading="lazy"
          alt=""
          src="/star-8.svg"
        />
        <div className={styles.wrapperFrame1Parent}>
          <div className={styles.wrapperFrame1}>
            <img
              className={styles.wrapperFrame1Child}
              alt=""
              src="/frame-1@2x.png"
            />
          </div>
          <img
            className={styles.iphone13ProFrontIcon}
            alt=""
            src="/iphone13profront@2x.png"
          />
        </div>
        <img
          className={styles.iphone13ProFrontIcon1}
          alt=""
          src="/iphone13profront-1@2x.png"
        />
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
        <img
          className={styles.brandicon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className={styles.frameChild3}
          loading="lazy"
          alt=""
          src="/group-28@2x.png"
        />
        <div className={styles.frameParent3}>
          <img
            className={styles.frameChild4}
            loading="lazy"
            alt=""
            src="/group-27@2x.png"
          />
          <img
            className={styles.frameChild5}
            loading="lazy"
            alt=""
            src="/group-29@2x.png"
          />
          <img
            className={styles.frameChild6}
            loading="lazy"
            alt=""
            src="/group-30@2x.png"
          />
          <img
            className={styles.frameChild7}
            loading="lazy"
            alt=""
            src="/group-31@2x.png"
          />
        </div>
        <div className={styles.wrapperGroup1000002356Parent}>
          <div className={styles.wrapperGroup10000023561}>
            <img
              className={styles.wrapperGroup1000002356Item}
              loading="lazy"
              alt=""
              src="/group-1000002356-1.svg"
            />
          </div>
          <div className={styles.wrapperGroup1000002332}>
            <img
              className={styles.wrapperGroup1000002332Child}
              alt=""
              src="/group-1000002332.svg"
            />
          </div>
        </div>
        <img
          className={styles.frameChild8}
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className={styles.frameChild9}
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className={styles.frameChild10}
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img
          className={styles.frameChild11}
          loading="lazy"
          alt=""
          src="/star-5.svg"
        />
        <img className={styles.frameChild12} alt="" src="/star-2.svg" />
        <img
          className={styles.frameChild13}
          loading="lazy"
          alt=""
          src="/star-2.svg"
        />
        <img
          className={styles.frameChild14}
          loading="lazy"
          alt=""
          src="/group-35899-1.svg"
        />
        <img
          className={styles.frameChild15}
          loading="lazy"
          alt=""
          src="/group-35899-2.svg"
        />
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <img
          className={styles.vectorIcon1}
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
        <img
          className={styles.frameIcon1}
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
        <img
          className={styles.frameIcon2}
          loading="lazy"
          alt=""
          src="/frame-3.svg"
        />
      </main>
      <div className={styles.frameParent4}>
        <FrameComponent />
        <footer className={styles.lowerWrapper}>
          <div className={styles.lower}>
            <div className={styles.copyright2022Uifrycom}>
              Copyright 2022 uifry.com all rights reserved
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppLandingPage;
