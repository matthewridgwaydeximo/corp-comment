import { useFeedbackStore } from "../../../app/stores/feedbackStore";
import { Pattern, Logo, Title } from "../../../lib/common.imports";
import { FeedbackForm } from "../../../lib/feedback.imports";

export default function Header() {
    const addItem = useFeedbackStore((state) => state.addItem);

    return (
        <header>
            <Pattern />
            <Logo />
            <Title />
            <FeedbackForm onAddItem={addItem} />
        </header>
    );
}
