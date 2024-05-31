package academic.planner.controllers;

import academic.planner.entities.Course;
import academic.planner.msg.RegistrationDTO;
import academic.planner.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/teacher")
public class TeacherController {

    private final CountryService countryService;
    private final CityService cityService;
    private final UniversityService universityService;
    private final EstablishmentService establishmentService;
    private final DepartmentService departmentService;
    private final ClassRoomService            classRoomService;
    private final DegreeService               degreeService;
    private final AcademicProgramService      academicProgramService;
    private final PromotionService            promotionService;
    private final SemesterService             semesterService;
    private final CourseService               courseService;
    private final LegalIdTypeService          legalIdTypeService;
    private final StudentService              studentService;
    private final RegistrationService registrationService;
    private final GradeService                gradeService;
    private final ScheduleService             scheduleService;


    @Autowired
    public TeacherController(CountryService countryService, CityService cityService, UniversityService universityService,
                             EstablishmentService establishmentService, DepartmentService departmentService, ClassRoomService classRoomService,
                             DegreeService degreeService, AcademicProgramService academicProgramService, PromotionService promotionService,
                             SemesterService semesterService, CourseService courseService, LegalIdTypeService legalIdTypeService, StudentService studentService,
                             RegistrationService registrationService, GradeService gradeService, ScheduleService scheduleService) {
        this.countryService = countryService;
        this.cityService = cityService;
        this.universityService = universityService;
        this.establishmentService = establishmentService;
        this.departmentService = departmentService;
        this.classRoomService = classRoomService;
        this.degreeService = degreeService;
        this.academicProgramService = academicProgramService;
        this.promotionService = promotionService;
        this.semesterService = semesterService;
        this.courseService = courseService;
        this.legalIdTypeService = legalIdTypeService;
        this.studentService = studentService;
        this.registrationService = registrationService;
        this.gradeService = gradeService;
        this.scheduleService = scheduleService;
    }

    @GetMapping(
            value = "/CoursesGet/{teacherId}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Course>> CoursesGet(@PathVariable Long teacherId) {
        return new ResponseEntity<>(courseService.getTeacherCourses(teacherId), HttpStatus.OK);
    }
}
