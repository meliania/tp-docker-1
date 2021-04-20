const express = require('express');
const helmet = require('helmet');

const app = express();
const PORT = Number(process.env.port || 80);

if (isNaN(PORT) && !isFinite(PORT)) {
    console.error(`Value ${PORT} must be a number`);
    process.exit(1);
}
if (PORT !== 80) {
    if (PORT < 1024 || PORT > 49151) {
        console.error(`Your port ${PORT} must be in the range [1024, 49151]`);
        process.exit(1);
    }
}

app.use(helmet());

app.get('/', (_, res) => {
    res.send('Well done');
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});

