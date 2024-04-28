package academic.planner.entities;

import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type",discriminatorType = DiscriminatorType.STRING)
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable=false)
    private Long id;

    @Column(name = "username", nullable=false, unique = true)
    private String username;

    @Column(name = "password", nullable=false)
    private String password;

    @Column(name = "email", nullable=false)
    private String email;

    @Column(name = "first_name", nullable=false)
    private String firstName;

    @Column(name = "last_name", nullable=false)
    private String lastName;

    @Column(name = "birth_date", nullable=false)
    private String birthDate;

    @Column(name = "legal_id_number", nullable=false)
    private String legalIdNumber;

    @ManyToOne
    @JoinColumn(name="legal_id_type_id", foreignKey=@ForeignKey(name="fk_user_legal_id_type"), nullable=false)
    private LegalIdType legalIdType;

    @ManyToOne
    @JoinColumn(name="citizenship_id", foreignKey=@ForeignKey(name="fk_user_citizenship"), nullable=false)
    private Country citizenship;

    @ManyToOne
    @JoinColumn(name="profile_id", foreignKey=@ForeignKey(name="fk_user_profile"), nullable=false)
    private Profile profile;

    //--------------------------------------------------------------------------------
    // GETTER AND SETTERS
    //--------------------------------------------------------------------------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getLegalIdNumber() {
        return legalIdNumber;
    }

    public void setLegalIdNumber(String legalIdNumber) {
        this.legalIdNumber = legalIdNumber;
    }

    public LegalIdType getLegalIdType() {
        return legalIdType;
    }

    public void setLegalIdType(LegalIdType legalIdType) {
        this.legalIdType = legalIdType;
    }

    public Country getCitizenship() {
        return citizenship;
    }

    public void setCitizenship(Country citizenship) {
        this.citizenship = citizenship;
    }
}
