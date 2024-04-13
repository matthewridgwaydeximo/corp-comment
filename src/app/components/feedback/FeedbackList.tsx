import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackListItem } from "../../../lib/types/types";

type TProps = {
    items: TFeedbackListItem[];
};

type TUpVoteButtonProps = {
    upvotes: number;
};

type TCompanyInitialsProps = {
    initials: string;
};

type TCompanyCommentsProps = {
    company: string;
    comments: string;
};

type TDatePosted = {
    date: string;
};

export default function FeedbackList({ items }: TProps) {
    return (
        <ol className="feedback-list">
            {items.map((item, index) => (
                <FeedbackListItem key={index} {...item} />
            ))}
        </ol>
    );
}

function FeedbackListItem({ upvotes, initials, company, comments, date }: TFeedbackListItem) {
    return (
        <li className="feedback">
            <UpVoteButton upvotes={upvotes} />
            <CompanyInitials initials={initials} />
            <CompanyComments company={company} comments={comments} />
            <DatePosted date={date} />
        </li>
    );
}

function UpVoteButton({ upvotes }: TUpVoteButtonProps) {
    return (
        <button>
            <TriangleUpIcon />
            <span>{upvotes}</span>
        </button>
    );
}

function CompanyInitials({ initials }: TCompanyInitialsProps) {
    return (
        <div>
            <p>{initials}</p>
        </div>
    );
}

function CompanyComments({ company, comments }: TCompanyCommentsProps) {
    return (
        <div>
            <p>{company}</p>
            <p>{comments}</p>
        </div>
    );
}

function DatePosted({ date }: TDatePosted) {
    return <p>{date}</p>;
}
