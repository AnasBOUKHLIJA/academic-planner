package academic.planner.repositories;

import academic.planner.entities.Person;
import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findByUsernameContaining(String username);

    List<Person> findByProfileCode(String code);

}
