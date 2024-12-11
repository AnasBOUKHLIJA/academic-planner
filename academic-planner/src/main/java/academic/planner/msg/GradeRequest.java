package academic.planner.msg;

import academic.planner.entities.Course;
import academic.planner.entities.Grade;
import academic.planner.entities.Promotion;
import academic.planner.entities.Student;

import java.util.List;

public class GradeRequest {

    private Promotion promotion;
    private Student student;
    private Course course;
    private List<Grade> grades;

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public List<Grade> getGrades() {
        return grades;
    }

    public void setGrades(List<Grade> grades) {
        this.grades = grades;
    }
}
