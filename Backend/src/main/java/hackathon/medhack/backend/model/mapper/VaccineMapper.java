package hackathon.medhack.backend.model.mapper;

import hackathon.medhack.backend.model.Vaccine;
import hackathon.medhack.backend.model.dto.VaccineDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class VaccineMapper {
    public VaccineDto convertVaccineToVaccineDto(Vaccine vaccine) {
        return new VaccineDto(vaccine.getId(),
                vaccine.getName(),
                vaccine.getDescription(),
                vaccine.getAge(),
                vaccine.getPreventedDiseases(),
                vaccine.getSideEffects());
    }

    public Vaccine convertVaccineDtoToVaccine(VaccineDto vaccineDto) {
        return new Vaccine(vaccineDto.getId(),
                vaccineDto.getName(),
                vaccineDto.getDescription(),
                vaccineDto.getAge(),
                vaccineDto.getPreventedDiseases(),
                vaccineDto.getSideEffects(),
                null);
    }
}
