import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackListItem } from "../../../lib/types/types";
import Spinner from "../common/Spinner";

type TProps = {
    items: TFeedbackListItem[] | null;
    isLoading: boolean;
};

type TUpVoteButtonProps = {
    upvoteCount: number;
};

type TCompanyInitialsProps = {
    badgeLetter: string;
};

type TCompanyCommentsProps = {
    company: string;
    text: string;
};

type TDatePosted = {
    daysAgo: number;
};

export default function FeedbackList({ items, isLoading }: TProps) {
    return (
        <ol className="feedback-list">
            {isLoading && <Spinner />}

            {items?.map((item, index) => (
                <FeedbackListItem key={index} {...item} />
            ))}
        </ol>
    );
}

function FeedbackListItem({ upvoteCount, badgeLetter, company, text, daysAgo }: TFeedbackListItem) {
    return (
        <li className="feedback">
            <UpVoteButton upvoteCount={upvoteCount} />
            <CompanyInitials badgeLetter={badgeLetter} />
            <CompanyComments company={company} text={text} />
            <DatePosted daysAgo={daysAgo} />
        </li>
    );
}

function UpVoteButton({ upvoteCount }: TUpVoteButtonProps) {
    return (
        <button>
            <TriangleUpIcon />
            <span>{upvoteCount}</span>
        </button>
    );
}

function CompanyInitials({ badgeLetter }: TCompanyInitialsProps) {
    return (
        <div>
            <p>{badgeLetter}</p>
        </div>
    );
}

function CompanyComments({ company, text }: TCompanyCommentsProps) {
    return (
        <div>
            <p>{company}</p>
            <p>{text}</p>
        </div>
    );
}

function DatePosted({ daysAgo }: TDatePosted) {
    return <p>{daysAgo}d</p>;
}
