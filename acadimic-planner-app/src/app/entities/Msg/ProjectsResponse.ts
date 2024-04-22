import { BaseResponse } from "./BaseResponse";
import { Project } from "../Entities/Project";

export class ProjectsResponse extends BaseResponse{
    projects: Project[];
    project: Project;
}