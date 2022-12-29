# Jichan database

Japanse dictionary database for my upcoming application it's based on the Kanjidic with the following changes:

-   updated jlpt level
-   added characters unicode value, common on and kun readings
-   only featuring the 6355 kanji of the first kanjidic

The JSON database is in the src/data folder, you can generate a sqlite database by running the script in the src folder.

```
npm run build
```

The additional data are from [kanjium](https://github.com/mifunetoshiro/kanjium), [kanji-data](https://github.com/davidluzgouveia/kanji-data) but it's basically using the kanjidic database so this database is also under the [EDRDG](http://www.edrdg.org/) licence. The codes are for the dictionary application and are under MIT licence
