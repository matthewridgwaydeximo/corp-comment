import { TFeedbackListItem } from "@/lib/types/types";
import { Pattern, Logo, Title, FeedbackForm } from "../../../lib/common.imports";
import { text } from "stream/consumers";

type THeader = {
    text: string;
    setText: (text: string) => void;
    onAddItem: () => void;
};

export default function Header({ text, setText, onAddItem }: THeader) {
    return (
        <header>
            <Pattern />
            <Logo />
            <Title />
            <FeedbackForm text={text} setText={setText} handleAddItem={onAddItem} />
        </header>
    );
}
