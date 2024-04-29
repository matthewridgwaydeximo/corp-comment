export type TFeedbackListItem = {
    id: number;
    upvoteCount: number;
    badgeLetter: string;
    company: string;
    text: string | null;
    daysAgo: number;
};
