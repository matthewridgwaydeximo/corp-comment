import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackListItem } from "../../../lib/types/types";
import { Error, Spinner } from "../../../lib/common.imports";
import IsNullOrEmpty from "../../../lib/helper/helper";
import { JUST_NOW_MESSAGE } from "../../../lib/constants/constants";

type TProps = {
    items: TFeedbackListItem[] | null | undefined;
    isLoading: boolean;
    errorMessage: string;
};

type TUpVoteButtonProps = {
    upvoteCount: number;
};

type TCompanyInitialsProps = {
    badgeLetter: string;
};

type TCompanyCommentsProps = {
    company: string | null;
    text: string | null;
};

type TDatePosted = {
    daysAgo: number;
};

export default function FeedbackList({ items, isLoading, errorMessage }: TProps) {
    return (
        <ol className="feedback-list">
            {isLoading && <Spinner />}

            {IsNullOrEmpty(items) && !IsNullOrEmpty(errorMessage) && (
                <Error message={errorMessage} />
            )}

            {items?.map((item) => (
                <FeedbackListItem key={item.id} {...item} />
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
    return <p>{IsNullOrEmpty(daysAgo) ? JUST_NOW_MESSAGE : `${daysAgo}d`}</p>;
}
