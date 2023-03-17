package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> getMessageByParentId(Long parentId);
}
