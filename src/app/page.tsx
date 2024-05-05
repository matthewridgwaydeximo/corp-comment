"use client";

import { FeedbackList } from "../lib/feedback.imports";
import { Header } from "../lib/layout.imports";
import { HashtagList } from "../lib/hashtag.imports";

export default function Home() {
    return (
        <>
            <Header />
            <FeedbackList />
            <HashtagList />
        </>
    );
}
