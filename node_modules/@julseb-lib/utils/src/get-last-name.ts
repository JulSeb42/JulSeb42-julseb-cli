/*=============================================== Get last name ===============================================*/

/**
 * @description Get last name of a full name
 * @param fullName string
 * @example getLastName("John Doe") => Doe
 */

export function getLastName(fullName: string): string {
    const split = fullName.split(" ")
    return split[split.length - 1]
}
