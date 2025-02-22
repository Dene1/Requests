export const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15) +
        Date.now().toString(36);
};

// export const NEW_CASE_ID = generateUniqueId()
