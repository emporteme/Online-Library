/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'
import mockBooks from '../mock/books'
import styles from '../styles/searchBar.module.scss'

export default function SearchBar() {

    // Code for search
    const [search, setSearch] = useState('')  // Search field
    console.log(search)

    return (
        <>
            <div className={styles.unik}>
                <div className={styles.search}>
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search here...' />
                </div>
                <div className={styles.list}>
                    {mockBooks.filter((API) => {
                        return (
                            API
                                .title
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            API
                                .author
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            API
                                .description
                                .toLowerCase()
                                .includes(search.toLowerCase()) ||
                            API
                                .genre
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        {/*search.toLowerCase() === ''
							? API
						: API.unik_name.toLowerCase().includes(search);*/}
                    }).map((book) => {
                        console.log(book)
                        return (
                            <div key={book.id} className={styles['best-sellers-item']}>
                                <img src={book.image} alt={book.title} />
                                <div className={styles['best-sellers-item-details']}>
                                    <h3>{book.title}</h3>
                                    <p>by {book.author}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}