package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.model.dto.VaccineDto;
import hackathon.medhack.backend.service.VaccineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/vaccine")
@RequiredArgsConstructor
public class VaccineController {
    public final VaccineService vaccineService;

    @GetMapping("/all")
    public ResponseEntity<List<VaccineDto>> getVaccines() {
        return new ResponseEntity<>(vaccineService.getAllVaccines(), HttpStatus.OK);
    }

    @GetMapping("/{vaccineId}")
    public ResponseEntity<VaccineDto> getVaccine(@PathVariable Long vaccineId) {
        return new ResponseEntity<>(vaccineService.getVaccine(vaccineId),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Long> addVaccine(@RequestBody VaccineDto vaccineDto) {
        return new ResponseEntity<>(vaccineService.addVaccine(vaccineDto),HttpStatus.OK);
    }

    @DeleteMapping("/{vaccineId}")
    public ResponseEntity<String> deleteVaccine(@PathVariable Long vaccineId) {
        vaccineService.deleteVaccine(vaccineId);
        return new ResponseEntity<>("Vaccine deleted", HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<VaccineDto>> getVaccinesByName(@PathVariable String name) {
        return new ResponseEntity<>(vaccineService.getVaccinesByName(name),HttpStatus.OK);
    }

    @GetMapping("/getNextVaccines/{doctorId}")
    public ResponseEntity<List<ChildVaccineDto>> getNextVaccines(@PathVariable Long doctorId) {
        return new ResponseEntity<>(vaccineService.getVaccinesForDoctor(doctorId), HttpStatus.OK);
    }
}
