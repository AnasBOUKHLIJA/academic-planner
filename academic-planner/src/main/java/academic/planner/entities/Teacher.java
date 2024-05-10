package academic.planner.entities;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue(value = "teacher")
public class Teacher extends Person{

    @Column(name = "qualification", nullable=false)
    private String qualification;

    @ManyToOne
    @JoinColumn(name="department_id", foreignKey=@ForeignKey(name="fk_teacher_department"), nullable=false)
    public Department department;
}
