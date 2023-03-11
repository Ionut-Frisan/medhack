
const useLocalStorage = () => {
    const get = (key, defaultValue = '') => {
        const jsonValue = localStorage.getItem(key);
        if (!jsonValue) return defaultValue;
        try {
            return JSON.parse(jsonValue);
        } catch(e) {
            return defaultValue;
        }
    }
    const set = (key, value) => {
        try {
            const jsonValue = JSON.stringify(value);
            localStorage.setItem(key, jsonValue);
        } catch(e){
            console.error('Invalid JSON: ', value);
        }
    }
    return { get, set };
};

export default useLocalStorage;