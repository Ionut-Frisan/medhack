package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.service.ChildVaccineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.file.Files;
import java.nio.file.Paths;
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
    public ResponseEntity<byte[]> generatePdfForChild(@PathVariable Long childId) {
        try {
            childVaccineService.generatePdf(childId);
            final String filePath = "C:/Users/dunca/OneDrive/Desktop/MedHack/Vaccine_Report.pdf";
            final byte[] pdfBytes = Files.readAllBytes(Paths.get(filePath));

            final HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("application/pdf"));
            headers.setContentDispositionFormData("attachment", "Medical_Vaccine_Report");
            headers.setCacheControl("no-cache");

            return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
        }

        return new ResponseEntity<>(null,HttpStatus.OK);
    }

    @GetMapping("/getChild/{childVaccineId}")
    public ResponseEntity<ChildDto> getChild(@PathVariable Long childVaccineId) {
        return new ResponseEntity<>(childVaccineService.getChild(childVaccineId),HttpStatus.OK);
    }

}
