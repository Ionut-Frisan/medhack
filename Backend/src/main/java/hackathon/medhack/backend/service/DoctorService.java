package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.dto.DoctorDto;
import hackathon.medhack.backend.model.dto.ParentDto;

import java.util.List;

public interface DoctorService {
    List<DoctorDto> getAll();

    List<ParentDto> getParentsForDoctor(Long doctorId);

    Long addDoctor(DoctorDto doctorDto);
}
