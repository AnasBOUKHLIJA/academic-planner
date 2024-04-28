package academic.planner.services;

import academic.planner.entities.Course;
import academic.planner.repositories.CourseRepository;
import academic.planner.utiles.AcademicPlannerException;
import academic.planner.utiles.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    protected final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public List<Course> getAll() {
        return courseRepository.findAll();
    }

    public Course getById(Long id) {
        Optional<Course> optionalCourse = courseRepository.findById(id);
        if(! optionalCourse.isPresent()) throw new AcademicPlannerException(ErrorCode.course_not_found, "Course not found with id => " + id);
        return optionalCourse.get();
    }

    public Course getByCode(String code) {
        Optional<Course> optionalCourse = courseRepository.findByCode(code);
        if(! optionalCourse.isPresent()) throw new AcademicPlannerException(ErrorCode.course_not_found, "Course not found with code => " + code);
        return optionalCourse.get();
    }

    public Course save(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> save(List<Course> courses) {
        List<Course> coursesList = new ArrayList<Course>();
        for (Course Course: courses) {
            coursesList.add(courseRepository.save(Course));
        }
        return coursesList;
    }

    public void delete(Long id) {
        courseRepository.delete(this.getById(id));
    }
}
