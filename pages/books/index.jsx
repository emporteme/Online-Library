// pages/Books.js
import MainLayout from "@/components/MainLayout";
import SideBar from "../../components/SideBar";
import SearchBar from "../../components/SearchBar";
import mockBooks from "../../data/books";
import React, { useState } from "react"

export default function Books() {
    const [selectedAuthors, setSelectedAuthors] = useState([]);
    const [selectedTitles, setSelectedTitles] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleFilterChange = (type, value) => {
        switch (type) {
            case "author":
                setSelectedAuthors(value);
                break;
            case "title":
                setSelectedTitles(value);
                break;
            case "genre":
                setSelectedGenres(value);
                break;
        }
    };

    const filteredBooks = mockBooks.filter((book) => {
        const isAuthorMatch = selectedAuthors.length === 0 || selectedAuthors.includes(book.author);
        const isTitleMatch = selectedTitles.length === 0 || selectedTitles.includes(book.title);
        const isGenreMatch = selectedGenres.length === 0 || selectedGenres.includes(book.genre);

        return isAuthorMatch && isTitleMatch && isGenreMatch;
    });

    return (
        <MainLayout title="Books | Library">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SideBar onFilterChange={handleFilterChange} />
                <SearchBar books={filteredBooks} />
                <style jsx>
                    {`
                    @media (max-width: 768px) {
                        flex-direction: column;
                        align-items: center;
                        flex-wrap:wrap;
                    }
                `}
                </style>
            </div>

        </MainLayout>
    );
}
