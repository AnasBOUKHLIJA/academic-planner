import { AcademicProgram } from "./AcademicProgram";
import { PromotionCourse } from "./PromotionCourse";
import { Semester } from "./Semester";

export class Promotion {

    id: number;
    academicProgram: AcademicProgram;
    actualSemester: Semester;
    startYear: Date;
    endYear: Date;
    promotionCourses : PromotionCourse[];

}