import {OneBlock} from "./one-block";

type BlocksDisplayProps = {
    word: string;
}

export function BlocksDisplay({word}: BlocksDisplayProps) {
    return (
        <div className="flex flex-row flex-wrap items-center gap-2">
            {word.split("").map(
                (letter: string, index: number) => (
                    <OneBlock letter={letter} key={`${index}_${letter}`}/>
                )
            )}
        </div>
    )
}