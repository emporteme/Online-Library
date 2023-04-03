/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import styles from "../../styles/aboutUs.module.scss";

export default function AboutUs() {
    return (
        <MainLayout title="About Us | Online Library">
            <div className={styles["about-us"]}>
                <h1>About Us</h1>
                <p>
                    Welcome to Online Library, your one-stop platform for accessing a wide
                    range of books in digital format. Our mission is to provide readers
                    with an extensive collection of books spanning various genres,
                    languages, and topics, ensuring that everyone can find something they
                    love.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/aboutUs1.jpg" alt="aboutUs1" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>
                    Online Library was founded by a group of passionate book enthusiasts
                    who wanted to make reading more accessible and convenient. Our
                    easy-to-use platform allows you to browse, search, and read books
                    online or download them for offline reading. We strive to keep our
                    library up-to-date with the latest releases and timeless classics, so
                    you can always find something new and interesting to read.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/aboutUs2.jpg" alt="aboutUs2" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>
                    In addition to our vast collection of books, we also offer features
                    that enhance your reading experience, such as customizable font sizes,
                    styles, and background colors. We understand that everyone has
                    different preferences when it comes to reading, and our goal is to
                    create an environment that caters to those individual needs.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/aboutUs.gif" width="100%" height="100%"  alt="a gif" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>
                    We also value community engagement and encourage our users to share
                    their thoughts and recommendations with other readers. By fostering a
                    sense of connection and collaboration, we hope to create a space where
                    everyone can learn from each other and discover new books to enjoy.
                </p>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={styles.image}>
                    <img src="/aboutUs4.jpg" alt="aboutUs4" />
                </div>
                <div className={styles.dots}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>
                    We believe in the power of reading to inspire, educate, and transform
                    lives. Our goal is to make literature more accessible to everyone,
                    regardless of their background or location. Thank you for joining us
                    on this journey, and we hope you enjoy your experience with Online
                    Library.
                </p>
            </div>
        </MainLayout>
    );
}
