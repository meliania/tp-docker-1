const express = require('express');
const helmet = require('helmet');

const app = express();
const PORT = process.env.port || 80;

app.use(helmet());

app.get('/', (_, res) => {
    res.send('Well done');
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});

