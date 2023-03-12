package hackathon.medhack.backend.model.mapper;

import hackathon.medhack.backend.model.Parent;
import hackathon.medhack.backend.model.dto.ParentDto;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class ParentMapper {

    public ParentDto convertParentToParentDto(Parent parent) {
        return new ParentDto(parent.getId(),
                parent.getFirstName(),
                parent.getLastName(),
                parent.getEmail(),
                parent.getPassword(),
                parent.getPhoneNumber(),
                parent.getDoctor().getId()
        );
    }

    public Parent convertParentDtoToParent(ParentDto parentDto) {
        return new Parent(parentDto.getId(),
                parentDto.getFirstName(),
                parentDto.getLastName(),
                parentDto.getEmail(),
                parentDto.getPassword(),
                parentDto.getPhoneNumber(),
                null,
                null
        );
    }
}
