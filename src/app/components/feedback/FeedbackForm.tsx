"use client";

import { ChangeEvent } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants/constants";

type TFeedbackForm = {
    text: string;
    setText: (text: string) => void;
    handleAddItem: () => void;
};

export default function FeedbackForm({ text, setText, handleAddItem }: TFeedbackForm) {
    const length = MAX_CHARACTERS - text.length;

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const length = e.target.value.length;

        if (length > MAX_CHARACTERS) return;

        setText(e.target.value);
    };

    const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddItem();
    };

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <textarea
                id="feedback-textarea"
                placeholder="#"
                spellCheck={false}
                value={text}
                onChange={handleTextChange}
            />
            <label htmlFor="feedback-textarea">
                Enter your feedback here, remember to #hashtag the company
            </label>
            <div>
                <p className="u-italic">{length}</p>
                <button>
                    <span>submit</span>
                </button>
            </div>
        </form>
    );
}
