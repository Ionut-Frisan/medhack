package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Doctor;
import hackathon.medhack.backend.model.Parent;
import hackathon.medhack.backend.model.dto.DoctorDto;
import hackathon.medhack.backend.model.dto.ParentDto;
import hackathon.medhack.backend.model.mapper.DoctorMapper;
import hackathon.medhack.backend.model.mapper.ParentMapper;
import hackathon.medhack.backend.repository.DoctorRepository;
import hackathon.medhack.backend.service.DoctorService;
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
public class DoctorServiceImplementation implements DoctorService {

    private final DoctorRepository doctorRepository;
    private final DoctorMapper doctorMapper;
    private final ParentMapper parentMapper;

    @Override
    public List<DoctorDto> getAll() {
        List<DoctorDto> doctorsDto = new ArrayList<>();
        List<Doctor> doctors = doctorRepository.findAll();
        doctors.forEach(doctor -> doctorsDto.add(doctorMapper.convertDoctorToDoctorDto(doctor)));

        return doctorsDto;
    }

    @Override
    public List<ParentDto> getParentsForDoctor(Long doctorId) {
        List<ParentDto> parentsDto = new ArrayList<>();
        if (doctorRepository.findById(doctorId).isEmpty()) {
            return null;
        }
        Doctor doctor = doctorRepository.findById(doctorId).get();
        List<Parent> parents = doctor.getParents();
        parents.forEach(parent -> parentsDto.add(parentMapper.convertParentToParentDto(parent)));

        return parentsDto;
    }
}
