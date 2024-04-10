"use client";

import { useState, ChangeEvent } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants/constants";

export default function FeedbackForm() {
    const [text, setText] = useState("");

    const length = MAX_CHARACTERS - text.length;

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    return (
        <form className="form">
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
