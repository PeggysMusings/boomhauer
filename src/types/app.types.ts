export interface ISearchBarProps {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ISearchProps {
    results: ISearchResultProps[]
};

export interface ISearchResultItemProps {
    result: ISearchResultProps;
};

export interface ISearchResultProps {
    id: number;
    episode: string;
    timestamp: number;
    quote: string; 
    url: string;
};

export interface SelectedImgProps {
    id: number;
    episode: String;
    timestamp: number;
    quote: String;
    url: String;
};