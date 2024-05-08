"use client";

import { FeedbackList } from "../lib/feedback.imports";
import { Header } from "../lib/layout.imports";
import { HashtagList } from "../lib/hashtag.imports";
import { useEffect } from "react";
import { useFeedbackStore } from "./stores/feedbackStore";

export default function Home() {
    const fetchFeedbackItems = useFeedbackStore((state) => state.fetchFeedbackItems);

    useEffect(() => {
        fetchFeedbackItems();
    }, []);

    return (
        <>
            <Header />
            <FeedbackList />
            <HashtagList />
        </>
    );
}
