// import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Breadcrumbs from "./Breadcrumbs";
import Greating from "./Geating";
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <Breadcrumbs
                            bookTitle={bookTitle}
                            extraSegments={extraSegments}
                            skipLastSegment={skipLastSegment}
                        />
                        <Greating />
                    </div>
                    {children}
                    <ScrollToTop />
                </main>
                <Footer />
            </div>
        </div>
    );
}
