"use client";

import { ChangeEvent, useState } from "react";
import { MAX_CHARACTERS } from "../../../lib/constants/constants";
import classNames from "classnames";
import IsNullOrEmpty from "../../../lib/helper/helper";

type TFeedbackFormProps = {
    onAddItem: (text: string) => Promise<void>;
};

export default function FeedbackForm({ onAddItem }: TFeedbackFormProps) {
    const [text, setText] = useState("");
    const [showValidIndicator, setShowValidIndicator] = useState(false);
    const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

    const length = MAX_CHARACTERS - text.length;

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const length = e.target.value.length;

        if (length > MAX_CHARACTERS) return;

        setText(e.target.value);
    };

    const handleOnSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (IsNullOrEmpty(text) || !text.includes("#")) {
            setShowInvalidIndicator(true);
            setTimeout(() => {
                setShowInvalidIndicator(false);
            }, 2000);
            return;
        }

        onAddItem(text);

        setShowValidIndicator(true);
        setTimeout(() => {
            setShowValidIndicator(false);
        }, 2000);
    };

    return (
        <form
            className={classNames({
                form: true,
                "form--valid": showValidIndicator,
                "form--invalid": showInvalidIndicator,
            })}
            onSubmit={handleOnSubmit}
        >
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
