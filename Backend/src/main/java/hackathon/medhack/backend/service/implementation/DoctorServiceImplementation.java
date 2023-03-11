package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Doctor;
import hackathon.medhack.backend.model.dto.DoctorDto;
import hackathon.medhack.backend.model.mapper.DoctorMapper;
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

    @Override
    public List<DoctorDto> getAll() {
        List<DoctorDto> doctorsDto = new ArrayList<>();
        List<Doctor> doctors = doctorRepository.findAll();
        doctors.forEach(doctor -> doctorsDto.add(doctorMapper.convertDoctorToDoctorDto(doctor)));

        return doctorsDto;
    }
}
