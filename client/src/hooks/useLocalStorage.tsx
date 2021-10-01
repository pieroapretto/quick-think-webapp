import { useEffect, useState } from "react";

const PREFIX = 'whatsapp-clone-';

export default function useLocalStorage(key: string, initValue: () => void | string) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const lsValue = localStorage.getItem(prefixedKey);

        if(lsValue) {
            return JSON.parse(lsValue);
        }
        if(typeof initValue === 'function') {
            return initValue()
        }
        else {
            return initValue;
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey,value])
}