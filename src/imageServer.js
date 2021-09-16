import express from 'express';
import path from 'path';
import { fileURLToPath} from 'url';
const app = express();
const filename = fileURLToPath(import.meta.url);
const dir = path.dirname(filename);
app.use(express.static(dir));

app.listen(8000, function () {
    console.log('Listening on http://localhost:8000/');
});