package academic.planner.services;


import academic.planner.entities.Promotion;
import academic.planner.entities.PromotionCourse;
import academic.planner.msg.PromotionDTO;
import academic.planner.repositories.PromotionCourseRepository;
import academic.planner.repositories.PromotionRepository;
import academic.planner.utils.AcademicPlannerException;
import academic.planner.utils.ErrorCode;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

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
            promotion.setPromotionCourses(promotionCourseRepository.findByPromotionId(promotion.getId()));
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
            promotion.setPromotionCourses(promotionCourseRepository.findByPromotionId(promotion.getId()));
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
        promotion.setPromotionCourses(promotionCourseRepository.findByPromotionId(promotion.getId()));
        PromotionDTO promotionDTO = new PromotionDTO();
        promotionDTO.init(promotion);
        return promotionDTO;
    }

    @Transactional
    public PromotionDTO save(Promotion promotion) {
        // List to store the promotion courses that will be saved
        List<PromotionCourse> promotionCoursesList = new ArrayList<>();
        List<PromotionCourse> existingPromotionCourses = promotionCourseRepository.findByPromotionId(promotion.getId());

        if (promotion.getPromotionCourses() == null || promotion.getPromotionCourses().isEmpty()) {
            if (existingPromotionCourses != null) {
                for (PromotionCourse existingCourse : existingPromotionCourses) {
                    promotionCourseRepository.delete(existingCourse);
                }
            }
            return convertToDTO(promotionRepository.save(promotion));
        }

        // Create a set of unique identifiers for existing, non-deleted promotion courses
        Set<Long> existingCourseIds = existingPromotionCourses.stream()
                .map(PromotionCourse::getId)
                .collect(Collectors.toSet());

        // Create a set to track incoming promotion course identifiers
        Set<Long> incomingCourseIds = new HashSet<>();

        // Save new promotion courses or update existing ones
        for (PromotionCourse promotionCourse : promotion.getPromotionCourses()) {
            promotionCourse.setPromotion(promotion);
            if (promotionCourse.getId() != null) {
                existingCourseIds.remove(promotionCourse.getId());
            }
            incomingCourseIds.add(promotionCourse.getId());
            promotionCoursesList.add(promotionCourseRepository.save(promotionCourse));
        }

        // Handle deletions: if an existing promotion course is not in the incoming list, delete it
        for (Long existingCourseId : existingCourseIds) {
            promotionCourseRepository.deleteById(existingCourseId);
        }

        // Update the promotion entity with the saved promotion courses and save it
        promotion.setPromotionCourses(promotionCoursesList);
        Promotion promotionDB = promotionRepository.save(promotion);

        // Create and return the PromotionDTO
        return convertToDTO(promotionDB);
    }

    private PromotionDTO convertToDTO(Promotion promotion) {
        PromotionDTO promotionDTO = new PromotionDTO();
        promotionDTO.init(promotion);
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
