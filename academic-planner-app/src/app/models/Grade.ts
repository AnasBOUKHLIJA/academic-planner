import { Course } from "./Course";
import { Promotion } from "./Promotion";
import { Student } from "./Student";

export class Grade {

    id: number | null;
    promotion: Promotion;
    student: Student;
    course: Course;
    grade: number;

}