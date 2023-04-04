// Main imports
import Link from "next/link"
import { Logo } from '../components/Logo'
// Icon imports
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { SiGmail } from "react-icons/si"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
// Style imports
import styles from '../styles/footer.module.scss'
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Logo />
                    <div className={styles.slogan}>
                        Access your favorite books anytime, anywhere with our online library app. Browse through a vast collection of titles and genres, and discover new books to add to your reading list. With easy-to-use features and convenient access, reading has never been more accessible. Join our community of book lovers today!
                    </div>
                </div>
                <div className={styles.pageLinks}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/books'}>Books</Link>
                    <Link href={'/recomendations'}>Recomendations</Link>
                    <Link href={'/reviews'}>Reviews</Link>
                    <Link href={'/aboutUs'}>About Us</Link>
                    <Link href={'/contacts'}>Contacts</Link>
                </div>
                <div className={styles.mediaLinks}>
                    <a href={'https://t.me/emporteme'} target="_blank"><FaTelegramPlane />Telegram</a>
                    <a href={'https://instagram.com/emporteme?igshid=ZDdkNTZiNTM='} target="_blank"><FiInstagram />Instagram</a>
                    <a href={'https://www.linkedin.com/in/magzhan-karatayev-87126b243/'} target="_blank"><FaLinkedinIn />Linkedin</a>
                    <a href={'mailto:magzhan_volk@outlook.com'} target="_blank"><SiGmail />Gmail</a>
                </div>
                <div className={styles.contacts}>
                    <a href="tel:+77766860652">+7 (776) 686 06 52</a>
                    <a href="tel:+77766860653">+7 (776) 686 06 53</a>
                    <a href="mailto:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                    <a href="mailto:magzhan_volk@outlook.com">magzhan_volk@outlook.com</a>
                </div>

            </div>
            <div className={styles.line} />
            <div className={styles.copyright}>
                <div>
                    <AiOutlineCopyrightCircle />
                    <div className='mainText'>Copyright.</div>
                </div>
                <div>All rights reserved | 31.03.2023</div>
            </div>
        </div>
    )
}