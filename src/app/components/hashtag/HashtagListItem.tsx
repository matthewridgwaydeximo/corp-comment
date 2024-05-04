import React from "react";

type THashtagListProps = {
    company: string;
    onSelectCompany: (company: string) => void;
};

export default function HashtagListItem({ company, onSelectCompany }: THashtagListProps) {
    return (
        <li>
            <button onClick={() => onSelectCompany(company)}>#{company}</button>
        </li>
    );
}
