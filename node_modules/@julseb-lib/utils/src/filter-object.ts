/*=============================================== Filter object ===============================================*/

type Entry<T> = {
    [K in keyof T]: [K, T[K]]
}[keyof T]

/**
 * @description Filter any object by value
 * @param object: T
 * @param callback: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
 * @example filterObject({ id: 0, name: null }, ([_, v]) => v !== null) => { id: 0 }
 */

export function filterObject<T extends object>(
    object: T,
    callback: (entry: Entry<T>, i: number, arr: Entry<T>[]) => boolean
): Partial<T> {
    const next = { ...object }

    const entries: Entry<T>[] = []

    for (const key in object) {
        entries.push([key, object[key]])
    }

    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i]
        if (!callback(entry, i, entries)) {
            delete next[entry[0]]
        }
    }

    return next
}
