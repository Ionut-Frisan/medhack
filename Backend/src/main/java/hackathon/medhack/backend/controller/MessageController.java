package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.Message;
import hackathon.medhack.backend.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/message")
@RequiredArgsConstructor
public class MessageController {

    private final MessageService messageService;

    @PostMapping("/add")
    public ResponseEntity<Long> addMessage(@RequestBody Message message) {
        return new ResponseEntity<>(messageService.addMessage(message), HttpStatus.OK);
    }

    @GetMapping("/{parentId}")
    public ResponseEntity<List<Message>> getMessagesForParent(@PathVariable Long parentId) {
        return new ResponseEntity<>(messageService.messagesForParent(parentId), HttpStatus.OK);
    }
}
