import { writeFile, readFile, unlink } from "fs/promises";

// Function to write a JSON file with an array of heroes
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

// Function to read the JSON file and return the data
async function readJSON(filename: string) {
    const data = await readFile(filename, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
}

// Function to add a new hero to the JSON file
async function addHeroJSON(filename: string, newHero: { id: number, username: string, power: string }) {
    const data = await readJSON(filename);
    data.push(newHero);
    await writeFile(filename, JSON.stringify(data, null, 2));
}

// Function to remove the JSON file
async function removeJSON(filename: string) {
    await unlink(filename);
}

addHeroJSON("heroes.json", { id: 2, username: "Superman", power: "Super Strength" })