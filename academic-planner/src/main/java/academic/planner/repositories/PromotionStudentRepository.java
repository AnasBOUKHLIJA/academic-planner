package academic.planner.repositories;


import academic.planner.entities.PromotionStudent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PromotionStudentRepository extends JpaRepository<PromotionStudent, Long> {

}
