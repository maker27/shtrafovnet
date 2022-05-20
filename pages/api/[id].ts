import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        const fineId = req.query.id.toString();
        const { data } = await axios({
            method: 'GET',
            url: `${process.env.API_URL}/${fineId}`,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        res.json(data);
    } catch (e) {
        if (axios.isAxiosError(e) && e.response?.status === 404) {
            return res.status(404).end();
        }
        res.status(500).end();
    }
}
