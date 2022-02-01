let cache = [];

export const getPersistedData = key => {
    let data = cache[key];

    if (!data) {
        data = localStorage.getItem(key);

        if (data) {
            cache[key] = data;
        }
    }

    return JSON.parse(data);
};

export const setPersistedData = (key, data) => {
    let sanitizedData = data;

    if (data != null && typeof data === 'object') {
        sanitizedData = JSON.stringify(sanitizedData);
    }

    localStorage.setItem(key, sanitizedData);
};
