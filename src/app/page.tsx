"use client";

import { useEffect, useMemo, useState } from "react";
import { FeedbackList } from "../lib/feedback.imports";
import { Header } from "../lib/layout.imports";
import { TFeedbackListItem } from "../lib/types/types";
import axios from "axios";
import { ERROR_MESSAGE } from "../lib/constants/constants";
import IsNullOrEmpty from "../lib/helper/helper";
import { HashtagList } from "../lib/hashtag.imports";

type TOnTextChange = {
    handleCompanyBadge: (text: string) => string;
    handleCompanyName: (text: string) => string;
};

const onTextChange: TOnTextChange = {
    handleCompanyBadge: (text: string): string =>
        text
            .split(" ")
            .filter((word) => word.includes("#"))
            .map((word) => word.replace("#", "").charAt(0))
            .join(" "),
    handleCompanyName: (text: string): string =>
        text
            .split(" ")
            .filter((word) => word.includes("#"))
            .map((word) => word.replace("#", ""))
            .join(" "),
};

export default function Home() {
    const [items, setItems] = useState<TFeedbackListItem[] | null | undefined>(null);
    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");

    const hashtagListItems = useMemo(
        () =>
            items
                ?.map((item) => item.company)
                .filter((company, index, array) => array.indexOf(company) === index) || [],
        [items]
    );

    const filteredItems = useMemo(
        () =>
            !IsNullOrEmpty(selectedCompany)
                ? items?.filter((item) => item.company === selectedCompany)
                : items,
        [items, selectedCompany]
    );

    useEffect(() => {
        async function _fetch() {
            try {
                const response = await axios.get(
                    "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks/"
                );

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

    const handleAddItem = async () => {
        if (IsNullOrEmpty(text)) return;

        const { handleCompanyBadge, handleCompanyName } = onTextChange;

        const newItem: TFeedbackListItem = {
            id: new Date().getTime(),
            upvoteCount: 0,
            badgeLetter: handleCompanyBadge(text),
            company: handleCompanyName(text),
            text: text,
            daysAgo: 0,
        };

        setItems((prevItems: any) => [...prevItems, newItem]);
        setText("");

        await axios.post("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks/", {
            ...newItem,
        });
    };

    const handleSelectCompany = (company: string) => {
        setSelectedCompany(company);
    };

    return (
        <>
            <Header text={text} setText={setText} onAddItem={handleAddItem} />
            <FeedbackList items={filteredItems} isLoading={isLoading} errorMessage={errorMessage} />
            <HashtagList
                hashtagListItems={hashtagListItems}
                handleSelectCompany={handleSelectCompany}
            />
        </>
    );
}
