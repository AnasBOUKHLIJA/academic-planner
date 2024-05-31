package academic.planner.services;


import academic.planner.entities.Registration;
import academic.planner.msg.PromotionDTO;
import academic.planner.msg.RegistrationDTO;
import academic.planner.msg.RegistrationRequest;
import academic.planner.repositories.PromotionRepository;
import academic.planner.repositories.RegistrationRepository;
import academic.planner.utils.AcademicPlannerException;
import academic.planner.utils.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RegistrationService {
    protected final RegistrationRepository registrationRepository;
    protected final PromotionRepository promotionRepository;

    @Autowired
    public RegistrationService(RegistrationRepository registrationRepository, PromotionRepository promotionRepository) {
        this.registrationRepository = registrationRepository;
        this.promotionRepository       = promotionRepository;
    }

    public List<Registration> getAll() {
        return registrationRepository.findAll();
    }

    public List<RegistrationDTO> getAll(Long promotionId) {
        List<RegistrationDTO> registrationDTOS = new ArrayList<>();
        List<Registration> registrations = registrationRepository.findByPromotionId(promotionId);
        if(registrations == null || registrations.isEmpty()) return registrationDTOS;

        for (Registration registration: registrations) {
            RegistrationDTO registrationDTO = new RegistrationDTO();
            registrationDTO.init(registration);
            registrationDTOS.add(registrationDTO);
        }

        return registrationDTOS;
    }

    public List<RegistrationDTO> getStudentRegistration(Long studentId) {
        List<RegistrationDTO> registrationDTOS = new ArrayList<>();
        List<Registration> registrations = registrationRepository.findByStudentId(studentId);
        if(registrations == null || registrations.isEmpty()) return registrationDTOS;

        for (Registration registration: registrations) {
            RegistrationDTO registrationDTO = new RegistrationDTO();
            registrationDTO.init(registration);
            registrationDTOS.add(registrationDTO);
        }

        return registrationDTOS;
    }

    public Registration getById(Long id) {
        Optional<Registration> optionalPromotionStudent = registrationRepository.findById(id);
        if (!optionalPromotionStudent.isPresent())
            throw new AcademicPlannerException(ErrorCode.registration_not_found, "PromotionStudent not found with id => " + id);
        return optionalPromotionStudent.get();
    }

    public Registration save(Registration registration) {
        return registrationRepository.save(registration);
    }

    public List<RegistrationDTO> save(RegistrationRequest registrationRequest) {
        List<Registration> promotionStudentsList = new ArrayList<>();
        List<RegistrationDTO> registrationDTOS = new ArrayList<>();

        List<Registration> existingRegistrations = registrationRepository.findByPromotionId(registrationRequest.getPromotion().getId());

        if (registrationRequest.getRegistrations() == null || registrationRequest.getRegistrations().isEmpty()) {
            if(existingRegistrations != null) {
                for (Registration existingRegistration: existingRegistrations) {
                    registrationRepository.delete(existingRegistration);
                }
            }
            return registrationDTOS;
        }


        // Create a set of unique identifiers for existing, non-deleted registrations
        Set<String> existingNonDeletedRegistrations = new HashSet<>();
        for (Registration existingRegistration : existingRegistrations) {
            String uniqueIdentifier = existingRegistration.getStudent().getId() + "-" + existingRegistration.getPromotion().getId();
            existingNonDeletedRegistrations.add(uniqueIdentifier);
        }

        // Create a set to track incoming registration identifiers
        Set<String> incomingRegistrationIdentifiers = new HashSet<>();

        // Save new registrations or update existing ones
        for (Registration registration : registrationRequest.getRegistrations()) {
            String uniqueIdentifier = registration.getStudent().getId() + "-" + registration.getPromotion().getId();
            incomingRegistrationIdentifiers.add(uniqueIdentifier);
            if (registration.getId() == null) registration.setRegistrationDate(new Date());
            promotionStudentsList.add(registrationRepository.save(registration));
        }

        // Handle deletions: if an existing registration is not in the incoming list, delete it
        for (Registration existingRegistration : existingRegistrations) {
            String uniqueIdentifier = existingRegistration.getStudent().getId() + "-" + existingRegistration.getPromotion().getId();
            if (! incomingRegistrationIdentifiers.contains(uniqueIdentifier)) {
                registrationRepository.delete(existingRegistration);
            }
        }

        for (Registration registration: promotionStudentsList) {
            RegistrationDTO registrationDTO = new RegistrationDTO();
            registrationDTO.init(registration);
            registrationDTOS.add(registrationDTO);
        }

        return registrationDTOS;
    }


    public void delete(Registration registration) {
        registrationRepository.delete(registration);
    }
}
