package academic.planner.entities;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class PromotionCourse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable=false)
    private Long id;

    @ManyToOne
    @JoinColumn(name="promotion_id", foreignKey=@ForeignKey(name="fk_promotion_course_promotion"), nullable=false)
    public Promotion promotion;

    @ManyToOne
    @JoinColumn(name="course_id", foreignKey=@ForeignKey(name="fk_promotion_course_course"), nullable=false)
    public Course course;

    @Column(name = "created_at", nullable=false)
    private Date createdAt = new Date();

    //--------------------------------------------------------------------------------
    // GETTER AND SETTERS
    //--------------------------------------------------------------------------------

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

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }
}
