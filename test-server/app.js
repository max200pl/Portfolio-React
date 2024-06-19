const express = require('express');

const app = express();

app.get('/api/works', (req, res) => {
    res.send([
        {
            "_id": "6595251f515e3c5c1578db03",
            "name": "Pantoflex",
            "category": "Landing",
            "client": "Freelance",
            "link": "https://max200pl.github.io/Pantoflex/",
            "frontTech": [
                {
                    "languages": [
                        {
                            "apply": 100,
                            "name": "CSS"
                        },
                        {
                            "apply": 100,
                            "name": "HTML"
                        }
                    ]
                },
                {
                    "packageManagers": [
                        {
                            "apply": 100,
                            "name": "npm"
                        }
                    ]
                },
                {
                    "buildTools": [
                        {
                            "apply": 100,
                            "name": "Prettier"
                        }
                    ]
                },
                {
                    "versionControl": [
                        {
                            "apply": 100,
                            "name": "Git"
                        }
                    ]
                },
                {
                    "codeEditors": [
                        {
                            "apply": 100,
                            "name": "Visual Studio Code"
                        }
                    ]
                },
                {
                    "designTools": [
                        {
                            "apply": 100,
                            "name": "Figma"
                        }
                    ]
                }
            ],
            "backTech": [],
            "cardImage": {
                "name": "pantoflex1/intro.png",
                "blurHash": "UeRV^K~qD%-p%2WBt7V@%MMxxuWC%MWCofs:"
            },
            "images": [],
            "createdAt": "2024-01-03T09:13:03.875Z",
            "updatedAt": "2024-01-03T09:13:13.859Z"
        }
    ]);
});

app.get('/error', (req, res) => {
    process.exit(1);
});

app.listen(8000, () => {
    console.log(`Example app listening at http://localhost:${8000}`);
});
