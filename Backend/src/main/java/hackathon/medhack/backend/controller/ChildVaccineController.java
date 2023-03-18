package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.service.ChildVaccineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/child_vaccine")
@RequiredArgsConstructor
public class ChildVaccineController {

    private final ChildVaccineService childVaccineService;

    @GetMapping("/{childId}")
    public ResponseEntity<List<?>> getChildVaccines(@PathVariable Long childId) {
        return new ResponseEntity<>(childVaccineService.getChildVaccines(childId), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<ChildVaccineDto> updateChildVaccine(@RequestBody ChildVaccineDto childVaccineDto) {
        return new ResponseEntity<>(childVaccineService.updateChildVaccine(childVaccineDto), HttpStatus.OK);
    }

    @GetMapping("/generatePdf/{childId}")
    public ResponseEntity<String> generatePdfForChild(@PathVariable Long childId) {
        try {
            childVaccineService.generatePdf(childId);
        } catch (Exception e) {
            System.out.println(e);
        }

        return new ResponseEntity<>("Generated pdf",HttpStatus.OK);
    }

}
