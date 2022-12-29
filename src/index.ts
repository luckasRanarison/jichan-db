import { readFileSync, writeFileSync } from "fs";
import database from "./lib/db/config";

(async () => {
    const db = readFileSync("./src/data/kanji-data.json", "utf-8");
    const parsedDb = JSON.parse(db);

    await database.models.KanjiDic.drop();
    await database.models.KanjiDic.sync();
    await database.models.KanjiDic.bulkCreate(parsedDb);
})();
