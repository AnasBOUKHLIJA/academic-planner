package academic.planner.repositories;

import academic.planner.entities.LegalIdType;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LegalIdTypeRepository extends JpaRepository<LegalIdType, Long> {

}
