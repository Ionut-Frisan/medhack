package hackathon.medhack.backend.model;

import jakarta.persistence.*;
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
public class Parent extends User {
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="doctor_id")
    private Doctor doctor;

    @OneToMany(mappedBy = "parent")
    List<Child> children;

    public Parent(Long id, String firstName, String lastName, String email, String password, String phoneNumber, Doctor doctor, List<Child> children) {
        super(id, firstName, lastName, email, password, phoneNumber);
        this.doctor = doctor;
        this.children = children;
    }
}
