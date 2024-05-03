type THashtagListProps = {
    hashtagListItems: string[];
};

export default function HashtagList({ hashtagListItems }: THashtagListProps) {
    return (
        <ul className="hashtags">
            {hashtagListItems.map((item) => (
                <li key={item}>
                    <button>#{item}</button>
                </li>
            ))}
        </ul>
    );
}
