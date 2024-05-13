package academic.planner.services;

import academic.planner.entities.Student;
import academic.planner.msg.Filter;
import academic.planner.repositories.StudentRepository;
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
public class StudentService {
    protected final StudentRepository studentRepository;
    protected final PersonService   personService;

    protected final ObjectUtils objectUtils;

    @Autowired
    public StudentService(StudentRepository studentRepository, PersonService personService, ObjectUtils objectUtils) {
        this.studentRepository = studentRepository;
        this.personService = personService;
        this.objectUtils = objectUtils;
    }

    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    public Page<Student> getStudents(Filter filter) {
        Pageable pageable   = objectUtils.constructPageable(filter);
        return studentRepository.findByFilter(filter.getUsername(), filter.getFirstName(), filter.getLastName(), filter.getLegalIdNumber(), filter.getApogeeCode(), filter.getStudentNationalCode(), pageable);
    }

    public Student getById(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(! optionalStudent.isPresent()) throw new AcademicPlannerException(ErrorCode.student_not_found, "Student not found with id => " + id);
        return optionalStudent.get();
    }

    public Student save(Student student) {
        String login = personService.generateUsername(student.getFirstName(), student.getLastName());
        student.setPassword(login);
        student.setUsername(login);
        return studentRepository.save(student);
    }

    public List<Student> save(List<Student> students) {
        List<Student> studentsList = new ArrayList<Student>();
        for (Student student: students) {
            studentsList.add(studentRepository.save(student));
        }
        return studentsList;
    }

    public void delete(Long id) {
        studentRepository.delete(getById(id));
    }


}
