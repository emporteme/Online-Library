import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Breadcrumbs from "./Breadcrumbs"


interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    spacing?: string;
}

export default function MainLayout({ children, spacing = "2vh 5vw", title = "Library | emporteme" }: MainLayoutProps) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <div>
                <Header />
                <main style={{ padding: spacing }}>
                    <Breadcrumbs />
                    {children}
                    <ScrollToTop />
                </main>
                <Footer />
            </div>
        </div>
    );
}