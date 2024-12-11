package academic.planner.services;

import academic.planner.entities.Grade;
import academic.planner.entities.Schedule;
import academic.planner.msg.GradeRequest;
import academic.planner.msg.ScheduleDTO;
import academic.planner.msg.ScheduleRequest;
import academic.planner.repositories.GradeRepository;
import academic.planner.utils.AcademicPlannerException;
import academic.planner.utils.ErrorCode;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GradeService {

    protected final GradeRepository gradeRepository;

    @Autowired
    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;
    }

    public List<Grade> getAll() {
        return gradeRepository.findAll();
    }

    public List<Grade> getAll(Long promotionId, Long courseId) {
        return gradeRepository.findByPromotionIdAndCourseId(promotionId, courseId);
    }

    public Grade getById(Long id) {
        Optional<Grade> optionalGrade = gradeRepository.findById(id);
        if(! optionalGrade.isPresent()) throw new AcademicPlannerException(ErrorCode.grade_not_found, "Grade not found with id => " + id);
        return optionalGrade.get();
    }

    public Grade save(Grade grade) {
        return gradeRepository.save(grade);
    }

    @Transactional
    public List<Grade> save(GradeRequest gradeRequest) {
        List<Grade> gradeList = new ArrayList<>();
        gradeRepository.deleteByPromotionIdAndCourseId(gradeRequest.getPromotion().getId(), gradeRequest.getCourse().getId());

        if(gradeRequest.getGrades() != null){
            for (Grade grade: gradeRequest.getGrades()) {
                grade.setPromotion(gradeRequest.getPromotion());
                grade.setCourse(gradeRequest.getCourse());
                Grade gradeDB = gradeRepository.save(grade);
                gradeList.add(gradeDB);
            }
        }
        return gradeList;
    }
    public List<Grade> save(List<Grade> grades) {
        List<Grade> gradesList = new ArrayList<Grade>();
        for (Grade grade: grades) {
            gradesList.add(gradeRepository.save(grade));
        }
        return gradesList;
    }

    public void delete(Grade grade) {
        gradeRepository.delete(grade);
    }
}
