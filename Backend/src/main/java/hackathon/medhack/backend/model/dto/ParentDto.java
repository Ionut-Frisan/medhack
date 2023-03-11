package hackathon.medhack.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParentDto extends UserDto {
    private Long doctorId;

    public ParentDto(Long id, String firstName, String lastName, String email, String password, String phoneNumber, Long doctorId) {
        super(id, firstName, lastName, email, password, phoneNumber);
        this.doctorId = doctorId;
    }
}
