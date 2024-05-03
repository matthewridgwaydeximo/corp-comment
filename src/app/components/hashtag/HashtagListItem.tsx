import React from "react";

type THashtagListProps = {
    key: number;
    company: string;
    onSelectCompany: (company: string) => void;
};

export default function HashtagListItem({ key, company, onSelectCompany }: THashtagListProps) {
    return (
        <li key={key}>
            <button onClick={() => onSelectCompany(company)}>#{company}</button>
        </li>
    );
}
