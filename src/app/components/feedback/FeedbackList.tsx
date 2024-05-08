"use client";

import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackListItem } from "../../../lib/types/types";
import { Error, Spinner } from "../../../lib/common.imports";
import IsNullOrEmpty from "../../../lib/helper/helper";
import { JUST_NOW_MESSAGE } from "../../../lib/constants/constants";
import classNames from "classnames";
import { useState } from "react";
import { useFeedbackStore } from "../../../app/stores/feedbackStore";

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

export default function FeedbackList() {
    const filteredItems = useFeedbackStore((state) => state.getFilteredItems());
    const isLoading = useFeedbackStore((state) => state.isLoading);
    const errorMessage = useFeedbackStore((state) => state.errorMessage);

    return (
        <ol className="feedback-list">
            {isLoading && <Spinner />}

            {IsNullOrEmpty(filteredItems) && !IsNullOrEmpty(errorMessage) && (
                <Error message={errorMessage} />
            )}

            {filteredItems?.map((item) => (
                <FeedbackListItem key={item.id} {...item} />
            ))}
        </ol>
    );
}

function FeedbackListItem({ upvoteCount, badgeLetter, company, text, daysAgo }: TFeedbackListItem) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => setIsExpanded(!isExpanded);

    return (
        <li
            className={classNames({
                feedback: true,
                "feedback--expand": isExpanded,
            })}
            onClick={handleExpand}
        >
            <UpVoteButton upvoteCount={upvoteCount} />
            <CompanyInitials badgeLetter={badgeLetter} />
            <CompanyComments company={company} text={text} />
            <DatePosted daysAgo={daysAgo} />
        </li>
    );
}

function UpVoteButton({ upvoteCount }: TUpVoteButtonProps) {
    const [updatedUpvoteCount, setUpdatedUpvoteCount] = useState(upvoteCount);

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                setUpdatedUpvoteCount(() => updatedUpvoteCount + 1);
                e.currentTarget.disabled = true;
            }}
        >
            <TriangleUpIcon />
            <span>{updatedUpvoteCount}</span>
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
