package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.Doctor;
import hackathon.medhack.backend.model.Parent;
import hackathon.medhack.backend.model.dto.LoginDto;
import hackathon.medhack.backend.model.dto.LoginResponseDto;
import hackathon.medhack.backend.repository.DoctorRepository;
import hackathon.medhack.backend.repository.ParentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
@RequiredArgsConstructor
public class LoginController {

    private final DoctorRepository doctorRepository;

    private final ParentRepository parentRepository;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto loginDto) {
        if (doctorRepository.getByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword()).isPresent()) {
            Doctor doctor = doctorRepository.getByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword()).get();
            return new ResponseEntity<>(
                    new LoginResponseDto(doctor.getId(), "doctor", true),
                    HttpStatus.OK
            );
        }

        if (parentRepository.getByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword()).isPresent()) {
            Parent parent = parentRepository.getByEmailAndPassword(loginDto.getEmail(), loginDto.getPassword()).get();
            return new ResponseEntity<>(
                    new LoginResponseDto(parent.getId(), "parent", true),
                    HttpStatus.OK
            );
        }

        return new ResponseEntity<>(new LoginResponseDto(null,null,false),HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register() {
        return null;
    }
}
