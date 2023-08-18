import { ISearchResultProps } from "../types/app.types";

import sample_img from '../../assets/sample_img.jpg';

export function fetchJson(): ISearchResultProps[] {
    return(
        [
            {
                "id":1823368,
                "episode":"S1E1",
                "timestamp":297339,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":1667129,
                "episode":"S1E2",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":1667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":2667129,
                "episode":"S1E2",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":3667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":4667129,
                "episode":"S1E2",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":5667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":6667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":7667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":8667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":9667239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            },
            {
                "id":1067239,
                "episode":"S1E3",
                "timestamp":1250166,
                "quote": "Test quote",
                "url": sample_img
            }
        ]
    );
  };

// Activate when on the web
// async function fetchJson(): Promise<ISearchResultProps[]> {
//     const response = await fetch('http://localhost:3000/src/test-content.json');
//     const data = await response.json();
//     return data || [];
//   };