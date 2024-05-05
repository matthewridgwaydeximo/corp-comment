import { Fragment } from "react";
import { HashtagListItem } from "../../../lib/hashtag.imports";
import { useFeedbackContext } from "../../../lib/hooks/useFeedbackContext";
import { TFeedback } from "../../../lib/types/types";

export default function HashtagList() {
    const { hashtagListItems, handleSelectCompany } = useFeedbackContext() as TFeedback;

    return (
        <ul className="hashtags">
            {hashtagListItems.map((hashtagListItem, index) => (
                <Fragment key={index}>
                    <HashtagListItem
                        key={index}
                        company={hashtagListItem}
                        onSelectCompany={handleSelectCompany}
                    />
                </Fragment>
            ))}
        </ul>
    );
}
