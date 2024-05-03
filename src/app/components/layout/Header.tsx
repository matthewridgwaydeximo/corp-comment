import { Pattern, Logo, Title } from "../../../lib/common.imports";
import { FeedbackForm } from "../../../lib/feedback.imports";

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
