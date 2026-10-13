import Image from "next/image"

type OneBlockProps = {
    letter: string;
};

export function OneBlock({letter}: OneBlockProps) {
    return <Image src={`/images/blocks/block_${letter}.png`}
                  width={50}
                  height={50}
                  alt={"letter " + letter} priority={true}/>;
}