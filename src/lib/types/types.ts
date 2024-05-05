export type TFeedbackListItem = {
    id: number;
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string | null;
    daysAgo: number;
};

export type TFeedback = {
    text: string;
    setText: (text: string) => void;
    handleAddItem: () => void;
    filteredItems: TFeedbackListItem[] | null | undefined;
    isLoading: boolean;
    errorMessage: string;
    hashtagListItems: string[];
    handleSelectCompany: (company: string) => void;
};
