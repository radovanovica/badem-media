export const pageView = () => {
    // @ts-ignore
    window.fbq('track', 'pageView');
};

export const event = (name: string, options = {}) => {
    // @ts-ignore
    window.fbq('track', name, options);
};
