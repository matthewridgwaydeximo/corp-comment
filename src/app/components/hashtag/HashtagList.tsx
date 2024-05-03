import { HashtagListItem } from "../../../lib/hashtag.imports";

type THashtagListProps = {
    hashtagListItems: string[];
};

export default function HashtagList({ hashtagListItems }: THashtagListProps) {
    return (
        <ul className="hashtags">
            <HashtagListItem hashtagListItems={hashtagListItems} />
        </ul>
    );
}
