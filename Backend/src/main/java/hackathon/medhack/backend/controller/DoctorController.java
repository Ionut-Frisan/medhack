package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.DoctorDto;
import hackathon.medhack.backend.service.DoctorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/doctor")
@RequiredArgsConstructor
public class DoctorController {
    private final DoctorService doctorService;

    @GetMapping("/all")
    public ResponseEntity<List<DoctorDto>> getAll() {
        return new ResponseEntity<>(doctorService.getAll(), HttpStatus.OK);
    }
}
