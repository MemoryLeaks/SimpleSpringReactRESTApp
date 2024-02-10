/**
 * Function that returns an aray with all the errors happen in the WebUser's for (in SPA-Edit and Create mode).
 * @param {JSON} webUser JSON Object that contains the Web User's data.
 * @returns A string array with the errors.
 */
export const validateWebUserObject = function (webUser) {
    const errorLog = [];

    // Name validation
    let firstName = webUser.name;
    if (firstName === null || firstName.length === 0) {
        errorLog.push("User's name cannot be empty");
    }
    if (/[^a-zA-Z]/.test(firstName)) {
        errorLog.push("User's name must contains only letters");
    }

    // Surname validation
    let lastName = webUser.surname;
    if (lastName === null || lastName.length === 0) {
        errorLog.push("User's surname cannot be empty");
    }
    if (/[^a-zA-Z]/.test(lastName)) {
        errorLog.push("User's surname must contains only letters");
    }

    // Birthdate validation
    let birthDate = webUser.birthDate;
    if (birthDate === null || birthDate === "") {
        errorLog.push("User's birthdate is empty.");
    }

    // Gender validation
    let gender = webUser.gender;
    if (gender === null || gender === "") {
        errorLog.push("User's gender is empty.");
    }
    if (gender !== "M" && gender !== "F") {
        errorLog.push("In this Application User's gender must be either Male or Female.");
    }

    // Home and Work address is optional and there are no strict rules about them.
    return errorLog;
}