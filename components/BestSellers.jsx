/* eslint-disable @next/next/no-img-element */
// Carousel
import React from 'react';
import Link from 'next/link';
import styles from '../styles/bestSellers.module.scss'

const BestSellers = ({ books }) => {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    // const [isDragging, setIsDragging] = React.useState(false);
    // const [startX, setStartX] = React.useState(0);
    // const [translation, setTranslation] = React.useState(0);
    const [transitionEnabled, setTransitionEnabled] = React.useState(true);

    // const handleMouseDown = (event) => {
    //     setIsDragging(true);
    //     setStartX(event.pageX || event.touches[0].pageX);
    //     setTransitionEnabled(false);
    // };

    // const handleMouseMove = (event) => {
    //     if (isDragging) {
    //         const currentX = event.pageX || event.touches[0].pageX;
    //         const differenceX = currentX - startX;
    //         setTranslation(translation + differenceX);
    //         setStartX(currentX);
    //     }
    // };

    // const handleMouseUp = () => {
    //     setIsDragging(false);
    //     const threshold = 100;
    //     if (translation > threshold) {
    //         setCurrentSlide(currentSlide - 1);
    //     } else if (translation < -threshold) {
    //         setCurrentSlide(currentSlide + 1);
    //     }
    //     setTranslation(0);
    //     setTransitionEnabled(true);
    // };

    const handleTransitionEnd = () => {
        setTransitionEnabled(true);
    };

    const handlePrevClick = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleNextClick = () => {
        if (currentSlide < books.length - 4) {
            setCurrentSlide(currentSlide + 1);
        }
    };


    return (
        <>
            <>
            <div className='subHeader'>Best sellers</div>
            </>
            <>
                <div className={styles['best-sellers']}>
                    <div
                        className={styles['best-sellers-carousel']}
                        // onMouseDown={handleMouseDown}
                        // onMouseMove={handleMouseMove}
                        // onMouseUp={handleMouseUp}
                        // onTouchStart={handleMouseDown}
                        // onTouchMove={handleMouseMove}
                        // onTouchEnd={handleMouseUp}
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `translateX(${(-currentSlide * 25)}%)`,
                            transition: transitionEnabled ? 'transform 0.5s ease' : 'none'
                        }}
                    >
                        {books.map((book) => (
                            <div key={book.id} className={styles['best-sellers-item']} >
                                <img src={book.image} alt={book.title} />
                                <div className={styles['best-sellers-item-details']}>
                                    <h3>{book.title}</h3>
                                    <p>by {book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles['best-sellers-navigation']}>
                        <button disabled={currentSlide === 0} onClick={handlePrevClick}>
                            &lt;
                        </button>
                        <button disabled={currentSlide === books.length - 4} onClick={handleNextClick}>
                            &gt;
                        </button>
                    </div>
                    <div className={styles['best-sellers-show-all']}>
                        <Link href="/books?filter=bestsellers">
                            <>Show All</>
                        </Link>
                    </div>
                </div>
            </>
        </>
    );
};

export default BestSellers;
