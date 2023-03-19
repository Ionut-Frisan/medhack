package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.Vaccine;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.model.dto.VaccineDto;
import hackathon.medhack.backend.model.mapper.VaccineMapper;
import hackathon.medhack.backend.repository.ChildRepository;
import hackathon.medhack.backend.repository.ChildVaccineRepository;
import hackathon.medhack.backend.repository.VaccineRepository;
import hackathon.medhack.backend.service.VaccineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class VaccineServiceImplementation implements VaccineService {
    public final VaccineRepository vaccineRepository;

    public final VaccineMapper vaccineMapper;

    public final ChildRepository childRepository;

    public final ChildVaccineRepository childVaccineRepository;

    @Override
    public List<VaccineDto> getAllVaccines() {
        List<VaccineDto> vaccinesDto = new ArrayList<>();
        List<Vaccine> vaccines = vaccineRepository.findAll();
        vaccines.forEach(vaccine -> vaccinesDto.add(vaccineMapper.convertVaccineToVaccineDto(vaccine)));

        return vaccinesDto;
    }

    @Override
    public VaccineDto getVaccine(Long vaccineId) {
        if (vaccineRepository.findById(vaccineId).isEmpty()) {
            return null;
        }
        Vaccine vaccine = vaccineRepository.findById(vaccineId).get();
        return vaccineMapper.convertVaccineToVaccineDto(vaccine);

    }

    @Override
    public Long addVaccine(VaccineDto vaccineDto) {
        Vaccine vaccine = vaccineMapper.convertVaccineDtoToVaccine(vaccineDto);
        vaccineRepository.save(vaccine);
        return vaccine.getId();
    }

    @Override
    public void deleteVaccine(Long vaccineId) {
        vaccineRepository.deleteById(vaccineId);
    }

    @Override
    public List<VaccineDto> getVaccinesByName(String name) {
        List<VaccineDto> vaccinesDto = new ArrayList<>();
        List<Vaccine> vaccines = vaccineRepository.getByNameContainingIgnoreCase(name);

        vaccines.forEach(vaccine -> vaccinesDto.add(vaccineMapper.convertVaccineToVaccineDto(vaccine)));

        return vaccinesDto;
    }

    Comparator<ChildVaccineDto> compareByDate = Comparator.comparing(ChildVaccineDto::getChildVaccineDate);
    @Override
    public List<ChildVaccineDto> getVaccinesForDoctor(Long doctorId) {
        List<ChildVaccineDto> vaccinesDto = new ArrayList<>();
        List<Child> children = childRepository.getChildrenForDoctor(doctorId);

        for(Child child : children) {
            List<ChildVaccineDto> tempChildVaccines = childVaccineRepository.getChildVaccines(child.getId());
            vaccinesDto.addAll(tempChildVaccines);
        }
        vaccinesDto.sort(compareByDate);

        if(vaccinesDto.size() < 10)
            return vaccinesDto;
        return vaccinesDto.subList(0, 10);
    }
}
