import { useState, useEffect } from "react";

/**
 * Custom hook to handle localStorage persistence with SSR support.
 * @param key The key to store data under in localStorage.
 * @param initialValue The initial value if no data exists in localStorage.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
    // Initialize with the standard initialValue (consistency for SSR)
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    // Load data from localStorage *after* the component has mounted on the client
    useEffect(() => {
        try {
            const item = window.localStorage.getItem(key);
            if (item) {
                setStoredValue(JSON.parse(item));
            }
        } catch (error) {
            console.warn(`Error reading localStorage key "${key}":`, error);
        }
    }, [key]);

    // Wrapper function to update both state and localStorage
    const setValue = (value: T | ((val: T) => T)) => {
        setStoredValue((prev) => {
            const valueToStore =
                typeof value === "function"
                    ? (value as (val: T) => T)(prev)
                    : value;

            try {
                if (typeof window !== "undefined") {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                }
            } catch (error) {
                console.warn(`Error writing localStorage key "${key}":`, error);
            }

            return valueToStore;
        });
    };

    return [storedValue, setValue] as const;
}
