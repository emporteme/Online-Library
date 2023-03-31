/* eslint-disable @next/next/no-img-element */
// Carousel
import React from 'react';
import Link from 'next/link';
import styles from '../styles/reviews.module.scss'


export default function Reviews({ reviews }) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [transitionEnabled, setTransitionEnabled] = React.useState(true);
    const carouselRef = React.useRef(null);

    const handleTransitionEnd = () => {
        setTransitionEnabled(true);
    };

    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
            setTransitionEnabled(false);
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
        }
    };

    const handleNextClick = () => {
        if (currentSlide < reviews.length - 1) {
            setCurrentSlide(currentSlide + 1);
            setTransitionEnabled(false);
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
    };

    return (
        <>
            <div style={{ margin: '3rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="subHeader">Reviews</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
                        <>
                            <div className={styles['best-sellers-show-all']}>
                                <Link href="/reviews">
                                    <>Show All</>
                                </Link>
                            </div>
                        </>
                        <>
                            <div className={styles['best-sellers-navigation']}>
                                <button disabled={currentSlide === 0} onClick={handlePrevClick}>
                                    &lt;
                                </button>
                                <button
                                    disabled={currentSlide === reviews.length - 1}
                                    onClick={handleNextClick}
                                >
                                    &gt;
                                </button>
                            </div>
                        </>
                    </div>
                </div>
                <div className={styles['best-sellers']}>
                    <div
                        className={styles['best-sellers-carousel']}
                        onTransitionEnd={handleTransitionEnd}
                        ref={carouselRef}
                    >
                        {reviews.map((review) => {
                            console.log(review)
                            return (
                                <div key={review.id} className={styles.review}>
                                    <div className={styles.up}>
                                        <div className={styles.left}>
                                            <div className={styles.icon}>
                                                <img src="/book-girl.png" alt="book-girl" />
                                            </div>
                                            <div className="mainText">{review.username}</div>
                                        </div>
                                        <div className={styles.rating}>rating: {review.rating}</div>
                                    </div>
                                    <div className="subText">{review.comment}</div>
                                    <div className={styles.date}>{review.date}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}