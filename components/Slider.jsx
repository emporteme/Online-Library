/* eslint-disable @next/next/no-img-element */
import books from '../mock/mockAPI'
import styles from '../styles/slider.module.scss'

export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);
    // Buttons prev and next
    const handlePrevClick = () => {
        if (activeIndex === 0) {
            setActiveIndex(books.length - 1);
        } else {
            setActiveIndex(activeIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (activeIndex === books.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(activeIndex + 1);
        }
    };
    return (
        <>
            This is Slider components
            <>
                <div className={styles.slider}>
                    {books.map((book) => (
                        <div key={book.id} className={styles.item}>
                            <img src={book.image} alt={book.title} />
                            <div>
                                <h3>{book.title}</h3>
                                <p>by {book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        </>
    )
}