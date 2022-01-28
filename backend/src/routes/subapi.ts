import express from 'express'

const router = express.Router();

router.get('/', (req, res) => {
	res.send('some meaningful data');
});

export default router;