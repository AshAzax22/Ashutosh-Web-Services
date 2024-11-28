import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleSetActive = (index) => {
    setActiveLink(index);
  };

  return (
    <div className={styles.navContainer}>
      {['Home', 'About', 'Services', 'Experience', 'Contact', 'FAQs'].map((text, index) => (
        <Link
          key={index}
          className={`${styles.navLink} ${activeLink === index ? styles.active : ''}`}
          onClick={() => handleSetActive(index)}
          to={text.toLowerCase()}
          smooth={true}
          duration={500}
          spy={true}
          onSetActive={() => handleSetActive(index)}
        >
          {text}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;