package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor,Long> {
    Optional<Doctor> getByEmailAndPassword(String email, String password);
}
