import sample_img from '../sample_img.jpeg'
import { ImageEntry } from '../types/app.types';

export const emptySelection: ImageEntry = {
    id: 0,
    episode: '',
    timestamp: 0,
    quote: '',
    url: '',
}

export function fetchJson(): ImageEntry[] {
    return (
        [
            {
                "id": 1823361,
                "episode": "S1E1",
                "timestamp": 297339,
                "quote": "Test quote 7",
                "url": sample_img
            },
            {
                "id": 1667122,
                "episode": "S1E2",
                "timestamp": 1250166,
                "quote": "Test quote 9",
                "url": sample_img
            },
            {
                "id": 1667233,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 1",
                "url": sample_img
            },
            {
                "id": 2667124,
                "episode": "S1E2",
                "timestamp": 1250166,
                "quote": "Test quote 125",
                "url": sample_img
            },
            {
                "id": 3667235,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 956",
                "url": sample_img
            },
            {
                "id": 4667126,
                "episode": "S1E2",
                "timestamp": 1250166,
                "quote": "Test quote 777",
                "url": sample_img
            },
            {
                "id": 5667237,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 987",
                "url": sample_img
            },
            {
                "id": 6667238,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 789",
                "url": sample_img
            },
            {
                "id": 7667239,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 541",
                "url": sample_img
            },
            {
                "id": 8667210,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 145",
                "url": sample_img
            },
            {
                "id": 9667211,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 321",
                "url": sample_img
            },
            {
                "id": 1067212,
                "episode": "S1E3",
                "timestamp": 1250166,
                "quote": "Test quote 123",
                "url": sample_img
            }
        ]
    );
};