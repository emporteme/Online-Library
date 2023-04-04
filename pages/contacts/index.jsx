/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/components/MainLayout";
import styles from "../../styles/contact.module.scss";

export default function Contacts() {
    return (
        <MainLayout title="Contact Us | Online Library">
            <div className={styles["contact-us"]}>
                <h1>Contact Us</h1>
                <p>
                    Our team at Online Library is always available to help you with any inquiries or concerns you may have. Whether you need assistance with navigating our platform, downloading books, or finding a particular title, we're here to help. Please don't hesitate to get in touch with us through the contact information provided below.
                </p>
                <div className={styles["contact-info"]}>
                    <div className={styles["contact-method"]}>
                        <strong>Email:</strong>
                        <p>magzhan_volk@outlook.com</p>
                    </div>
                    <div className={styles["contact-method"]}>
                        <strong>Phone:</strong>
                        <p>+7 (776) 667 66 77</p>
                    </div>
                    <div className={styles["contact-method"]}>
                        <strong>Address:</strong>
                        <p>Zhelisbayeba 69, Taraz, Kazakhstan</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <p>
                    You can also stay updated on the latest news, releases, and promotions by connecting with us on the following social media platforms:
                </p>
                <div className={styles["social-links"]}>
                    <a href="https://www.facebook.com/emporteme" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com/emporteme" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com/emporteme" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com/company/emporteme" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://t.me/emporteme" target="_blank" rel="noopener noreferrer">Telegram</a>
                </div>
            </div>
        </MainLayout>
    );
}
