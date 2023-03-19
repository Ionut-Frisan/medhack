package hackathon.medhack.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Child {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;

    private LocalDate dateOfBirth;
    private String gender;
    private String CNP;
    private String permanentResidence;
    private String currentResidence;
    private String secondParentFirstName;
    private String secondParentLastName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="parent_id")
    private Parent parent;

    @OneToMany(mappedBy = "child", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private List<ChildVaccine> childVaccineList;
}
