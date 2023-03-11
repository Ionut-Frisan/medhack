package hackathon.medhack.backend.model.mapper;

import hackathon.medhack.backend.model.Doctor;
import hackathon.medhack.backend.model.dto.DoctorDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class DoctorMapper {

    public DoctorDto convertDoctorToDoctorDto(Doctor doctor) {
        return new DoctorDto(doctor.getId(),
                doctor.getFirstName(),
                doctor.getLastName(),
                doctor.getEmail(),
                doctor.getPassword(),
                doctor.getPhoneNumber(),
                doctor.getClinic()
        );
    }

    public Doctor convertDoctorDtoToDoctor(DoctorDto doctor) {
        return new Doctor(doctor.getId(),
                doctor.getFirstName(),
                doctor.getLastName(),
                doctor.getEmail(),
                doctor.getPassword(),
                doctor.getPhoneNumber(),
                doctor.getClinic(),
                null
        );
    }
}
