package hackathon.medhack.backend.controller;

import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.ParentDto;
import hackathon.medhack.backend.service.ParentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/parent")
@RequiredArgsConstructor
public class ParentController {
    public final ParentService parentService;

    @GetMapping("/all")
    public ResponseEntity<List<ParentDto>> getAllParents() {
        return new ResponseEntity<>(parentService.getAllParents(),HttpStatus.OK);
    }

    @GetMapping("/{parentId}")
    public ResponseEntity<ParentDto> getParent(@PathVariable Long parentId) {
        return new ResponseEntity<>(parentService.getParent(parentId), HttpStatus.OK);
    }

    @GetMapping("children/{parentId}")
    public ResponseEntity<List<ChildDto>> getChildrenForParent(@PathVariable Long parentId) {
        return new ResponseEntity<>(parentService.getChildrenForParent(parentId),HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Long> addParent(@RequestBody ParentDto parentDto) {
        return new ResponseEntity<>(parentService.addParent(parentDto), HttpStatus.OK);
    }

    @DeleteMapping("/{parentId}")
    public ResponseEntity<String> deleteParent(@PathVariable Long parentId) {
        parentService.deleteParent(parentId);
        return new ResponseEntity<>("Parent deleted", HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<ParentDto>> getParentsByName(@PathVariable String name) {
        return new ResponseEntity<>(parentService.getParentsByName(name), HttpStatus.OK);
    }

}
