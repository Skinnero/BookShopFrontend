import Cookies from "js-cookie"

/**
 * Hook for managing cookies
 *
 * @param {String} name - name of a cookie
 * @return {{removeCookie: removeCookie, setCookie: setCookie}}
 */
/**
 *
 * @param key
 * @return {{removeCookie: removeCookie, setCookie: setCookie, getCookie: (function(): *)}}
 */
export const useJsCookie = (key) => {

    /**
     * Sets a new value for a cookie
     *
     * @param cookieValue
     */
    const setCookie = (cookieValue) => {
        Cookies.set(key, JSON.stringify(cookieValue))
    }

    /**
     * Removes a cookie
     *
     */
    const removeCookie = () => {
        Cookies.remove(key)
    }

    /**
     * Gets a cookie value
     */
    const getCookie = () => {
        try {
            return JSON.parse(Cookies.get(key))
        } catch (err) {
            return Cookies.get(key)
        }
    }

    return {setCookie, removeCookie, getCookie}
}