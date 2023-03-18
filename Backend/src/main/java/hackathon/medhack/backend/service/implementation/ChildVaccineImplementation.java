package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.ChildVaccine;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.repository.ChildVaccineRepository;
import hackathon.medhack.backend.service.ChildVaccineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class ChildVaccineImplementation implements ChildVaccineService {

    private final ChildVaccineRepository childVaccineRepository;
    @Override
    public List<ChildVaccineDto> getChildVaccines(Long childId) {
        return childVaccineRepository.getChildVaccines(childId);
    }

    @Override
    public ChildVaccineDto updateChildVaccine(ChildVaccineDto childVaccineDto) {
        if (childVaccineRepository.findById(childVaccineDto.getId()).isEmpty()) {
            return null;
        }
        ChildVaccine childVaccine = childVaccineRepository.findById(childVaccineDto.getId()).get();
        childVaccine.setDateWhenDone(childVaccineDto.getDateWhenDone());
        childVaccine.setIsDone(childVaccineDto.getIsDone());

        childVaccineRepository.save(childVaccine);

        childVaccineDto.setName(childVaccine.getVaccine().getName());
        childVaccineDto.setChildVaccineDate(childVaccine.getChildVaccineDate());
        return childVaccineDto;
    }
}
