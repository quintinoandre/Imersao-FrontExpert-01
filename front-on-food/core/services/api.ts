import axios from 'axios';

const { TOKEN } = process.env;

const api = axios.create({
	baseURL: 'https://api.imersaofx.danieldcs.com/',
	headers: {
		Authorization: `Bearer ${TOKEN}`,
	},
});

export { api };
