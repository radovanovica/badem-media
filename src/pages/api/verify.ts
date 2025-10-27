import { NextApiRequest, NextApiResponse } from 'next';
import { verifySolution } from 'altcha-lib';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { payload } = req.body;

        if (!payload) {
            return res.status(400).json({ error: 'Missing payload' });
        }

        console.log('Received payload for verification:', payload);

        const hmacKey = process.env.ALTCHA_HMAC_KEY || 'default-secret-key';
        
        // When submitted, verify the payload following the documentation:
        const ok = await verifySolution(payload, hmacKey);

        console.log('Verification result:', ok);

        res.status(200).json({ verified: ok });
    } catch (error) {
        console.error('Verification error:', error);
        res.status(500).json({ 
            error: 'Failed to verify solution', 
            details: error instanceof Error ? error.message : 'Unknown error' 
        });
    }
}