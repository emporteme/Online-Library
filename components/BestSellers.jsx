/* eslint-disable @next/next/no-img-element */
// Carousel
import React from 'react';
import Link from 'next/link';
import styles from '../styles/bestSellers.module.scss';

const BestSellers = ({ books }) => {
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
        if (currentSlide < books.length - 1) {
            setCurrentSlide(currentSlide + 1);
            setTransitionEnabled(false);
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
        }
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="subHeader">Best sellers</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>
                    <>
                        <div className={styles['best-sellers-show-all']}>
                            <Link href="/books">
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
                                disabled={currentSlide === books.length - 1}
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
                    {books.map((book) => {
                        console.log(book)
                        return (
                            <Link href={`/books/${book.id}`} key={book.id} >
                                <div className={styles['best-sellers-item']}>
                                    <img src={book.image} alt={book.title} />
                                    <div className={styles['best-sellers-item-details']}>
                                        <h3>{book.title}</h3>
                                        <p>by {book.author}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}

                </div>
            </div>
        </>
    );
};

export default BestSellers;
