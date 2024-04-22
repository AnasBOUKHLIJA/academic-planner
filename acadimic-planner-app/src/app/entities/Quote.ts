import { BaseEntity } from "./BaseEntity"

export class Quote extends BaseEntity {
    author: string;
    quote: string;
}