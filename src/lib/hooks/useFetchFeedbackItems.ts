import { useEffect, useState } from "react";
import { TFeedbackListItem } from "../types/types";
import axios from "axios";
import { ERROR_MESSAGE } from "../constants/constants";

export const useFetchFeedbackItems = () => {
    const [items, setItems] = useState<TFeedbackListItem[] | null | undefined>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

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

    return {
        items,
        setItems,
        isLoading,
        errorMessage,
    };
};
