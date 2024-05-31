package academic.planner.msg;

import academic.planner.entities.Promotion;
import academic.planner.entities.Schedule;

import java.util.List;

public class ScheduleRequest {

    private Promotion promotion;
    private List<Schedule> schedules;

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public List<Schedule> getSchedules() {
        return schedules;
    }

    public void setSchedules(List<Schedule> schedules) {
        this.schedules = schedules;
    }
}
