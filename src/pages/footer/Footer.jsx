import styles from './footer.module.css'
import { Link } from 'react-scroll'
import Logo from '../../assets/images/logo.svg'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.message}>
                    <img src={Logo} alt="logo" />
                    <p>Crafting User Experiences with Passion and Precision</p>
                </div>

                <div className={styles.links}>
                    <div className={styles.linkSection}>
                        <h3>Quick Links</h3>
                        <div className={styles.linkContainer}>
                            {['About', 'Services', 'Experience', 'FAQS'].map((text, index) => (
                                <Link
                                    className={styles.link}
                                    key={index}
                                    to={text.toLowerCase()}
                                    smooth={true}
                                    duration={500}
                                >
                                    {text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.linkSection}>
                        <h3>Connect</h3>
                        <div className={styles.linkContainer}>

                            {[
                                {name: 'Mail', link: 'https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshash.az22@gmail.com'},
                                {name: "Twitter", link: 'https://twitter.com/AshutoshPurush1'},
                                {name: "Linkedin", link: 'https://www.linkedin.com/in/ashutosh-purushottam-370096228/'},
                                {name: "Instagram", link: 'https://www.instagram.com/stfu__.ash/profilecard/?igsh=ZGppcTEzNzJrdm53'}
                            ].map((text, index) => (
                                <a target='_blank' className={styles.link} key={index} href={text.link}>{text.name}</a>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <h1 className={styles.footerText}>Ashutosh Purushottam</h1>
        </div>
    )
}

export default Footer