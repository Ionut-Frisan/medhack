package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Vaccine;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VaccineRepository extends JpaRepository<Vaccine, Long> {
    List<Vaccine> getByNameContainingIgnoreCase(String name);
}
