/* eslint-disable @next/next/no-img-element */
import MainLayout from "@/components/MainLayout"
import mockBooks from '../../data/books'
import { useRouter } from 'next/router'

export default function BookDetails() {
    // Checking the routes 
    const router = useRouter()
    const { id } = router.query;
    const bookId = parseInt(id, 10); // convert id to a number with base 10

    const book = mockBooks.find((book) => book.id === bookId);


    if (!book) {
        console.log(book)
        return (<MainLayout><div>Book not found</div></MainLayout>)
    }
    return (
        <MainLayout>
            <div>
                <img src={book.image} alt={book.title} />
                <h1>{book.title}</h1>
                <p>by {book.author}</p>
                <p>{book.description}</p>
            </div>
        </MainLayout>
    )
}