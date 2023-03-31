import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
//import { FaUser, FaBars } from "react-icons/fa";
//import SearchBar from "../components/SearchBar";
import { Logo } from '../components/Logo'
import styles from "../styles/header.module.scss";

export default function Header() {

    /* Code for headerActive class */

    const router = useRouter();

    /* Code for burger menu */

    const [showLinks, setShowLinks] = useState(false);
    const toggleShowLinks = () => setShowLinks(!showLinks);

    /* App */
    return (
        <nav className={styles.nav}>
            <div className={showLinks ? `${styles.burger} ${styles.active}` : `${styles.burger}`} onClick={toggleShowLinks}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <>
                <Logo />
            </>
            <>
                <div className={showLinks ? `${styles.links} ${styles.show}` : `${styles.links}`}>
                    <ul className="mainText">
                        <li className={router.pathname === '/' ? `${styles.activeHeader}` : ''}><Link href="/">Home</Link></li>
                        <li className={router.pathname === '/books' ? `${styles.activeHeader}` : ''}><Link href="/books">Books</Link></li>
                        <li className={router.pathname === '/recomendations' ? `${styles.activeHeader}` : ''}><Link href="/recomendations">Recomendations</Link></li>
                        <li className={router.pathname === '/reviews' ? `${styles.activeHeader}` : ''}><Link href="/reviews">Reviews</Link></li>
                        <li className={router.pathname === '/aboutUs' ? `${styles.activeHeader}` : ''}><Link href="/aboutUs">About us</Link></li>
                        <li className={router.pathname === '/contacts' ? `${styles.activeHeader}` : ''}><Link href="/contacts">Contacts</Link></li>
                    </ul>
                </div>
                <Link href={'/login'}>
                    <div className={router.pathname === '/login' ? `${styles.activeBtn} ${styles.btn}` : `${styles.btn}`} >
                        <div className="mainText">Login</div>
                    </div>
                </Link>
            </>


        </nav>
    );
}
