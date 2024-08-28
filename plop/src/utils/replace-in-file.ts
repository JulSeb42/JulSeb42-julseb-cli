/**
 * @deprecated
 * @param path Path to file
 * @param pattern String to replace
 * @param template String replacing pattern
 * @param isUrl True if the pattern or template contain a /
 */

export function replaceStringInFile(
    path: string,
    pattern: string,
    template: string,
    isUrl?: boolean
) {
    const separator = isUrl ? "|" : "/"
    return `sed -i -e "s${separator}${pattern}${separator}${template}${separator}g" ${path} && rm -rf ${path}-e`
}

// sed -i -e "s/vite-rest/$1/g" client/package.json
// rm client/package.json-e
