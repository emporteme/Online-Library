import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Breadcrumbs.module.scss';

export default function Breadcrumbs({ bookTitle, extraSegments = [], skipLastSegment = false }) {
    // Get the current router object from Next.js
    const router = useRouter();
    // Get the current pathname from the router object
    const { pathname } = router;

    // Split the pathname into segments, filter out empty segments
    const segments = pathname.split('/').filter((segment) => segment !== '');
    const allSegments = [...segments, ...extraSegments];

    return (
        // Create a navigation element with the navbar style
        <nav className={styles.navbar}>
            {/* Create a link to the dashboard on the left */}
            <div className="mainText">
                <Link href="/">
                    <div style={{ color: '#604A57' }}>Library</div>
                </Link>
            </div>

            {/* For each segment of the pathname, create a breadcrumb link */}
            {allSegments.map((_, index) => {
                if (skipLastSegment && index === segments.length - 1) {
                    return null;
                }
                const segment = index < segments.length ? segments[index] : extraSegments[index - segments.length];

                // Skip rendering the breadcrumb if the segment is "id"
                if (segment === "id") {
                    return null;
                }

                const isLastSegment = index === allSegments.length - 1;
                const isExtraSegment = index >= segments.length;
                const label = isLastSegment && isExtraSegment && bookTitle
                    ? bookTitle
                    : segment.charAt(0).toUpperCase() + segment.slice(1);

                // Create the href for this breadcrumb link by joining the segments up to this point
                const href = `/${segments.slice(0, index + 1).join('/')}`;

                // If this is the last segment, create a non-link breadcrumb with bold text
                if (isLastSegment) {
                    return (
                        <React.Fragment key={segment}>
                            <span>{' > '}</span>
                            <div className="mainText">
                                <b>
                                    <span>{label}</span>
                                </b>
                            </div>
                        </React.Fragment>
                    );
                }
                // Otherwise, create a breadcrumb link
                else {
                    return (
                        <React.Fragment key={segment}>
                            <span>{' > '}</span>
                            <Link href={href}>
                                <div className="mainText" style={{ color: '#604A57' }}>
                                    {' '}
                                    {label}
                                </div>
                            </Link>
                        </React.Fragment>
                    );
                }
            })}

        </nav>
    );
}
