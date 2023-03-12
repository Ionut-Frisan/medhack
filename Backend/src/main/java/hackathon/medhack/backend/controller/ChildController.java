package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.service.ChildService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/child")
@RequiredArgsConstructor
public class ChildController {
    private final ChildService childService;
}
