package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.dto.DoctorDto;

import java.util.List;

public interface DoctorService {
    List<DoctorDto> getAll();
}
