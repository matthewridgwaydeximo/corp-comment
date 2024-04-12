import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackListItem } from "../../../lib/types/types";

type TProps = {
    items: TFeedbackListItem[];
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
            <button>
                <TriangleUpIcon />
                <span>{upvotes}</span>
            </button>

            <div>
                <p>{initials}</p>
            </div>

            <div>
                <p>{company}</p>
                <p>{comments}</p>
            </div>

            <p>{date}</p>
        </li>
    );
}

function UpVoteButton() {
    return (
        <button>
            <TriangleUpIcon />
            <span>593</span>
        </button>
    );
}

function CompanyInitials() {
    return (
        <div>
            <p>B</p>
        </div>
    );
}

function CompanyComments() {
    return (
        <div>
            <p>ByteGrad</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, harum?</p>
        </div>
    );
}

function PostDetails() {
    return <p>4d</p>;
}
