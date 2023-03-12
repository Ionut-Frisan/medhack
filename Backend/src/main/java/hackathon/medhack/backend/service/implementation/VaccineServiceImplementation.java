package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.repository.VaccineRepository;
import hackathon.medhack.backend.service.VaccineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class VaccineServiceImplementation implements VaccineService {
    public final VaccineRepository vaccineRepository;
}
