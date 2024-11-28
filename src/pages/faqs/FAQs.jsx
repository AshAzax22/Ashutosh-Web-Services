import styles from './faqs.module.css'
import { useState } from 'react';
import Dropdown from '../../assets/images/dropdown.svg';

const FAQs = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What's your design process like?",
            answer: "My process starts with understanding your vision and goals. I then move to research, brainstorming, wireframes, and high-fidelity designs. You'll get to review and provide feedback at each step to ensure the final result aligns with your expectations."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary depending on scope, but a small website might take 2-3 weeks, while a full app design could be 4-8 weeks. We'll agree on a timeline up front!"
        },
        {
            question: "What do you need from me to start?",
            answer: "A clear idea of your goals, any brand materials (like logos or color schemes), and inspiration or references you love. The more insights, the better the design outcome!"
        },
        {
            question: "Do you offer revisions?",
            answer: "Absolutely! I include a set number of revisions in each project to ensure you're completely satisfied. Additional revisions can be accommodated if needed."
        },
        {
            question: "Can you help with development too?",
            answer: "While my focus is on design, I can collaborate with your developers or recommend reliable contacts for development. I ensure all designs are developer-friendly for a smooth handoff."
        },
    ];

    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqTextSection}>
                <h1 className={styles.heading}>Your Questions, Answered</h1>
                <h2 className={styles.subHeading}>Everything You Need to Know Before We Begin</h2>
                <p className={styles.description}>Wondering how the process works, what&apos;s included, or what to expect along the way? I&apos;ve gathered answers to the most common questions clients ask to make sure you feel confident, informed, and excited about working together. If there&apos;s anything else you&apos;re curious about, just ask!</p>
            </div>

            <div className={styles.faqsSection}>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.question}>
                            {faq.question}
                            <img src={Dropdown} alt="dropdown icon" className={styles.dropdownIcon} />
                        </div>
                        <div className={styles.answer}>
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQs