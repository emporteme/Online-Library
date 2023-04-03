/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout"
import mockBooks from '../../data/books'
import { useRouter } from 'next/router'
// PDF
import PDFViewer from '../../components/PDFViewer';

const getBookById = (id) => {
    return mockBooks.find((book) => book.id.toString() === id);
};

const BookDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const book = getBookById(id);

    if (!book) {
        return <MainLayout>Book not found</MainLayout>;
    }

    const fileUrl = `/${book.fileUrl}`;

    return (
        <MainLayout>
            <div>
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

{/* <MainLayout>
<div>
    <img src={book.image} alt={book.title} />
    <h1>{book.title}</h1>
    <p>by {book.author}</p>
    <p>{book.description}</p>
</div>
</MainLayout> */}