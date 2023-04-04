import MainLayout from "@/components/MainLayout"
import mockBooks from "@/data/books"
import Link from "next/link"

export default function Recomendations() {
    return (
        <MainLayout>
            <div className="subHeader" style={{ marginBottom: '0.5rem' }}>Recomended books:</div>
            {mockBooks.map((book) => {
                return (
                    <Link href={`/books/${book.id}`} key={book.id} >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row', padding: '1rem' }}>
                                <b> # {book.id} </b>
                                <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>
                                    {book.title} -  <i style={{ fontWeight: '500', fontSize: '1.1rem' }}>{book.author}</i>
                                    <div style={{ fontWeight: '400', fontSize: '1rem', marginTop: '0.5rem' }}>
                                        {book.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </MainLayout>
    )
}