package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.model.dto.VaccineDto;

import java.util.List;

public interface VaccineService {
    List<VaccineDto> getAllVaccines();

    VaccineDto getVaccine(Long vaccineId);

    Long addVaccine(VaccineDto vaccineDto);

    void deleteVaccine(Long vaccineId);

    List<VaccineDto> getVaccinesByName(String name);

    List<ChildVaccineDto> getVaccinesForDoctor(Long doctorId);
}
