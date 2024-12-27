export interface Image {
    id: string,
    urls: {
        thumb: string;
        small: string;
        regular: string;
    }
    alt_description: string,
    user: {
        name: string;
    };
    likes: number;
}