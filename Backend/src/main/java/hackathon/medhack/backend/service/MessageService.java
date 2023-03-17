package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.Message;

import java.util.List;

public interface MessageService {
    List<Message> messagesForParent(Long parentId);

    Long addMessage(Message message);
}
