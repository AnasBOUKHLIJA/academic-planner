import { PromotionCourse } from "./PromotionCourse";
import { Registration } from "./Registration";
import { Schedule } from "./Schedule";

export class RegistrationWithSchedules {
    registration: Registration;
    schedules: Schedule[];
    schedule: { [key: string]: any[] } = {};
}