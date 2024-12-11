import { Course } from "./Course";
import { Grade } from "./Grade";
import { Promotion } from "./Promotion";
import { Student } from "./Student";

export class GradeRequest {

    promotion: Promotion;
    student: Student;
    course: Course;
    grades : Grade[];
}