package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.exceptions.CustomException;
import hackathon.medhack.backend.model.*;
import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.model.dto.EmailDto;
import hackathon.medhack.backend.model.dto.ParentDto;
import hackathon.medhack.backend.model.mapper.ChildMapper;
import hackathon.medhack.backend.model.mapper.ParentMapper;
import hackathon.medhack.backend.repository.*;
import hackathon.medhack.backend.service.ParentService;
import hackathon.medhack.backend.utils.SendEmail;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
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

    private final ChildVaccineRepository childVaccineRepository;
    private final VaccineRepository vaccineRepository;

    private final ChildRepository childRepository;

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
        if(doctorRepository.getByEmail(parentDto.getEmail()).isPresent()) {
            throw new CustomException("Email already used");
        }

        if (doctorRepository.findById(parentDto.getDoctorId()).isEmpty()) {
            throw new CustomException("Non existent doctor");
        }

        Doctor doctor = doctorRepository.findById(parentDto.getDoctorId()).get();
        Parent parent = parentMapper.convertParentDtoToParent(parentDto);
        parent.setDoctor(doctor);
        parentRepository.save(parent);
        SendEmail.sendConfirmationSignUpMail(parent);
        return parent.getId();
    }

    @Override
    public void deleteParent(Long parentId) {
        parentRepository.deleteById(parentId);
    }

    @Override
    public List<ParentDto> getParentsByName(String name) {
        List<ParentDto> parentsDto = new ArrayList<>();
        List<Parent> parents = parentRepository.getByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(name,name);
        parents.forEach(parent -> parentsDto.add(parentMapper.convertParentToParentDto(parent)));

        return parentsDto;
    }

    @Override
    public String sendMemoForParent(EmailDto emailDto){
        Doctor doctor = doctorRepository.findById(emailDto.getDoctorId()).get();
        String doctorEmail = doctor.getEmail();
        Parent parent = parentRepository.findById(emailDto.getParentId()).get();
        String parentEmail = parent.getEmail();
        ArrayList<ChildVaccineDto> childVaccines = (ArrayList<ChildVaccineDto>) childVaccineRepository.getChildVaccines(emailDto.getChildId());
        Long vaccineId = -1L;
        for(ChildVaccineDto childVaccine : childVaccines){
            if(!childVaccine.getIsDone()){
                vaccineId = childVaccine.getId();
                break;
            }
        }
        Child child = childRepository.findById(emailDto.getChildId()).get();
        if(vaccineId >=0 ){
            Vaccine vaccine = vaccineRepository.findById(vaccineId).get();
            SendEmail.sendVaccineMemo(doctorEmail, parentEmail, child, vaccine);
        }
        return "Email sent";
    }
}
