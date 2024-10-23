/*=============================================== Get initials ===============================================*/

/**
 * @description Get initials of a full name
 * @param fullName: string
 * @example getInitials("John Doe") => JD
 */

export function getInitials(fullName: string): string {
    const splitted = fullName.split(" ")

    return `${splitted[0][0]}${splitted[splitted.length - 1][0]}`
}
