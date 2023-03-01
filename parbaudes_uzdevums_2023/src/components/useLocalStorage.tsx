import { useState, useEffect } from "react";

function getStorageValue(key: any, defaultValue: any) {
    // getting stored value
    let saved = localStorage.getItem(key);
    let initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial || defaultValue;
}

export const useLocalStorage = (key: any, defaultValue: any) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}
