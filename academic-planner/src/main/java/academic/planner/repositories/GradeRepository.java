package academic.planner.repositories;

import academic.planner.entities.Grade;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {

    void deleteByPromotionIdAndCourseId(Long promotionId, Long courseId);
    List<Grade> findByPromotionIdAndCourseId(Long promotionId, Long courseId);
}
