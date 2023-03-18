package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.Vaccine;
import hackathon.medhack.backend.model.dto.VaccineDto;

import java.util.List;

public interface VaccineService {
    List<VaccineDto> getAllVaccines();

    VaccineDto getVaccine(Long vaccineId);

    Long addVaccine(VaccineDto vaccineDto);

    void deleteVaccine(Long vaccineId);

    List<VaccineDto> getVaccinesByName(String name);
}
