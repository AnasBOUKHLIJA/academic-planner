package academic.planner.repositories;

import academic.planner.entities.AcademicProgram;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademicProgramRepository extends JpaRepository<AcademicProgram, Long> {

}
