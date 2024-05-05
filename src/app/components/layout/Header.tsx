import { Pattern, Logo, Title } from "../../../lib/common.imports";
import { FeedbackForm } from "../../../lib/feedback.imports";

export default function Header() {
    return (
        <header>
            <Pattern />
            <Logo />
            <Title />
            <FeedbackForm />
        </header>
    );
}
