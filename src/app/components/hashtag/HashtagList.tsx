import { Fragment } from "react";
import { HashtagListItem } from "../../../lib/hashtag.imports";
import { useFeedbackStore } from "../../../app/stores/feedbackStore";

export default function HashtagList() {
    const hashtagListItems = useFeedbackStore((state) => state.getHashtagListItems());
    const selectCompany = useFeedbackStore((state) => state.selectCompany);

    return (
        <ul className="hashtags">
            {hashtagListItems.map((hashtagListItem, index) => (
                <Fragment key={index}>
                    <HashtagListItem
                        key={index}
                        company={hashtagListItem}
                        onSelectCompany={selectCompany}
                    />
                </Fragment>
            ))}
        </ul>
    );
}
