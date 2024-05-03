import React from "react";

type THashtagListProps = {
    hashtagListItems: string[];
};

export default function HashtagListItem({ hashtagListItems }: THashtagListProps) {
    return (
        <>
            {hashtagListItems.map((item) => (
                <li key={item}>
                    <button>#{item}</button>
                </li>
            ))}
        </>
    );
}
