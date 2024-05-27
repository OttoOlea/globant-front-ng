export interface Comic {
    resourceURI: string
    name: string
}

export interface Image {
    path: string
    extension: string
}

export interface Serie {
    name: string
    resourceURI: string
}

export interface TreeDetail {
    name: string,
    Serie?: TreeDetail[]
    Comic?: TreeDetail[]
}

