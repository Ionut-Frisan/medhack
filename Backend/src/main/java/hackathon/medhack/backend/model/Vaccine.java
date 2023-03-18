package hackathon.medhack.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vaccine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String abbreviation;

//    @NotNull
//    @Size(max=3000)
    @Lob
    private String description;

    private float age;
    private String comments;
    private Boolean isMandatory;
    private String linkDoctor;
    private String linkPatient;


    @OneToMany(mappedBy = "vaccine")
    List<ChildVaccine> childVaccineList;
}
