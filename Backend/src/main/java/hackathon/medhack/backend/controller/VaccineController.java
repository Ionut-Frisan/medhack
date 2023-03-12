package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.service.VaccineService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/vaccine")
@RequiredArgsConstructor
public class VaccineController {
    public final VaccineService vaccineService;
}
