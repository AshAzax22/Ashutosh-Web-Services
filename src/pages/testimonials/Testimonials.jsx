import styles from './testimonials.module.css'
import Reading from '../../assets/images/reading_illustration.svg'

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContianer}>
      <div className={styles.clientFeedback}>
        feedback
      </div>
      <div className={styles.testimonialsTextSection}>
        <h1 className={styles.heading}>Client Love</h1>
        <h2 className={styles.subHeading}>Here&apos;s What My Clients Are Saying</h2>
        <p className={styles.description}>Over the course of my design journey, I&apos;ve had the privilege to work with passionate founders, innovative developers, and visionary business owners who&apos;ve trusted me to bring their ideas to life. I&apos;m proud to deliver more than just visually appealing designs—I strive to create solutions that make a real difference for my clients. Here&apos;s what a few of them have to say about our collaborations, the impact we achieved, and the creative process that got us there.</p>
        <img className={styles.illustration} src={Reading} alt="illustration" />
      </div>
    </div>
  )
}

export default Testimonials