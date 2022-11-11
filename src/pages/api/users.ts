import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Guilherme'},
        { id: 2, name: 'Carlos'},
        { id: 3, name: 'Gabriel'}
    ]

    return response.json(users);
}