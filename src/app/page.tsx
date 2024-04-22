"use client";

import { useEffect, useState } from "react";
import { FeedbackList } from "../lib/feedback.imports";
import { Header } from "../lib/home.imports";
import { TFeedbackListItem } from "../lib/types/types";
import axios from "axios";
import { ERROR_MESSAGE } from "../lib/constants/constants";

export default function Home() {
    const [items, setItems] = useState<TFeedbackListItem[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        async function _fetch() {
            try {
                const response = await axios.get("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks/");
                const { feedbacks } = response.data;

                setItems(feedbacks);
                setIsLoading(false);
            } catch (error) {
                setItems(null);
                setIsLoading(false);
                setErrorMessage(ERROR_MESSAGE);
            }
        }

        _fetch();
    }, []);

    return (
        <>
            <Header />
            <FeedbackList items={items} isLoading={isLoading} errorMessage={errorMessage} />
        </>
    );
}
