package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.EmailDto;
import hackathon.medhack.backend.model.dto.ParentDto;

import java.util.List;

public interface ParentService {
    List<ParentDto> getAllParents();
    ParentDto getParent(Long parentId);
    List<ChildDto> getChildrenForParent(Long parentId);
    Long addParent(ParentDto parentDto);
    void deleteParent(Long parentId);

    List<ParentDto> getParentsByName(String name);
    String sendMemoForParent(EmailDto emailDto);
}
