/* eslint-disable @next/next/no-img-element */
// Carousel
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/reviews.module.scss'


export default function Reviews({ reviews }) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const carouselRef = useRef(null);

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

    // Add a touchStart event listener
    const handleTouchStart = (e) => {
        const touchX = e.touches[0].clientX;
        const scrollLeft = carouselRef.current.scrollLeft;
        carouselRef.current.ontouchmove = (e) => {
            const newX = e.touches[0].clientX;
            const diff = touchX - newX;
            carouselRef.current.scrollLeft = scrollLeft + diff;
        };
    };

    // Add a touchEnd event listener
    const handleTouchEnd = () => {
        carouselRef.current.ontouchmove = null;
    };

    // Add a mouseDown event listener
    const handleMouseDown = (e) => {
        const mouseX = e.clientX;
        const scrollLeft = carouselRef.current.scrollLeft;
        carouselRef.current.onmousemove = (e) => {
            const newX = e.clientX;
            const diff = mouseX - newX;
            carouselRef.current.scrollLeft = scrollLeft + diff;
        };
    };

    // Add a mouseUp event listener
    const handleMouseUp = () => {
        carouselRef.current.onmousemove = null;
    };

    useEffect(() => {
        const carouselElement = carouselRef.current;
        carouselElement.addEventListener('touchstart', handleTouchStart);
        carouselElement.addEventListener('touchend', handleTouchEnd);
        carouselElement.addEventListener('mousedown', handleMouseDown);
        carouselElement.addEventListener('mouseup', handleMouseUp);

        return () => {
            carouselElement.removeEventListener('touchstart', handleTouchStart);
            carouselElement.removeEventListener('touchend', handleTouchEnd);
            carouselElement.removeEventListener('mousedown', handleMouseDown);
            carouselElement.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    return (
        <>
            <div style={{ margin: '3rem 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="subHeader">Reviews</div>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
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
                                <Link href={'/reviews'} key={review.id}>
                                    <div className={styles.review}>
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
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}