import { ClassRoom } from "./ClassRoom";
import { Course } from "./Course";
import { Promotion } from "./Promotion";

export class Schedule {
    id: number;
    course: Course;
    promotion: Promotion;
    classRoom: ClassRoom;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
}