import { useContext } from "react";
import { FeedbackListItemContext } from "../../app/context/FeedbackContextProvider";
import IsNullOrEmpty from "../helper/helper";

export const useFeedbackContext = () => {
    const context = useContext(FeedbackListItemContext);

    if (IsNullOrEmpty(context)) {
        throw new Error("useFeedbackContext must be used within a FeedbackContextProvider");
    }

    return context;
};
