export const validateMobile = (mobile) => {
    const mobileRegex = /^[0-9]{10}$/; // Example regex for a 10-digit mobile number
    return mobileRegex.test(mobile);
};

export const validatePassword = (password) => {
    // Example password validation: at least 6 characters
    return password.length >= 4;
};