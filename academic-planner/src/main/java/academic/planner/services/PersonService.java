package academic.planner.services;

import academic.planner.entities.Person;
import academic.planner.repositories.PersonRepository;
import academic.planner.utiles.AcademicPlannerException;
import academic.planner.utiles.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PersonService {
    protected final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Person getById(Long id) {
        Optional<Person> optionalPerson = personRepository.findById(id);
        if(! optionalPerson.isPresent()) throw new AcademicPlannerException(ErrorCode.person_not_found, "Person not found with id => " + id);
        return optionalPerson.get();
    }

    public Person save(Person person) {
        return personRepository.save(person);
    }

    public List<Person> save(List<Person> persons) {
        List<Person> personsList = new ArrayList<Person>();
        for (Person person: persons) {
            personsList.add(personRepository.save(person));
        }
        return personsList;
    }

    public void delete(Person person) {
        personRepository.delete(person);
    }
}
