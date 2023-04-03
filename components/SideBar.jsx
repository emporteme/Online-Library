import styles from '../styles/sideBar.module.scss'
import { useState } from 'react';
import mockBooks from '../data/books'


export default function SideBar({ onFilterChange }) {

    // Taking props from books page
    const handleCheckboxChange = (type, value, isChecked) => {
        if (isChecked) {
            onFilterChange(type, (prev) => [...prev, value]);
        } else {
            onFilterChange(type, (prev) => prev.filter((item) => item !== value));
        }
    };

    // ...


    // Code for search
    const [search, setSearch] = useState('')  // Search field
    console.log(search)

    // Authors
    const [isAuthorDropdownOpen, setIsAuthorDropdownOpen] = useState(false);

    const toggleAuthorDropdown = () => {
        setIsAuthorDropdownOpen(!isAuthorDropdownOpen);
    };

    // Titles
    const [isTitleDropdownOpen, setIsTitleDropdownOpen] = useState(false);

    const toggleTitleDropdown = () => {
        setIsTitleDropdownOpen(!isTitleDropdownOpen);
    };

    // Genres
    const [isGenreDropdownOpen, setIsGenreDropdownOpen] = useState(false);

    const toggleGenreDropdown = () => {
        setIsGenreDropdownOpen(!isGenreDropdownOpen);
    };


    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.filters}>
                    <div className='subHeader'>Filter</div>
                    <div className={styles.filter}>
                        <div className={styles.filterTitle} onClick={toggleAuthorDropdown}>
                            Authors
                            <span
                                className={
                                    isAuthorDropdownOpen
                                        ? styles.filterTitleIconOpen
                                        : styles.filterTitleIconClosed
                                }
                            />
                        </div>
                        {isAuthorDropdownOpen && (
                            <div className={styles.dropdown}>
                                <input
                                    type="text"
                                    placeholder="Search authors"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className={styles.checkboxGroup}>
                                    {mockBooks
                                        .filter((API) => {
                                            return API.author.toLowerCase().includes(search.toLowerCase());
                                        })
                                        .map((book) => {
                                            console.log(book)
                                            return (
                                                <div key={book.id}>
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            onChange={(e) =>
                                                                handleCheckboxChange("author", book.author, e.target.checked)
                                                            }
                                                        />
                                                        <span>{book.author}</span>
                                                    </label>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filter}>
                        <div className={styles.filterTitle} onClick={toggleTitleDropdown}>
                            Titles
                            <span
                                className={
                                    isTitleDropdownOpen
                                        ? styles.filterTitleIconOpen
                                        : styles.filterTitleIconClosed
                                }
                            />
                        </div>
                        {isTitleDropdownOpen && (
                            <div className={styles.dropdown}>
                                <input
                                    type="text"
                                    placeholder="Search titles"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className={styles.checkboxGroup}>
                                    {mockBooks.filter((API) => {
                                        return (
                                            API
                                                .title
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        )
                                    }).map((book) => {
                                        console.log(book)
                                        return (
                                            <div key={book.id}>
                                                <label label >
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) =>
                                                            handleCheckboxChange("title", book.title, e.target.checked)
                                                        }
                                                    />
                                                    <span>{book.title}</span>
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filter}>
                        <div className={styles.filterTitle} onClick={toggleGenreDropdown}>
                            Genres
                            <span
                                className={
                                    isGenreDropdownOpen
                                        ? styles.filterTitleIconOpen
                                        : styles.filterTitleIconClosed
                                }
                            />
                        </div>
                        {isGenreDropdownOpen && (
                            <div className={styles.dropdown}>
                                <input
                                    type="text"
                                    placeholder="Search titles"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                <div className={styles.checkboxGroup}>
                                    {mockBooks.filter((API) => {
                                        return (
                                            API
                                                .genre
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        )
                                    }).map((book) => {
                                        console.log(book)
                                        return (
                                            <div key={book.id}>
                                                <label label >
                                                    <input
                                                        type="checkbox"
                                                        onChange={(e) =>
                                                            handleCheckboxChange("genre", book.genre, e.target.checked)
                                                        }
                                                    />
                                                    <span>{book.genre}</span>
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}