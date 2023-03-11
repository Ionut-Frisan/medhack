package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParentRepository extends JpaRepository<Parent, Long> {
}
