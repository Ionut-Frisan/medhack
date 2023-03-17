package hackathon.medhack.backend.controller;

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
    //comment

}
