package academic.planner.entities;

import jakarta.persistence.*;

@Entity
public class Establishment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable=false)
    private Long id;

    @Column(name = "code", nullable=false, unique = true)
    private String code;

    @Column(name = "name", nullable=false)
    private String name;

    @Lob
    @Column(name = "description", nullable=false)
    private String description;

    @Column(name = "rank_")
    private Integer rank;

    @Lob
    @Column(name = "thumbnail", nullable=true)
    private String thumbnail;

    @ManyToOne
    @JoinColumn(name="university_id", foreignKey=@ForeignKey(name="fk_establishment_university"), nullable=false)
    public University university;

    @ManyToOne
    @JoinColumn(name="city_id", foreignKey=@ForeignKey(name="fk_establishment_city"), nullable=false)
    public City city;

    //--------------------------------------------------------------------------------
    // GETTER AND SETTERS
    //--------------------------------------------------------------------------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public University getUniversity() {
        return university;
    }

    public void setUniversity(University university) {
        this.university = university;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
