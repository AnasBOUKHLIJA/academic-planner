package academic.planner.services;

import academic.planner.entities.Student;
import academic.planner.repositories.StudentRepository;
import academic.planner.utiles.AcademicPlannerException;
import academic.planner.utiles.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    protected final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    public Student getById(Long id) {
        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(! optionalStudent.isPresent()) throw new AcademicPlannerException(ErrorCode.student_not_found, "Student not found with id => " + id);
        return optionalStudent.get();
    }

    public Student save(Student student) {
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
