Ahoj

Pripravil som aplikáciu podľa vášho zadania, pôvodne som chcel použiť react-create-app, ale už je nejak pol roka deprecated, tak som sa rozhodol vyskúšať Vite.

Najprv som chcel filtrovanie dát riešiť niekde na BE, tak som si pripravil jednoduchý fastify server, kde som si dáta parsoval a filtroval. Samozrejme mi potom oneskorene došlo, že to api posiela random dáta, takže vo finálnej verzii riešim filtrovanie na FE a filtrujem len dáta, ktoré mi api už vrátilo, nechodím si po nové. Dávalo mi to takto najväčší zmysel vzhľadom na tú randomizáciu.

Ak by vás ale zaujímala verzia s fastify, bolo mi ľúto to úplne zmazať, tak som na to vytvoril vlastnú branch [fastify-version](https://github.com/t-havelka/simple-user-list/tree/fastify-version). V tejto verzii ale chýbajú nejaké optimalizácie v Reacte, s ktorými som prišiel neskôr.

Ešte čo sa týka css, nechceli ste to po mne, ale vadilo mi sa na to pozerať bez nich, tak aby som nepálil veľa času, nechal som si ich vygenerovať AI. Píšem to len pre transparentnosť.

Teším sa na vašu odpoveď a prípadné pripomienky ku kódu.

Pre spustenie
```
yarn install
yarn run dev
```
