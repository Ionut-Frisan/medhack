package hackathon.medhack.backend.service.implementation;

import hackathon.medhack.backend.model.Message;
import hackathon.medhack.backend.repository.MessageRepository;
import hackathon.medhack.backend.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class MessageServiceImplementation implements MessageService {

    private final MessageRepository messageRepository;

    @Override
    public List<Message> messagesForParent(Long parentId) {
        return messageRepository.getMessageByParentId(parentId);
    }

    @Override
    public Long addMessage(Message message) {
        messageRepository.save(message);
        return message.getId();
    }
}
