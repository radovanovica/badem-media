import { NextApiRequest, NextApiResponse } from 'next';
import { createChallenge } from 'altcha-lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const hmacKey = process.env.ALTCHA_HMAC_KEY || 'default-secret-key';
        
        // Use altcha-lib to create a proper challenge following the documentation
        const challenge = await createChallenge({
            hmacKey,
            maxNumber: 100000, // the maximum random number
        });

        console.log('Generated challenge:', challenge);
        res.status(200).json(challenge);
    } catch (error) {
        console.error('Challenge generation error:', error);
        res.status(500).json({ error: 'Failed to generate challenge' });
    }
}