package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.ChildVaccine;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChildVaccineRepository extends JpaRepository<ChildVaccine, Long> {

    @Query("SELECT new hackathon.medhack.backend.model.dto.ChildVaccineDto(va.id, va.name, cv.childVaccineDate, cv.isDone) " +
            "FROM ChildVaccine cv " +
            "JOIN Child ch ON ch.id = cv.child.id " +
            "JOIN Vaccine va ON va.id = cv.vaccine.id WHERE cv.child.id = :childId")
    List<ChildVaccineDto> getChildVaccines(Long childId);
}
