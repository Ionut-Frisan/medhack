package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Vaccine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VaccineRepository extends JpaRepository<Vaccine, Long> {
}
