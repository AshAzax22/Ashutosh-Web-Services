import styles from "./contact.module.css";
import Input from "../../components/input/Input";
import { useState } from "react";
import ButtonIcon from "../../assets/images/web_design_icon.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Instagram from "../../assets/images/instagram.svg";
import Avatar from "../../assets/images/avatar.svg";

const Contact = () => {
  const [credDetails, setCredDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [load, setLoad] = useState(false);

  const handleInputChange = (e) => {
    setCredDetails({ ...credDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData();
  };

  const submitData = async () => {
    setLoad(true);
    try {
      const data = {
        name: credDetails.name,
        email: credDetails.email,
        message: credDetails.message,
      };
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbygQIcuNBtkynSeQNNIBumA4nRXNuo2bVZYMEOMzqjn3caaiO3gmshA4UPv9GBAaeiV/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    } finally {
      setLoad(false);
      setCredDetails({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactSection}>
        <div className={styles.textSection}>
          <h1 className={styles.heading}>Let&apos;s connect</h1>
          <h2 className={styles.subHeading}>Drop a Note</h2>
          <p className={styles.description}>
            I&apos;m always excited to collaborate on new ideas and creative
            projects! No matter the scale, let&apos;s chat about how we can
            bring your vision to life.
          </p>
          <iframe
            className={styles.beatingHeart}
            src="https://lottie.host/embed/cfdb2a6c-f214-4a49-bd9f-18f78e3dfa0f/p1eb4HL9l4.json"
          ></iframe>
        </div>
        <div className={styles.formContainer}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              value={credDetails.name}
              type="text"
              labelText="Name"
              name="name"
              placeholder="Who should I thank for reaching out?"
              onChange={(e) => handleInputChange(e)}
            />
            <Input
              value={credDetails.email}
              type="email"
              labelText="Email"
              name="email"
              placeholder="Where should I send my reply?"
              onChange={(e) => handleInputChange(e)}
            />
            <Input
              value={credDetails.message}
              type="text"
              labelText="Message"
              name="message"
              placeholder="Tell me a bit about your peoject or how I can help?"
              onChange={(e) => handleInputChange(e)}
            />
            <p>
              The more details, the better! No need to hold back on your big
              ideas.
            </p>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={load}
            >
              {load ? "Loading..." : "Let's Make Magic Happen!"}
              {!load && <img src={ButtonIcon} alt="icon" />}
            </button>
          </form>
          <div className={styles.separator}>
            <hr />
            <p>or</p>
          </div>
          <div className={styles.socialMedia}>
            <a target="_blank" href="https://wa.me/918917336247">
              <img src={Whatsapp} alt="whatsapp" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ashutosh-purushottam-370096228/"
            >
              <img src={Linkedin} alt="linkedin" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/stfu__.ash/profilecard/?igsh=ZGppcTEzNzJrdm53"
            >
              <img src={Instagram} alt="instagram" />
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshash.az22@gmail.com"
            >
              <img src={Avatar} alt="avatar" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
