package academic.planner.services;

import academic.planner.entities.PromotionCourse;
import academic.planner.entities.Registration;
import academic.planner.msg.RegistrationDTO;
import academic.planner.repositories.PromotionCourseRepository;
import academic.planner.repositories.PromotionRepository;
import academic.planner.repositories.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PromotionCourseService {

    protected final RegistrationRepository registrationRepository;
    protected final PromotionRepository promotionRepository;
    protected final PromotionCourseRepository promotionCourseRepository;

    @Autowired
    public PromotionCourseService(RegistrationRepository registrationRepository, PromotionRepository promotionRepository, PromotionCourseRepository promotionCourseRepository) {
        this.registrationRepository       = registrationRepository;
        this.promotionRepository          = promotionRepository;
        this.promotionCourseRepository    = promotionCourseRepository;
    }


    public List<PromotionCourse> getAll(Long promotionId) {
        List<PromotionCourse> promotionCourses = promotionCourseRepository.findByPromotionId(promotionId);
        return promotionCourses;
    }
}
