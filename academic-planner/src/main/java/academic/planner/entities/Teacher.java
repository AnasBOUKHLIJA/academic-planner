package academic.planner.entities;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue(value = "teacher")
public class Teacher extends Person{

    @Column(name = "qualification", nullable=false)
    private String qualification;

    @ManyToOne
    @JoinColumn(name="department_id", foreignKey=@ForeignKey(name="fk_teacher_department"), nullable=true)
    public Department department;

    //--------------------------------------------------------------------------------
    // GETTER AND SETTERS
    //--------------------------------------------------------------------------------

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }
}
