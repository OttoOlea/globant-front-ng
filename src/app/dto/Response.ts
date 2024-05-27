import { Comic, Serie, Image } from "./EntityUtil";


export interface ResponseGlobant {
    total: number
    count: number
    limit: number
    resultList: Character[]
}

export interface Character {
    id: number;
    name: string;
    description: string;
    image: Image;
    comics: Comic[];
    series: Serie[];
}