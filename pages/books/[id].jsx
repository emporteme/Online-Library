/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout";
import mockBooks from '../../data/books';
import { useRouter } from 'next/router';
import PDFViewer from '../../components/PDFViewer';
import styles from '../../styles/BookDetail.module.scss';

const getBookById = (id) => {
    return mockBooks.find((book) => book.id.toString() === id);
};

const BookDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const book = getBookById(id);

    if (!book) {
        return (
            <MainLayout extraSegments={["Not Found"]}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', textAlign: 'center' }}>
                    Book not found
                </div>
            </MainLayout>
        )
    }

    const fileUrl = `/${book.fileUrl}`;

    return (
        <MainLayout bookTitle={book.title} extraSegments={[book.title]} skipLastSegment={true}>
            <div className={styles['book-container']}> {/* Change this line */}
                <img src={book.image} alt={book.title} />
                <h1>{book.title}</h1>
                <p>by {book.author}</p>
                <p>{book.description}</p>
                <PDFViewer file={book.fileUrl} />
            </div>
        </MainLayout>
    );
};

export default BookDetail;
