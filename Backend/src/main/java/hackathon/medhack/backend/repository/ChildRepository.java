package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Child;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChildRepository extends JpaRepository<Child, Long> {
}
