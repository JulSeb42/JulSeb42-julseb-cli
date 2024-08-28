/*=============================================== ImageUploader types ===============================================*/

import type { ILibInputImage } from "@julseb-lib/react/component-props"

enum inputSizes {
    small,
    large,
}

export type IInputImageSize = keyof typeof inputSizes

export interface IImageUploader extends ILibInputImage {
    setImageUrl: (imageUrl: string) => void
    setIsLoading: (isLoading: boolean) => void
}
