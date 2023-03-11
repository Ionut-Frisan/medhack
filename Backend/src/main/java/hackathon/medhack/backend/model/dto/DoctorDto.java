package hackathon.medhack.backend.model.dto;

import lombok.*;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class DoctorDto extends UserDto {
    private String clinic;

    public DoctorDto(Long id, String firstName, String lastName, String email, String password, String phoneNumber, String clinic) {
        super(id, firstName, lastName, email, password, phoneNumber);
        this.clinic = clinic;
    }
}
