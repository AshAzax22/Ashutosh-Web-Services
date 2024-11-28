import styles from './home.module.css';
import Illustration1 from '../../assets/images/illustration_1.svg';
import Initial from '../../assets/images/initial.svg';
import Avatar from '../../assets/images/avatar.svg'
import Arrow from '../../assets/images/arrow.svg'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <img className={`${styles.illustration1} ${styles.illustration}`} src={Illustration1} alt="illustration" />
            <img className={`${styles.initial} ${styles.illustration}`} src={Initial} alt="initial" />

            <div className={styles.homeContent}>
                <a target='_blank' href="https://www.instagram.com/stfu__.ash/profilecard/?igsh=ZGppcTEzNzJrdm53"><img src={Avatar} alt="avatar" />@stfu__.ash</a>
                <h1>Pixels with Purpose, Websites that <span className={styles.contentEmphasis}>Wow</span>.</h1>
                <h3>Bringing bold designs and seamless experiences to life. Ready to <span className={styles.contentEmphasis}>level up</span> your online presence?</h3>

                <div className={styles.buttonContainer}>
                    <Link className={styles.heroContactLink} to="contact" smooth={true} duration={500}>
                        Hire Me Already<img src={Arrow} alt="arrow" />
                    </Link>
                    <p>🔥Designs so good, they wink.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;