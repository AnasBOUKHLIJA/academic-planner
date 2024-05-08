package academic.planner.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue(value = "teacher")
public class Teacher extends Person{

}
