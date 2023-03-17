package hackathon.medhack.backend.model.mapper;

import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.dto.ChildDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class ChildMapper {
    public ChildDto convertChildToChildDto(Child child) {
        return new ChildDto(child.getId(),
                child.getFirstName(),
                child.getLastName(),
                child.getDateOfBirth(),
                child.getGender(),
                child.getCNP(),
                child.getPermanentResidence(),
                child.getCurrentResidence(),
                child.getSecondParentFirstName(),
                child.getSecondParentLastName(),
                child.getParent().getId());
    }
    public Child convertChildDtoToChild(ChildDto childDto) {
        return new Child(childDto.getId(),
                childDto.getFirstName(),
                childDto.getLastName(),
                childDto.getDateOfBirth(),
                childDto.getGender(),
                childDto.getCNP(),
                childDto.getPermanentResidence(),
                childDto.getCurrentResidence(),
                childDto.getSecondParentFirstName(),
                childDto.getSecondParentLastName(),
                null,
                null);
    }
}
