package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.exceptions.CustomException;
import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.Doctor;
import hackathon.medhack.backend.model.Parent;
import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.ParentDto;
import hackathon.medhack.backend.model.mapper.ChildMapper;
import hackathon.medhack.backend.model.mapper.ParentMapper;
import hackathon.medhack.backend.repository.DoctorRepository;
import hackathon.medhack.backend.repository.ParentRepository;
import hackathon.medhack.backend.service.ParentService;
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
public class ParentServiceImplementation implements ParentService {
    private final ParentRepository parentRepository;

    private final DoctorRepository doctorRepository;

    private final ParentMapper parentMapper;

    private final ChildMapper childMapper;

    @Override
    public List<ParentDto> getAllParents() {
       List<ParentDto> parentsDto = new ArrayList<>();
       List<Parent> parents = parentRepository.findAll();
       parents.forEach(parent -> parentsDto.add(parentMapper.convertParentToParentDto(parent)));

       return parentsDto;
    }

    @Override
    public ParentDto getParent(Long parentId) {
        if (parentRepository.findById(parentId).isEmpty()) {
            return null;
        }
        Parent parent = parentRepository.findById(parentId).get();
        return parentMapper.convertParentToParentDto(parent);
    }

    @Override
    public List<ChildDto>  getChildrenForParent(Long parentId) {
        List<ChildDto> childrenDto = new ArrayList<>();
        if (parentRepository.findById(parentId).isEmpty()) {
            return null;
        }
        Parent parent = parentRepository.findById(parentId).get();
        List<Child> children = parent.getChildren();
        children.forEach(child -> childrenDto.add(childMapper.convertChildToChildDto(child)));

        return childrenDto;
    }

    @Override
    public Long addParent(ParentDto parentDto) {
        if(parentRepository.getByEmail(parentDto.getEmail()).isPresent()) {
            throw new CustomException("Email already used");
        }

        if (doctorRepository.findById(parentDto.getDoctorId()).isEmpty()) {
            throw new CustomException("Non existent doctor");
        }

        Doctor doctor = doctorRepository.findById(parentDto.getDoctorId()).get();
        Parent parent = parentMapper.convertParentDtoToParent(parentDto);
        parent.setDoctor(doctor);
        parentRepository.save(parent);

        return parent.getId();
    }

    @Override
    public void deleteParent(Long parentId) {
        parentRepository.deleteById(parentId);
    }
}
