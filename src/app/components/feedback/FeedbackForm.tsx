"use client";

import { useState, ChangeEvent } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants/constants";

export default function FeedbackForm() {
    const [text, setText] = useState("");

    const length = MAX_CHARACTERS - text.length;

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const length = e.target.value.length;

        if (length > MAX_CHARACTERS) return;

        setText(e.target.value);
    };

    const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form className="form" onSubmit={handleOnSubmit}>
            <textarea id="feedback-textarea" placeholder="#" spellCheck={false} value={text} onChange={handleTextChange} />
            <label htmlFor="feedback-textarea">Enter your feedback here, remember to #hashtag the company</label>
            <div>
                <p className="u-italic">{length}</p>
                <button>
                    <span>submit</span>
                </button>
            </div>
        </form>
    );
}
