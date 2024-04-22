import { BaseEntity } from "./BaseEntity";

export class WorkExperience extends BaseEntity {

    title: string;
    description: string;
    name: string;
    type: string;
    link: string;
    thumbnail: string;
    startDate: Date;
    endDate: Date;
    location: string;
    skills: string[];

}