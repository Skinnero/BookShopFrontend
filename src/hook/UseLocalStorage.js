/**
 * Hooks for managing local storage
 *
 * @param key
 * @return {{setLocalStorage: setLocalStorage, getLocalStorage: (function(): string), removeLocalStorage: removeLocalStorage}}
 */
export const useLocalStorage = (key) => {

    /**
     * Sets new value to local storage
     *
     * @param value
     */
    const setLocalStorage = (value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    /**
     * Removes item from local storage base on provided value
     */
    const removeLocalStorage = () => {
        localStorage.removeItem(key)
    }

    /**
     * Gets item from local storage, and parse it using JSON.parse()
     *
     * @return {String}
     */
    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem(key))
    }
    return {setLocalStorage, removeLocalStorage, getLocalStorage}
}