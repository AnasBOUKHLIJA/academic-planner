package academic.planner.msg;

import academic.planner.entities.AcademicProgram;
import academic.planner.entities.Promotion;
import academic.planner.entities.PromotionCourse;
import academic.planner.entities.Semester;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PromotionDTO {

    private Long id;
    private AcademicProgram academicProgram;
    private Semester actualSemester;
    private Date startYear;
    private Date endYear;
    private List<PromotionCourse> promotionCourses;

    public void init(Promotion promotion){
        this.id = promotion.getId();
        this.academicProgram = promotion.getAcademicProgram();
        this.actualSemester = promotion.getActualSemester();
        this.startYear = promotion.getStartYear();
        this.endYear = promotion.getEndYear();

        if ((promotion.getPromotionCourses() != null) && (! promotion.getPromotionCourses().isEmpty())) {
            List<PromotionCourse> promotionCourseList = promotion.getPromotionCourses();
            for (PromotionCourse promotionCourse: promotionCourseList ) {
                promotionCourse.getCourse().setAcademicProgram(null);
                promotionCourse.getCourse().getTeacher().setCitizenship(null);
                promotionCourse.setPromotion(null);
            }
            this.promotionCourses = promotionCourseList;
        }

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public AcademicProgram getAcademicProgram() {
        return academicProgram;
    }

    public void setAcademicProgram(AcademicProgram academicProgram) {
        this.academicProgram = academicProgram;
    }

    public Semester getActualSemester() {
        return actualSemester;
    }

    public void setActualSemester(Semester actualSemester) {
        this.actualSemester = actualSemester;
    }

    public Date getStartYear() {
        return startYear;
    }

    public void setStartYear(Date startYear) {
        this.startYear = startYear;
    }

    public Date getEndYear() {
        return endYear;
    }

    public void setEndYear(Date endYear) {
        this.endYear = endYear;
    }

    public List<PromotionCourse> getPromotionCourses() {
        return promotionCourses;
    }

    public void setPromotionCourses(List<PromotionCourse> promotionCourses) {
        this.promotionCourses = promotionCourses;
    }
}
