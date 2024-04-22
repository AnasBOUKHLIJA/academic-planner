import { BaseEntity } from "../BaseEntity";
import { ContentItem } from "./ContentItem";

export class Article extends BaseEntity {

    title: string;
    content: ContentItem[];
    thumbnail: string;
    description: string;
    author: string;
    date: string;
    tags: string[];

}