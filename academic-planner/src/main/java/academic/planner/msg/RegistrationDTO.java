package academic.planner.msg;

import academic.planner.entities.AcademicProgram;
import academic.planner.entities.Promotion;
import academic.planner.entities.Registration;
import academic.planner.entities.Student;

import java.util.Date;

public class RegistrationDTO {

    private Long id;
    private Student student;
    private Promotion promotion;
    private Date registrationDate;

    public void init(Registration registration) {
        this.id = registration.getId();
        this.registrationDate = registration.getRegistrationDate();

        if(registration.getStudent() != null) {
            this.student = new Student();
            this.student.setId(registration.getStudent().getId());
            this.student.setFirstName(registration.getStudent().getFirstName());
            this.student.setLastName(registration.getStudent().getLastName());
            this.student.setApogeeCode(registration.getStudent().getApogeeCode());
            this.student.setStudentNationalCode(registration.getStudent().getStudentNationalCode());
            this.student.setBirthDate(registration.getStudent().getBirthDate());
            this.student.setThumbnail(registration.getStudent().getThumbnail());
        }

        if(registration.getPromotion() != null) {
            this.promotion = new Promotion();
            this.promotion.setId(registration.getPromotion().getId());
            this.promotion.setStartYear(registration.getPromotion().getStartYear());
            this.promotion.setEndYear(registration.getPromotion().getEndYear());

            if(registration.getPromotion().getAcademicProgram() != null){
                this.promotion.setAcademicProgram(new AcademicProgram());
                this.promotion.getAcademicProgram().setId(registration.getPromotion().getAcademicProgram().getId());
                this.promotion.getAcademicProgram().setCode(registration.getPromotion().getAcademicProgram().getCode());
                this.promotion.getAcademicProgram().setName(registration.getPromotion().getAcademicProgram().getName());
            }
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }
}
