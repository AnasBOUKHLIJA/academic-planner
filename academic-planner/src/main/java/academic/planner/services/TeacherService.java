package academic.planner.services;

import academic.planner.entities.Teacher;
import academic.planner.repositories.TeacherRepository;
import academic.planner.utiles.AcademicPlannerException;
import academic.planner.utiles.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    protected final TeacherRepository teacherRepository;
    protected final PersonService   personService;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository, PersonService   personService) {
        this.teacherRepository = teacherRepository;
        this.personService = personService;
    }

    public List<Teacher> getAll() {
        return teacherRepository.findAll();
    }

    public Teacher getById(Long id) {
        Optional<Teacher> optionalTeacher = teacherRepository.findById(id);
        if(! optionalTeacher.isPresent()) throw new AcademicPlannerException(ErrorCode.teacher_not_found, "Teacher not found with id => " + id);
        return optionalTeacher.get();
    }

    public Teacher save(Teacher teacher) {
        String login = personService.generateUsername(teacher.getFirstName(), teacher.getLastName());
        teacher.setPassword(login);
        teacher.setUsername(login);
        return teacherRepository.save(teacher);
    }

    public List<Teacher> save(List<Teacher> teachers) {
        List<Teacher> teachersList = new ArrayList<Teacher>();
        for (Teacher teacher: teachers) {
            teachersList.add(teacherRepository.save(teacher));
        }
        return teachersList;
    }

    public void delete(Long id) {
        teacherRepository.delete(getById(id));
    }


}
