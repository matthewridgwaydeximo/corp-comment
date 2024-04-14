"use client";

import { useEffect, useState } from "react";
import { FeedbackList } from "../lib/feedback.imports";
import { Header } from "../lib/home.imports";
import { TFeedbackListItem } from "../lib/types/types";
import Spinner from "./components/common/Spinner";
import axios from "axios";

export default function Home() {
    const [items, setItems] = useState<TFeedbackListItem[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function _fetch() {
            const response = await axios.get("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");
            const { feedbacks } = response.data;

            setItems(feedbacks);
            setIsLoading(false);
        }

        _fetch();
    }, []);

    return (
        <>
            <Header />
            <FeedbackList items={items} isLoading={isLoading} />
        </>
    );
}
