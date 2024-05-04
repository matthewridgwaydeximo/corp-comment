import { Fragment } from "react";
import { HashtagListItem } from "../../../lib/hashtag.imports";

type THashtagListProps = {
    hashtagListItems: string[];
    handleSelectCompany: (company: string) => void;
};

export default function HashtagList({ hashtagListItems, handleSelectCompany }: THashtagListProps) {
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
