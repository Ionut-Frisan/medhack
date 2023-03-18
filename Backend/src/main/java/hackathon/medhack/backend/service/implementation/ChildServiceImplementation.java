package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.ChildVaccine;
import hackathon.medhack.backend.model.Parent;
import hackathon.medhack.backend.model.Vaccine;
import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.mapper.ChildMapper;
import hackathon.medhack.backend.repository.ChildRepository;
import hackathon.medhack.backend.repository.ChildVaccineRepository;
import hackathon.medhack.backend.repository.ParentRepository;
import hackathon.medhack.backend.repository.VaccineRepository;
import hackathon.medhack.backend.service.ChildService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class ChildServiceImplementation implements ChildService {
    private final ChildRepository childRepository;

    private final ParentRepository parentRepository;

    private final ChildVaccineRepository childVaccineRepository;

    private final VaccineRepository vaccineRepository;

    private final ChildMapper childMapper;

    private final Logger logger = LoggerFactory.getLogger(ChildServiceImplementation.class);

    @Override
    public List<ChildDto> getAllChildren() {
        List<ChildDto> childrenDto = new ArrayList<>();
        List<Child> children = childRepository.findAll();
        children.forEach(child -> childrenDto.add(childMapper.convertChildToChildDto(child)));

        return childrenDto;
    }

    @Override
    public ChildDto getChild(Long childId) {
        if (childRepository.findById(childId).isEmpty()) {
            return null;
        }
        Child child = childRepository.findById(childId).get();
        return childMapper.convertChildToChildDto(child);
    }

    @Override
    public Long addChild(ChildDto childDto) {
        logger.info("Adding child");

        if (parentRepository.findById(childDto.getParentId()).isEmpty()) {
            return null;
        }
        Parent parent = parentRepository.findById(childDto.getParentId()).get();
        Child child = childMapper.convertChildDtoToChild(childDto);
        child.setParent(parent);
        childRepository.save(child);

        for(Vaccine vaccine : vaccineRepository.findAll()) {
            LocalDate childVaccineDate = child.getDateOfBirth();
            if (vaccine.getAge() >= 1) {
                int months = ((int) vaccine.getAge());
                childVaccineDate = childVaccineDate.plusMonths(months);
            } else {
                int weeks = (int) (vaccine.getAge() * 4);
                childVaccineDate = childVaccineDate.plusWeeks(weeks);
            }

            childVaccineRepository.save(
                    new ChildVaccine(null,child, vaccine, false, childVaccineDate, null)
            );
        }

        return child.getId();
    }

    @Override
    public void deleteChild(Long childId) {
        childRepository.deleteById(childId);
    }

    @Override
    public Long updateChild(Long childId, ChildDto childDto){
        if(childRepository.findById(childId).isEmpty()){
            return null;
        }

        Child child = childRepository.findById(childId).get();
        if(!child.getFirstName().equals(childDto.getFirstName())){
            child.setFirstName(childDto.getFirstName());
        }
        if(!child.getLastName().equals(childDto.getLastName())){
            child.setLastName(childDto.getLastName());
        }
        if(!child.getDateOfBirth().equals(childDto.getDateOfBirth())){
            child.setDateOfBirth(childDto.getDateOfBirth());
        }
        if(!child.getGender().equals(childDto.getGender())){
            child.setGender(childDto.getGender());
        }
        if(!child.getCNP().equals(childDto.getCNP())){
            child.setCNP(childDto.getCNP());
        }
        if(!child.getPermanentResidence().equals(childDto.getPermanentResidence())){
            child.setPermanentResidence(childDto.getPermanentResidence());
        }
        if(!child.getCurrentResidence().equals(childDto.getCurrentResidence())){
            child.setCurrentResidence(childDto.getCurrentResidence());
        }
        if(!child.getSecondParentFirstName().equals(childDto.getSecondParentFirstName())) {
            child.setSecondParentFirstName(childDto.getSecondParentFirstName());
        }
        if(!child.getSecondParentLastName().equals(childDto.getSecondParentLastName())){
            child.setSecondParentLastName(childDto.getSecondParentLastName());
        }
        return childId;
    }

    @Override
    public List<ChildDto> getChildrenByName(String name) {
        List<ChildDto> childrenDto = new ArrayList<>();
        List<Child> children = childRepository.getByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(name,name);
        children.forEach(child -> childrenDto.add(childMapper.convertChildToChildDto(child)));

        return childrenDto;
    }

    @Override
    public List<ChildDto> getChildrenForDoctor(Long doctorId) {
        List<ChildDto> childrenDto = new ArrayList<>();
        List<Child> children = childRepository.getChildrenForDoctor(doctorId);

        children.forEach(child -> childrenDto.add(childMapper.convertChildToChildDto(child)));

        return childrenDto;
    }

    @Override
    public List<ChildDto> getChildrenForDoctorByName(Long doctorId,String name) {
        List<ChildDto> childrenDto = new ArrayList<>();
        List<Child> children = childRepository.getChildrenForDoctorByName(doctorId, name);

        children.forEach(child -> childrenDto.add(childMapper.convertChildToChildDto(child)));

        return childrenDto;
    }
}
