// components/PDFViewer.js
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import styles from "../styles/PDFViewer.module.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        updateWindowDimensions();
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    const updateWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    };

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const nextPage = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1);
        }
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const pdfWidth = windowWidth > 768 ? null : "100%";

    return (
        <div className={styles["pdf-container"]}>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={pdfWidth} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            <div>
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};

export default PDFViewer;
