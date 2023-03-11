package hackathon.medhack.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VaccineDto {
    private Long id;

    private String name;
    private String description;
    private Integer age;
    private String preventedDiseases;
    private String sideEffects;
}
