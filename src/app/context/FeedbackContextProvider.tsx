"use client";

import React, { createContext, useMemo, useState } from "react";
import IsNullOrEmpty from "../../lib/helper/helper";
import { TFeedback, TFeedbackListItem } from "../../lib/types/types";
import axios from "axios";
import { useFetchFeedbackItems } from "../../lib/hooks/useFetchFeedbackItems";

type TFeedbackContextProvider = {
    children: React.ReactNode;
};

type TOnTextChange = {
    handleCompanyBadge: (text: string) => string;
    handleCompanyName: (text: string) => string;
};

export const FeedbackListItemContext = createContext<TFeedback | null>(null);

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

export default function FeedbackContextProvider({ children }: TFeedbackContextProvider) {
    const { items, setItems, isLoading, errorMessage } = useFetchFeedbackItems();

    const [text, setText] = useState("");
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
        <FeedbackListItemContext.Provider
            value={{
                text,
                setText,
                handleAddItem,
                filteredItems,
                isLoading,
                errorMessage,
                hashtagListItems,
                handleSelectCompany,
            }}
        >
            {children}
        </FeedbackListItemContext.Provider>
    );
}
