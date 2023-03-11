package hackathon.medhack.backend.model;


import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Doctor extends User {
    private String clinic;

    @OneToMany(mappedBy = "doctor")
    List<Parent> parents;

    public Doctor(Long id, String firstName, String lastName, String email, String password, String phoneNumber, String clinic, List<Parent> parents) {
        super(id, firstName, lastName, email, password, phoneNumber);
        this.clinic = clinic;
        this.parents = parents;
    }
}
