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
                vaccine.getAbbreviation(),
                vaccine.getDescription(),
                vaccine.getAge(),
                vaccine.getComments(),
                vaccine.getIsMandatory(),
                vaccine.getLinkDoctor(),
                vaccine.getLinkPatient());
    }

    public Vaccine convertVaccineDtoToVaccine(VaccineDto vaccineDto) {
        return new Vaccine(vaccineDto.getId(),
                vaccineDto.getName(),
                vaccineDto.getAbbreviation(),
                vaccineDto.getDescription(),
                vaccineDto.getAge(),
                vaccineDto.getComments(),
                vaccineDto.getIsMandatory(),
                vaccineDto.getLinkDoctor(),
                vaccineDto.getLinkPatient(),
                null);
    }
}
