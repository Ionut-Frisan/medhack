package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Vaccine;
import hackathon.medhack.backend.model.dto.VaccineDto;
import hackathon.medhack.backend.model.mapper.VaccineMapper;
import hackathon.medhack.backend.repository.VaccineRepository;
import hackathon.medhack.backend.service.VaccineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class VaccineServiceImplementation implements VaccineService {
    public final VaccineRepository vaccineRepository;

    public final VaccineMapper vaccineMapper;

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
}
