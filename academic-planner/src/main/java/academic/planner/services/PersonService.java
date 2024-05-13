package academic.planner.services;

import academic.planner.entities.Person;
import academic.planner.msg.Filter;
import academic.planner.repositories.PersonRepository;
import academic.planner.utils.AcademicPlannerException;
import academic.planner.utils.ErrorCode;
import academic.planner.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PersonService {
    protected final PersonRepository personRepository;
    protected final ObjectUtils objectUtils;

    @Autowired
    public PersonService(PersonRepository personRepository, ObjectUtils objectUtils) {
        this.personRepository = personRepository;
        this.objectUtils = objectUtils;
    }

    public List<Person> getAll() {
        return personRepository.findAll();
    }

    public Page<Person> getPersons(Filter filter) {
        Pageable pageable   = objectUtils.constructPageable(filter);
        return personRepository.findByFilter(filter.getUsername(), filter.getFirstName(), filter.getLastName(), filter.getLegalIdNumber(), filter.getProfileCode(), pageable);
    }

    public Person getById(Long id) {
        Optional<Person> optionalPerson = personRepository.findById(id);
        if(! optionalPerson.isPresent()) throw new AcademicPlannerException(ErrorCode.person_not_found, "Person not found with id => " + id);
        return optionalPerson.get();
    }

    public Person save(Person person) {
        String login = generateUsername(person.getFirstName(), person.getLastName());
        person.setPassword(login);
        person.setUsername(login);
        return personRepository.save(person);
    }

    public List<Person> save(List<Person> persons) {
        List<Person> personsList = new ArrayList<Person>();
        for (Person person: persons) {
            personsList.add(personRepository.save(person));
        }
        return personsList;
    }

    public void delete(Long id) {
        personRepository.delete(getById(id));
    }

    public String generateUsername(String firstName, String lastName){
        String[] firstNameParts = firstName.toLowerCase().split(" ");
        String[] lastNameParts = lastName.toLowerCase().split(" ");

        StringBuilder usernameBuilder = new StringBuilder();
        for (String part : firstNameParts) {
            usernameBuilder.append(part).append(".");
        }
        for (String part : lastNameParts) {
            usernameBuilder.append(part).append(".");
        }

        if (usernameBuilder.length() > 0) {
            usernameBuilder.deleteCharAt(usernameBuilder.length() - 1);
        }

        // Check if this combination firstName and lastName already exists
        String username = usernameBuilder.toString();
        List<Person> persons = personRepository.findByUsernameContaining(username);
        if(persons.size() > 0) username += "."+ persons.size();

        return username;
    }
}
