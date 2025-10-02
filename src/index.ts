import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "process";

const MAX_DIGIT_FOR_OFFSET = 12;
const CITIES_WITH_OFFSET = new Map<string, number>([
    ["Moscow", 3],
    ["Paris", 2],
    ["Berlin", 2],
    ["Brussels", 2],
    ["Amsterdam", 2],
    ["Rome", 2],
    ["London", 1],
    ["Dublin", 1],
    ["New York", -4],
    ["Washington, DC", -4],
    ["St. Louis", -5],
    ["Los Angeles", -7],
    ["Tokyo", 9],
    ["Beijing", 8],
    ["Ho Chi Mihn City", 7],
    ["Mumbai", 5],
]);

main().catch(console.error);

async function main() {
    const rl = readline.createInterface(input, output);
    try {
        let offsetInput: number;
        while (true) {
            let offsetInputString = await rl.question("Enter an offset from -12 to 12: ");
            const number = Number(offsetInputString);
            if (!Number.isNaN(number) && number >= -12 && number <= 12) {
                offsetInput = number;
                break;
            } else {
                console.log("Invalid input! Please enter only numbers from -12 to 12");
            }
        }
        const bitSequenceForCities = generateBitSequencesForCities();
        const mask = generateBitSequenceForOffset(offsetInput);
        const resultList: string[] = [];
        for (const [key, value] of bitSequenceForCities) {
            if ((value & mask) != 0) {
                resultList.push(key);
            }
        }
        if (resultList.length != 0) {
            console.log("Cities that match ", resultList);
        } else {
            console.log("Nothing matches");
        }
    } finally {
        rl.close();
    }
}


function generateBitSequenceForOffset(offset: number): number {
    let positiveBitIndex = MAX_DIGIT_FOR_OFFSET - offset;
    let mask = 0;
    mask |= (1 << positiveBitIndex);
    return mask;
}

function generateBitSequencesForCities(): Map<string, number> {
    let bitSequenceForCities = new Map<string, number>();
    for (const [key, value] of CITIES_WITH_OFFSET.entries()) {
        let bitSequence = generateBitSequenceForOffset(value);
        bitSequenceForCities.set(key, bitSequence);
    }
    return bitSequenceForCities;
}