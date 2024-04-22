import { BaseEntity } from "./BaseEntity";

export class Project  extends BaseEntity {

    name: string;
    description: string;
    link: string;
    repository: string;
    thumbnail: string;
    pics: string[];
    technologies: string[];
    date: Date;

}

