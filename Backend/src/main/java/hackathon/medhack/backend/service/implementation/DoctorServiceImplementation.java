package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Doctor;
import hackathon.medhack.backend.repository.DoctorRepository;
import hackathon.medhack.backend.service.DoctorService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class DoctorServiceImplementation implements DoctorService {

    private final DoctorRepository doctorRepository;

    @Override
    public List<Doctor> getAll() {
        return doctorRepository.findAll();
    }
}
