import { readFileSync } from "fs";
import database from "./lib/db/config";

(async () => {
    try {
        const db = readFileSync("./src/data/kanji-data.json", "utf-8");
        const parsedDb = JSON.parse(db);

        await database.models.KanjiDic.sync();
        console.log("✓ Table synced");

        try {
            await database.models.KanjiDic.bulkCreate(parsedDb);
        } catch (error) {
            await database.models.KanjiDic.drop();
            console.log("✓ Droped existing table");
            await database.models.KanjiDic.sync();
            console.log("✓ Table resynced");
            await database.models.KanjiDic.bulkCreate(parsedDb);
        } finally {
            console.log("✓ Rows inserted!");
        }
    } catch (error) {
        console.error(error.message);
    }
})();
