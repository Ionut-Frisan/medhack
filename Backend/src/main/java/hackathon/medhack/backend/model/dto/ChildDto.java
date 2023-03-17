package hackathon.medhack.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildDto {
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
    private Long parentId;
}
