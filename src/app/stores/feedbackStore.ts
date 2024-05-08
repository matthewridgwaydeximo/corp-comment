import { create } from "zustand";
import { TFeedbackListItem } from "../../lib/types/types";
import axios from "axios";
import IsNullOrEmpty from "../../lib/helper/helper";

type TFeedbackStore = {
    items: TFeedbackListItem[] | null | undefined;
    isLoading: boolean;
    errorMessage: string;
    selectedCompany: string;
    getHashtagListItems: () => string[];
    getFilteredItems: () => TFeedbackListItem[] | null | undefined;
    addItem: (text: string) => Promise<void>;
    selectCompany: (company: string) => void;
    fetchFeedbackItems: () => Promise<void>;
};

// Constant
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

export const useFeedbackStore = create<TFeedbackStore>((set, get) => ({
    items: [],
    isLoading: true,
    errorMessage: "",
    selectedCompany: "",
    getHashtagListItems: () => {
        const state = get();

        return (
            state.items
                ?.map((item) => item.company)
                .filter((company, index, array) => array.indexOf(company) === index) || []
        );
    },
    getFilteredItems: () => {
        const state = get();

        return !IsNullOrEmpty(state.selectedCompany)
            ? state.items?.filter((item) => item.company === state.selectedCompany)
            : state.items;
    },
    addItem: async (text: string) => {
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

        set((state) => ({ items: state.items && [...state.items, newItem] }));

        await axios.post("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks/", {
            ...newItem,
        });
    },
    selectCompany: (company: string) => set({ selectedCompany: company }),
    fetchFeedbackItems: async () => {
        try {
            const response = await axios.get(
                "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks/"
            );

            const { feedbacks } = response.data;

            set({ items: feedbacks, isLoading: false });
        } catch (error) {
            set({ items: null, isLoading: false, errorMessage: "ERROR_MESSAGE" });
        }
    },
}));
