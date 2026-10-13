import {OneBlock} from "./one-block";

type DiceDisplayProps = {
    word: string;
}

export function BlocksDisplay({word}: DiceDisplayProps) {
    return (
        <div className="flex flex-row items-center gap-2">
            {word.split("").map(
                (letter: string, index: number) => (
                    <OneBlock letter={letter} key={`${index}_${letter}`}/>
                )
            )}
        </div>
    )
}