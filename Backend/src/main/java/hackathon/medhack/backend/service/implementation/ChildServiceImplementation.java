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
}
