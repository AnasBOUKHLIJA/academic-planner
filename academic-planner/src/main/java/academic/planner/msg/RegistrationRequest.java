package academic.planner.msg;

import academic.planner.entities.Promotion;
import academic.planner.entities.Registration;

import java.util.List;

public class RegistrationRequest {

    private Promotion promotion;
    private List<Registration> registrations;

    public Promotion getPromotion() {
        return promotion;
    }

    public void setPromotion(Promotion promotion) {
        this.promotion = promotion;
    }

    public List<Registration> getRegistrations() {
        return registrations;
    }

    public void setRegistrations(List<Registration> registrations) {
        this.registrations = registrations;
    }
}
