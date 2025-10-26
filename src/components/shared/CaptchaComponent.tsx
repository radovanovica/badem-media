import { useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useTranslation } from 'next-i18next';

interface CaptchaProps {
    onSuccess: () => void;
}

const SingleCaptcha = (props: CaptchaProps) => {
    const { onSuccess } = props
    const { t } = useTranslation()
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [loading, setLoading] = useState(false); // State for button loading
    const [token, setToken] = useState<string | undefined>();

    const handleVerify = async () => {
        setLoading(true); // Show loading spinner
        if (!executeRecaptcha) return;
        const token = await executeRecaptcha('submit_form');
        if (token) {
            onSuccess()
            setToken(token)
            setLoading(false)
        }
        // Send the token to your server for verification
    };

    return <button
        className="group w-64 h-16 self-center sm:self-end border-2 border-white rounded-md bg-transparent overflow-hidden relative flex items-center justify-center z-10"
        onClick={handleVerify}
        disabled={loading || !!token}
    >
        {loading ? (
            <span>{t('common:loading')}
            </span>
        ) : (
            <>
                {token ? "✓ " : "⏹ "}
                {t('common:notRobot')}
            </>
        )}
    </button>;
}

const CaptchaComponent = (props: CaptchaProps) => {
    const { onSuccess } = props

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6LeC23AqAAAAALqwhqYKUehKveEBwY_H7Nmtl3HQ">
            <SingleCaptcha onSuccess={onSuccess} />
        </GoogleReCaptchaProvider>
    );
}

export default CaptchaComponent;