/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/searchBar.module.scss";

export default function SearchBar({ books }) {
    const [search, setSearch] = useState("");

    const filteredBooks = books.filter((book) => {
        return (
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase()) ||
            book.description.toLowerCase().includes(search.toLowerCase()) ||
            book.genre.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <>
            <div className={styles.unik}>
                <div className={styles.search}>
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here..."
                    />
                </div>
                <div className={styles.list}>
                    {filteredBooks.map((book) => {
                        return (
                            <Link href={`/books/${book.id}`} key={book.id}>
                                <div className={styles["best-sellers-item"]}>
                                    <img src={book.image} alt={book.title} />
                                    <div className={styles["best-sellers-item-details"]}>
                                        <h3>{book.title}</h3>
                                        <p>by {book.author}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
