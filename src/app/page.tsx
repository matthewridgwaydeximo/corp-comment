import { FeedbackList } from "../lib/feedback.imports";
import { Header } from "../lib/home.imports";
import { TFeedbackListItem } from "../lib/types/types";

const FeedbackListItems: TFeedbackListItem[] = [
    {
        upvotes: 593,
        initials: "B",
        company: "ByteGrad",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum?",
        date: "4d",
    },
    {
        upvotes: 594,
        initials: "B",
        company: "Jollibee",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum?",
        date: "1w",
    },
    {
        upvotes: 595,
        initials: "B",
        company: "McDonalds",
        comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum?",
        date: "1m",
    },
];

export default function Home() {
    return (
        <>
            <Header />
            <FeedbackList items={FeedbackListItems} />
        </>
    );
}
