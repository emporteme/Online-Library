import MainLayout from "@/components/MainLayout"
import mockBooks from "@/data/books"


export default function Recomendations() {
    return (
        <MainLayout>
            MOCK PAGE
            {mockBooks.map((book) => {
                return (
                    <div key={book.id}>
                        {book.title}
                    </div>
                )
            })}
        </MainLayout>
    )
}