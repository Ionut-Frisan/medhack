package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.service.ChildVaccineService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
