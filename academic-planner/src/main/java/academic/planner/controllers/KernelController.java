package academic.planner.controllers;

import academic.planner.entities.Country;
import academic.planner.entities.LegalIdType;
import academic.planner.entities.Profile;
import academic.planner.entities.University;
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
@RequestMapping("/kernel")
public class KernelController {

    private final CountryService              countryService;
    private final CityService                 cityService;
    private final UniversityService           universityService;
    private final EstablishmentService        establishmentService;
    private final DepartmentService           departmentService;
    private final ClassRoomService            classRoomService;
    private final DegreeService               degreeService;
    private final AcademicProgramService      academicProgramService;
    private final PromotionService            promotionService;
    private final SemesterService             semesterService;
    private final CourseService               courseService;
    private final LegalIdTypeService          legalIdTypeService;
    private final ProfileService                profileService;
    private final StudentService              studentService;
    private final RegistrationService registrationService;
    private final GradeService                gradeService;
    private final ScheduleService             scheduleService;

    @Autowired
    public KernelController(CountryService countryService, CityService cityService, UniversityService universityService,
                            EstablishmentService establishmentService, DepartmentService departmentService, ClassRoomService classRoomService,
                            DegreeService degreeService, AcademicProgramService academicProgramService, PromotionService promotionService,
                            SemesterService semesterService, CourseService courseService, LegalIdTypeService legalIdTypeService, ProfileService profileService,
                            StudentService studentService, RegistrationService registrationService, GradeService gradeService, ScheduleService scheduleService) {
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
        this.profileService = profileService;
        this.studentService = studentService;
        this.registrationService = registrationService;
        this.gradeService = gradeService;
        this.scheduleService = scheduleService;
    }

    @GetMapping(
            value = "/countryGet/{code}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Country> countriesGet(@PathVariable String code) {
        return new ResponseEntity<>(countryService.getByCode(code), HttpStatus.OK);
    }

    @GetMapping(
            value = "/universityGet/{code}",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<University> universityGet(@PathVariable String code) {
        return new ResponseEntity<>(universityService.getByCode(code), HttpStatus.OK);
    }

    @GetMapping(
            value = "/legalIdTypesGet",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<LegalIdType>> legalIdTypesGet() {
        return new ResponseEntity<>(legalIdTypeService.getAll(), HttpStatus.OK);
    }

    @GetMapping(
            value = "/profilesGet",
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Profile>> profilesGet() {
        return new ResponseEntity<>(profileService.getAll(), HttpStatus.OK);
    }

}
