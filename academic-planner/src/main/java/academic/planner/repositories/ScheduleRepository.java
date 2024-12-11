package academic.planner.repositories;

import academic.planner.entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    void deleteByPromotionId(Long promotionId);

    List<Schedule> findByPromotionId(Long promotionId);

    List<Schedule> findByCourseTeacherId(Long teacherId);

}
