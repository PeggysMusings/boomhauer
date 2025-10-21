import { ImageEntry } from '../types/app.types'
import { fetchJson } from '../utils/utils'

export const fetchSearchResults = async (searchString: string): Promise<ImageEntry[]> => {
    // TODO: integrate with AWS lambda and ElasticSearch

    const data = fetchJson();
    const filteredData: ImageEntry[] = []
    data.forEach((entry) => {
        if (entry.quote.toLowerCase().includes(searchString.toLowerCase()))
        {
            filteredData.push(entry);
        }
    })

    return filteredData;
}

export const fetchRandomResult = async (): Promise<ImageEntry> => {
    // TODO: integrate with AWS lambda

    const data = fetchJson();
    const randIndex = Math.floor(Math.random() * data.length);
    return data[randIndex];
}