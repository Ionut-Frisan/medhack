package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.dto.ChildVaccineDto;

import java.util.List;

public interface ChildVaccineService {
    List<ChildVaccineDto> getChildVaccines(Long childId);

    ChildVaccineDto updateChildVaccine(ChildVaccineDto childVaccineDto);
}
