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
                child.getParent().getId());
    }
    public Child convertChildDtoToChild(ChildDto childDto) {
        return new Child(childDto.getId(),
                childDto.getFirstName(),
                childDto.getLastName(),
                childDto.getDateOfBirth(),
                null,
                null);
    }
}
