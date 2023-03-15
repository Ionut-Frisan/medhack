package hackathon.medhack.backend.service;

import hackathon.medhack.backend.model.dto.ChildDto;

import java.util.List;

public interface ChildService {
    List<ChildDto> getAllChildren();

    ChildDto getChild(Long childId);

    Long addChild(ChildDto childDto);

    void deleteChild(Long childId);
}
