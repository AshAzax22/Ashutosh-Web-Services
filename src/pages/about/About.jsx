import styles from "./about.module.css";
import Arrow from "../../assets/images/arrow_white.svg";
import Mypic from "../../assets/images/my_pic.jpg";
import Medal from "../../assets/images/medal_Icon.svg";
import Achievement from "../../assets/images/achievement_Icon.svg";
import Happy from "../../assets/images/happy_Icon.svg";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutSection}>
        <div className={styles.content}>
          <h1 className={styles.heading}>About me</h1>
          <h2 className={styles.subHeading}>
            The Design Whiz You&apos;ve Been Waiting For.
          </h2>
          <p className={styles.introduction}>
            Hey there! I&apos;m <span>Ashutosh</span>, a UI/UX designer and web
            wizard with a knack for blending creativity and strategy. I believe
            great design isn&apos;t just eye candy—it&apos;s a powerful tool to
            help brands stand out and connect. Whether it&apos;s crafting an
            intuitive user experience or breathing life into bold, pixel-perfect
            visuals, I&apos;m here to make your brand unforgettable.
          </p>
          <p className={styles.funFact}>
            Fun Fact: &quot;Part coffee addict, part pixel perfectionist—100%
            committed to turning your vision into reality.&quot;
          </p>
          <div className={styles.skills}>
            <h3 className={styles.skillHeading}>What I Bring to the Table</h3>
            <div className={styles.list}>
              <p>Wireframing</p>
              <p>User Interface (UI) Design</p>
              <p>User Experience (UX) Research</p>
              <p>Figma</p>
              <p>Interaction Design</p>
              <p>Usability Testing</p>
              <p>Master of Dad Jokes</p>
            </div>
          </div>
        </div>
        <div className={styles.personalImage}>
          <img className={styles.mypic} src={Mypic} alt="my image" />
          <p>Don&apos;t get flattered already</p>
          <a
            href="https://ashportfolio-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.arrow} src={Arrow} alt="arrow" />
          </a>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <img src={Medal} alt="icon" />
          <div className={styles.statContent}>
            <p className={styles.rating}>6+</p>
            <p className={styles.title}>projects accomplished</p>
          </div>
        </div>
        <div className={styles.stat}>
          <img src={Achievement} alt="icon" />
          <div className={styles.statContent}>
            <p className={styles.rating}>97%</p>
            <p className={styles.title}>success rate</p>
          </div>
        </div>
        <div className={styles.stat}>
          <img src={Happy} alt="icon" />
          <div className={styles.statContent}>
            <p className={styles.rating}>20+</p>
            <p className={styles.title}>happy clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
