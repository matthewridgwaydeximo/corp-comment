import { HashtagListItem } from "../../../lib/hashtag.imports";

type THashtagListProps = {
    hashtagListItems: string[];
    handleSelectCompany: (company: string) => void;
};

export default function HashtagList({ hashtagListItems, handleSelectCompany }: THashtagListProps) {
    return (
        <ul className="hashtags">
            {hashtagListItems.map((hashtagListItem, index) => (
                <HashtagListItem
                    key={index}
                    company={hashtagListItem}
                    onSelectCompany={handleSelectCompany}
                />
            ))}
        </ul>
    );
}
