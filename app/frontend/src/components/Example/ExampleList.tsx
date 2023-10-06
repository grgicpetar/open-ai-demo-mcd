import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "Vilka ingredienser finns i en Big Mac?",
        value: "Vilka ingredienser finns i en Big Mac?"
    },
    { text: "Restaurangen har nyss haft strömavbrott, vad gör jag?", value: "Restaurangen har nyss haft strömavbrott, vad gör jag?" },
    { text: "Jag vill kunna se hur jag löser problemet, finns det videos?", value: "Jag vill kunna se hur jag löser problemet, finns det videos?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
