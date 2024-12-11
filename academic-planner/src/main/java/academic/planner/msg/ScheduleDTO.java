package academic.planner.msg;

import academic.planner.entities.*;
import jakarta.persistence.*;

public class ScheduleDTO {

    private Long id;
    public Promotion promotion;
    public Course course;
    public ClassRoom classRoom;
    private String dayOfWeek;
    private String startTime;
    private String endTime;


    public void init(Schedule schedule) {
        this.id = schedule.getId();
        this.dayOfWeek = schedule.getDayOfWeek();
        this.startTime = schedule.getStartTime();
        this.endTime = schedule.getEndTime();
        this.classRoom = schedule.getClassRoom();

        if(schedule.getPromotion() != null) {
            this.promotion = new Promotion();
            this.promotion.setId(schedule.getPromotion().getId());
            this.promotion.setStartYear(schedule.getPromotion().getStartYear());
            this.promotion.setEndYear(schedule.getPromotion().getEndYear());
            this.promotion.setActualSemester(schedule.getPromotion().getActualSemester());
            this.promotion.setAcademicProgram(schedule.getPromotion().academicProgram);
        }

        if(schedule.getCourse() != null) {
            this.course = new Course();
            this.course.setId(schedule.getCourse().getId());
            this.course.setCode(schedule.getCourse().getCode());
            this.course.setTitle(schedule.getCourse().getTitle());
            this.course.setCreditHours(schedule.getCourse().getCreditHours());
            this.course.setSemester(schedule.getCourse().getSemester());
            this.course.setTeacher(new Teacher());
            this.course.getTeacher().setFirstName(schedule.getCourse().getTeacher().getFirstName());
            this.course.getTeacher().setLastName(schedule.getCourse().getTeacher().getLastName());
            this.course.getTeacher().setQualification(schedule.getCourse().getTeacher().getQualification());
        }

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public ClassRoom getClassRoom() {
        return classRoom;
    }

    public void setClassRoom(ClassRoom classRoom) {
        this.classRoom = classRoom;
    }

    public String getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(String dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
