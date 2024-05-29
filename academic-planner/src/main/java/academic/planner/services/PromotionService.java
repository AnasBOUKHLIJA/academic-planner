package academic.planner.services;


import academic.planner.entities.Promotion;
import academic.planner.entities.PromotionCourse;
import academic.planner.msg.PromotionDTO;
import academic.planner.repositories.PromotionCourseRepository;
import academic.planner.repositories.PromotionRepository;
import academic.planner.utils.AcademicPlannerException;
import academic.planner.utils.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PromotionService {
    protected final PromotionRepository promotionRepository;
    protected final PromotionCourseRepository promotionCourseRepository;
    @Autowired
    public PromotionService(PromotionRepository promotionRepository,  PromotionCourseRepository promotionCourseRepository) {
        this.promotionRepository = promotionRepository;
        this.promotionCourseRepository = promotionCourseRepository;
    }


    public List<PromotionDTO> getByAcademicProgramCode(String academicProgramCode) {
        List<Promotion> promotions = promotionRepository.findByAcademicProgramCode(academicProgramCode);
        List<PromotionDTO> promotionDTOs = new ArrayList<>();
        for (Promotion promotion : promotions) {
            PromotionDTO promotionDTO = new PromotionDTO();
            promotionDTO.init(promotion);
            promotionDTOs.add(promotionDTO);
        }
        return promotionDTOs;
    }

    public List<PromotionDTO> getAll() {
        List<Promotion> promotions = promotionRepository.findAll();
        List<PromotionDTO> promotionDTOs = new ArrayList<>();
        for (Promotion promotion : promotions) {
            PromotionDTO promotionDTO = new PromotionDTO();
            promotionDTO.init(promotion);
            promotionDTOs.add(promotionDTO);
        }
        return promotionDTOs;
    }

    public PromotionDTO getById(Long id) {
        Optional<Promotion> optionalPromotion = promotionRepository.findById(id);
        if (!optionalPromotion.isPresent()) {
            throw new AcademicPlannerException(ErrorCode.promotion_not_found, "Promotion not found with id => " + id);
        }
        Promotion promotion = optionalPromotion.get();
        PromotionDTO promotionDTO = new PromotionDTO();
        promotionDTO.init(promotion);
        return promotionDTO;
    }


    public PromotionDTO save(Promotion promotion) {
        List<PromotionCourse> promotionCourses = promotion.getPromotionCourses();
        Promotion promotionDB = promotionRepository.save(promotion);
        if(promotionCourses != null){
            promotionDB.setPromotionCourses(new ArrayList<>());
            for (PromotionCourse promotionCourse : promotionCourses ){
                promotionCourse.setPromotion(promotionDB);
                PromotionCourse promotionCourseDB = promotionCourseRepository.save(promotionCourse);
                promotionDB.getPromotionCourses().add(promotionCourseDB);
            }
        }
        PromotionDTO promotionDTO = new PromotionDTO();
        promotionDTO.init(promotionDB);
        return promotionDTO;
    }

    public List<Promotion> save(List<Promotion> promotions) {
        List<Promotion> promotionsList = new ArrayList<Promotion>();
        for (Promotion promotion: promotions) {
            promotionsList.add(promotionRepository.save(promotion));
        }
        return promotionsList;
    }

    public void delete(Long id) {
        Optional<Promotion> optionalPromotion = promotionRepository.findById(id);
        if (!optionalPromotion.isPresent()) {
            throw new AcademicPlannerException(ErrorCode.promotion_not_found, "Promotion not found with id => " + id);
        }
        promotionRepository.delete(optionalPromotion.get());
    }

}
