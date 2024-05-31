package academic.planner.services;

import academic.planner.entities.Schedule;
import academic.planner.msg.ScheduleDTO;
import academic.planner.msg.ScheduleRequest;
import academic.planner.repositories.ScheduleRepository;
import academic.planner.utils.AcademicPlannerException;
import academic.planner.utils.ErrorCode;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ScheduleService {
    protected final ScheduleRepository scheduleRepository;

    @Autowired
    public ScheduleService(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    public List<Schedule> getAll() {
        return scheduleRepository.findAll();
    }

    public List<ScheduleDTO> getAll(Long promotionId) {
        List<Schedule> schedules = scheduleRepository.findByPromotionId(promotionId);
        List<ScheduleDTO> scheduleDTOS = new ArrayList<>();

        for (Schedule schedule: schedules) {
            ScheduleDTO scheduleDTO = new ScheduleDTO();
            scheduleDTO.init(schedule);
            scheduleDTOS.add(scheduleDTO);
        }
        return scheduleDTOS;
    }


    public Schedule getById(Long id) {
        Optional<Schedule> optionalSchedule = scheduleRepository.findById(id);
        if(! optionalSchedule.isPresent()) throw new AcademicPlannerException(ErrorCode.schedule_not_found, "Schedule not found with id => " + id);
        return optionalSchedule.get();
    }

    public Schedule save(Schedule schedule) {
        return scheduleRepository.save(schedule);
    }

    @Transactional
    public List<ScheduleDTO> save(ScheduleRequest scheduleRequest) {
        List<ScheduleDTO> scheduleDTOS = new ArrayList<>();
        scheduleRepository.deleteByPromotionId(scheduleRequest.getPromotion().getId());
        if(scheduleRequest.getSchedules() != null){
            for (Schedule schedule: scheduleRequest.getSchedules()) {
                schedule.setPromotion(scheduleRequest.getPromotion());
                Schedule scheduleDB = scheduleRepository.save(schedule);
                ScheduleDTO scheduleDTO = new ScheduleDTO();
                scheduleDTO.init(scheduleDB);
                scheduleDTOS.add(scheduleDTO);
            }
        }
        return scheduleDTOS;
    }

    public List<Schedule> save(List<Schedule> schedules) {
        List<Schedule> schedulesList = new ArrayList<Schedule>();
        for (Schedule schedule: schedules) {
            schedulesList.add(scheduleRepository.save(schedule));
        }
        return schedulesList;
    }

    public void delete(Schedule schedule) {
        scheduleRepository.delete(schedule);
    }
}
