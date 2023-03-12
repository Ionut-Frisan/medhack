package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.repository.ChildRepository;
import hackathon.medhack.backend.service.ChildService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class ChildServiceImplementation implements ChildService {
    private final ChildRepository childRepository;

}
