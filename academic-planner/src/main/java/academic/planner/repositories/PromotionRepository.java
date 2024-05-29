package academic.planner.repositories;


import academic.planner.entities.Course;
import academic.planner.entities.Promotion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PromotionRepository extends JpaRepository<Promotion, Long> {

    List<Promotion> findByAcademicProgramCode(String academicProgramCode);

}
