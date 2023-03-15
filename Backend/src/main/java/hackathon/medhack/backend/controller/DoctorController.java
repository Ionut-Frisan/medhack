package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.DoctorDto;
import hackathon.medhack.backend.model.dto.ParentDto;
import hackathon.medhack.backend.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/doctor")
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping("/all")
    public ResponseEntity<List<DoctorDto>> getAll() {
        return new ResponseEntity<>(doctorService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{doctorId}")
    public ResponseEntity<DoctorDto> getDoctor(@PathVariable Long doctorId) {
        return new ResponseEntity<>(doctorService.getDoctor(doctorId), HttpStatus.OK);
    }

    @GetMapping("parents/{doctorId}")
    public ResponseEntity<List<ParentDto>> getParentsForDoctor(@PathVariable Long doctorId) {
        return new ResponseEntity<>(doctorService.getParentsForDoctor(doctorId), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Long> addDoctor(@RequestBody DoctorDto doctorDto) {
        return new ResponseEntity<>(doctorService.addDoctor(doctorDto), HttpStatus.OK);
    }

    @DeleteMapping("/{doctorId}")
    public ResponseEntity<String> deleteDoctor(@PathVariable Long doctorId) {
        doctorService.deleteDoctor(doctorId);
        return new ResponseEntity<>("Doctor deleted", HttpStatus.OK);
    }

}
