package hackathon.medhack.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChildVaccineDto {
    private Long id;

    private Long childVaccineId;

    private String name;

    private String abbreviation;
    private String description;
    private LocalDate childVaccineDate;
    private LocalDate dateWhenDone;
    private Boolean isDone;
}
