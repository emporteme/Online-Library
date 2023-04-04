/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

// Block
import styles from '../styles/discount.module.scss'
import Link from 'next/link'

// export
export default function Discount() {

    // return
    return (
        <>
            <div className={styles.discount}>
                <div className={styles.text}>
                    <div className='mainHeader'>☕️ Get 20% discount 🍩</div>
                    <div className='mainText' style={{ marginTop: '1rem' }}>Share the joy of reading with friends! Invite them to join "Library" and you'll get 20% off your annual subscription. They'll receive 10% off their first subscription too. Let's build a community of book lovers together!</div>
                    <Link href={'/login'}>
                        <div className={styles.btn}>Get discount</div>
                    </Link>
                </div>
                <div className={styles.image}>
                    <img src="/book-girl.png" alt="book-girl2" />
                </div>
            </div>
        </>
    )
}