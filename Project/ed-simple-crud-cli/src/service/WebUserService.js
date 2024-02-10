import axios from "axios";

/**
 * GET Request function that returns all the web users from the system.
 * @returns The JSON response that contains the web users.
 */
export const webUserService = function () {
    let response = axios.get("http://localhost:8080/api/webuser");
    return response;
}

/**
 * POST Request function that creates one user entry and adds it to the system.
 * @param {JSON} webUser The Web User JSON Object with the data.
 * @returns The JSON response that contains the new web user object.
 */
export const webUserCreateService = function(webUser) {
    let response = axios.post("http://localhost:8080/api/webuser", webUser);
    return response;
}

/**
 * GET Request function that returns one web users from the system.
 * @param {*} id The Web User id.
 * @returns The JSON response that contains the web user object.
 */
export const webUserById = function(id) {
    let response = axios.get("http://localhost:8080/api/webuser/" + id);
    return response;
}

/**
 * PUT Request function that updates one user from the system.
 * @param {*} id The Web User id.
 * @param {JSON} webUser The Web User JSON Object with the data.
 * @returns The JSON response that contains the updated web user object.
 */
export const webUserEditService = function(id, webUser) {
    let response = axios.put("http://localhost:8080/api/webuser/" + id, webUser);
    return response;
}

/**
 * DELETE Request function that deleltes one user from the system given his id.
 * @param {*} id The Web User id.
 * @returns The JSON response that contains the deleted web user object.
 */
export const webUserDeleteService = function(id) {
    let response = axios.delete("http://localhost:8080/api/webuser/" + id);
    return response;
}