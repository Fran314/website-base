import path from 'path'
import dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, '..', '.env') });
import express from 'express'
import subapi from './routes/subapi'

const app = express();
app.use('/subapi', subapi);

app.get('/', (req, res) => {
	res.send(':)');
});

app.listen(process.env.PORT, () => console.log(`Server listening on ${process.env.PORT}`));