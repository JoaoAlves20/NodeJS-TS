import { writeFile, readFile } from "fs/promises";

async function writeJSON(filename: string) {
    const data = [
        {
            id: 1,
            username: "Batman",
            power: "Rich"
        }
    ]

    await writeFile(filename, JSON.stringify(data, null, 2))
}

async function readJSON(filename: string) {
    const data = await readFile(filename, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
}

async function addHeroJSON(filename: string, newHero: { id: number, username: string, power: string }) {
    const data = await readJSON(filename);
    data.push(newHero);
    await writeFile(filename, JSON.stringify(data, null, 2));
}

addHeroJSON("heroes.json", { id: 2, username: "Superman", power: "Super Strength" })