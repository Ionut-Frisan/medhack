package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;

import java.io.FileNotFoundException;
import java.util.List;

public interface ChildVaccineService {
    List<ChildVaccineDto> getChildVaccines(Long childId);

    ChildVaccineDto updateChildVaccine(ChildVaccineDto childVaccineDto);

    boolean generatePdf(Long childId) throws FileNotFoundException;

    ChildDto getChild(Long childVaccineId);
}
