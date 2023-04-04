import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Breadcrumbs from "./Breadcrumbs"
// import mockBooks from "@/data/books";


export default function MainLayout({ children, spacing = "2vh 5vw", title = "Library | emporteme", bookTitle, extraSegments, skipLastSegment = false, }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <Header />
                <main style={{ padding: spacing }}>
                    {/* Conditionally render the Breadcrumbs component with the bookTitle prop */}
                    <Breadcrumbs bookTitle={bookTitle} extraSegments={extraSegments} skipLastSegment={skipLastSegment}/>
                    {children}
                    <ScrollToTop />
                </main>
                <Footer />
            </div>
        </div>
    );
}
