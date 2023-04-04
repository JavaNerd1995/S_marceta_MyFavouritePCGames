export interface IContent {
    id: number | undefined;
    title: string;
    description: string;
    author: string;
    imgSrc: string;
    type: string;
    tags?: string[];
}
