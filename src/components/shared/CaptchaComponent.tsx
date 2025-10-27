import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

interface CaptchaProps {
    onSuccess: () => void;
}

const CaptchaComponent = (props: CaptchaProps) => {
    const { onSuccess } = props;
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [verified, setVerified] = useState(false);
    const [challenge, setChallenge] = useState<any>(null);

    useEffect(() => {
        fetchChallenge();
    }, []);

    const fetchChallenge = async () => {
        try {
            const response = await fetch('/api/challenge');
            const data = await response.json();
            setChallenge(data);
            console.log('Challenge loaded:', data);
        } catch (error) {
            console.error('Failed to fetch challenge:', error);
        }
    };

    const handleCheckboxClick = async () => {
        if (!challenge || loading || verified) return;

        console.log('Starting proof of work...');
        setLoading(true);

        try {
            // Solve the altcha challenge using proof-of-work
            let number = 0;
            let found = false;
            const maxNumber = challenge.maxnumber || challenge.maxNumber || 100000;

            while (!found && number <= maxNumber) {
                // Create the string to hash: salt + number
                const testString = challenge.salt + number;
                const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(testString));
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

                // Check if the hash matches the challenge (typically starts with zeros)
                if (hashHex === challenge.challenge) {
                    console.log('Solution found:', number);

                    // Create the payload in the format expected by altcha-lib
                    const payload = {
                        algorithm: challenge.algorithm,
                        challenge: challenge.challenge,
                        number: number,
                        salt: challenge.salt,
                        signature: challenge.signature
                    };

                    // Verify the solution with our backend
                    const verifyResponse = await fetch('/api/verify', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            payload: payload
                        })
                    });

                    const verifyResult = await verifyResponse.json();
                    console.log('Verification result:', verifyResult);

                    if (verifyResult.verified) {
                        setVerified(true);
                        onSuccess();
                        found = true;
                    } else {
                        console.error('Verification failed');
                    }
                    break;
                }
                number++;

                // Add small delay every 1000 iterations to prevent blocking UI
                if (number % 1000 === 0) {
                    await new Promise(resolve => setTimeout(resolve, 1));
                }
            }

            if (!found) {
                console.log('No solution found within max number:', maxNumber);
            }
        } catch (error) {
            console.error('Failed to solve challenge:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            {!verified && <div className="group w-64 h-16 self-center sm:self-end border-2 border-white rounded-md bg-transparent overflow-hidden relative flex items-center justify-center z-10">
                <div className="flex items-center space-x-2">
                    {!loading && <input
                        type="checkbox"
                        checked={verified}
                        disabled={loading || verified || !challenge}
                        onClick={handleCheckboxClick}
                        readOnly
                        className="w-4 h-4 cursor-pointer"
                    />}
                    <span className="text-white text-sm">
                        {loading ? t('common:loading') : t('common:notRobot')}
                        {loading && (
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full animate-pulse w-2"></div>
                            </div>
                        )}
                    </span>
                </div>

            </div>}
            {verified && (
                <span className="text-white text-sm">✓ {t('common:notRobot')}</span>
            )}
        </div>
    );
};

export default CaptchaComponent;