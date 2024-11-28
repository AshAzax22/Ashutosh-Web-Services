import styles from './service.module.css'
import WebDesignIcon from '../../assets/images/web_design_icon.svg'
import MobileDesignIcon from '../../assets/images/mobile_design_icon.svg'
import StylingIcon from '../../assets/images/styling_icon.svg'
import WebDesign from '../../assets/images/webDesign.png'
import MobileDesign from '../../assets/images/mobileDesign.png'
import Styling from '../../assets/images/prototyping.png'

const Services = () => {
  return (
    <div className={styles.serviceContainer}>
      <h1 className={styles.heading}>Services</h1>
      <h2 className={styles.subHeading}>Your Design Needs. My Solutions.</h2>
      <p className={styles.description}>I craft engaging, user-focused web and UI designs that not only look sleek but work seamlessly across all devices. From smooth interfaces to striking layouts, I&apos;m here to make your digital presence unforgettable.</p>

      <div className={styles.services}>
        <div className={styles.service}>

          <div className={styles.serviceImageContainer}>
            <img className={styles.serviceImage} src={WebDesign} alt="Web Design" />
          </div>
          <div className={styles.serviceContent}>
            <div>
              <p className={styles.title}>UI & Web Design</p>
              <p className={styles.subtitle}>Creating Stunning Digital Spaces</p>
            </div>
            <img src={WebDesignIcon} alt="icon" />
          </div>
        </div>

        <div className={styles.service}>

          <div className={styles.serviceImageContainer}>
            <img className={styles.serviceImage} src={MobileDesign} alt="Mobile Design" />
          </div>

          <div className={styles.serviceContent}>
            <div>
              <p className={styles.title}>Mobile App Design</p>
              <p className={styles.subtitle}>Designing Experiences Users Love</p>
            </div>
            <img src={MobileDesignIcon} alt="icon" />
          </div>

        </div>

        <div className={styles.service}>

          <div className={styles.serviceImageContainer}>
            <img className={styles.serviceImage} src={Styling} alt="Visual Styling" />
          </div>

          <div className={styles.serviceContent}>
            <div>
              <p className={styles.title}>Prototyping & Visual Styling</p>
              <p className={styles.subtitle}>Bringing Ideas to Life with Flair</p>
            </div>
            <img src={StylingIcon} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services