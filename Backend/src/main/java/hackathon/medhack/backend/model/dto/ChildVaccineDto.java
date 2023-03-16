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
    private String name;
    private LocalDate childVaccineDate;
    private Boolean isDone;
}
