package academic.planner.repositories;

import academic.planner.entities.Promotion;
import academic.planner.entities.PromotionCourse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PromotionCourseRepository extends JpaRepository<PromotionCourse, Long> {
    void deleteByPromotionId(Long promotionId);
    List<PromotionCourse> findByPromotionId(Long promotionId);
    List<PromotionCourse> findByCourseId(Long courseId);

}
