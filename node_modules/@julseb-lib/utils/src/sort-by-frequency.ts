/*=============================================== Sort by frequency ===============================================*/

/**
 * @description Sort array of strings by frequency of values
 * @param array: T[]
 * @example sortByFrequency(["Hello", "Foo", "baz", "hello", "heLlo", "foo"]) => hello, foo, baz
 */

export function sortByFrequency<T>(array: T[]): string[] {
    let frequency: any = {}
    let value: string

    for (let i = 0; i < array.length; i++) {
        value = (array[i] as any).toLowerCase()

        if (value in frequency) {
            frequency[value]++
        } else {
            frequency[value] = 1
        }
    }

    let uniques = []

    for (value in frequency) {
        uniques.push(value.toLowerCase())
    }

    const compareFrequency = (a: any, b: any) => {
        if (frequency[a] === frequency[b]) {
            return a - b
        }

        return frequency[b] - frequency[a]
    }

    return uniques.sort(compareFrequency)
}
