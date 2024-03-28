import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackList() {
    return (
        <ol className="feedback-list">
            <li className="feedback">
                <UpVoteButton />
                <CompanyInitials />
                <CompanyComments />
                <PostDetails />
            </li>
        </ol>
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
