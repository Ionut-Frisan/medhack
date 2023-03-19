package hackathon.medhack.backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmailDto {
    Long doctorId;
    Long parentId;
    Long childId;
}
