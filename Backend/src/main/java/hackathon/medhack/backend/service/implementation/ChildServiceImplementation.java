package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.Parent;
import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.mapper.ChildMapper;
import hackathon.medhack.backend.repository.ChildRepository;
import hackathon.medhack.backend.repository.ParentRepository;
import hackathon.medhack.backend.service.ChildService;
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
public class ChildServiceImplementation implements ChildService {
    private final ChildRepository childRepository;

    private final ParentRepository parentRepository;

    private final ChildMapper childMapper;

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
        if (parentRepository.findById(childDto.getParentId()).isEmpty()) {
            return null;
        }
        Parent parent = parentRepository.findById(childDto.getParentId()).get();
        Child child = childMapper.convertChildDtoToChild(childDto);
        child.setParent(parent);
        childRepository.save(child);

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
}
