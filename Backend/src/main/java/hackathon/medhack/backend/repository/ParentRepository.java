package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ParentRepository extends JpaRepository<Parent, Long> {
    Optional<Parent> getByEmailAndPassword(String email, String password);
}
