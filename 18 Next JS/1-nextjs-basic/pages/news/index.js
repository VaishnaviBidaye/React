// our-domain.com/news

import Link from 'next/link';
import {Fragment} from "react";

function NewsPage() {
    return (
        <Fragment>
            <h1>NewsPage</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-great-framework">
                        NextJS great Framework
                    </Link>
                </li>
                <li><a>Happy Learning</a></li>
            </ul>
        </Fragment>        
    );
}

export default NewsPage;