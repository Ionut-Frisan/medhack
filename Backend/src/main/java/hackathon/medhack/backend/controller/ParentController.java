package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.service.ParentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/parent")
@RequiredArgsConstructor
public class ParentController {
    public final ParentService parentService;
}
