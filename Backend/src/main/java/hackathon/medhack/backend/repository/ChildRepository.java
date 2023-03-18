package hackathon.medhack.backend.repository;

import hackathon.medhack.backend.model.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChildRepository extends JpaRepository<Child, Long> {
    List<Child> getByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String firstName, String lastName);

    @Query("Select c from Child c " +
            "join Parent p on p.id = c.parent.id " +
            "join Doctor d on d.id = p.doctor.id " +
            "where d.id = :doctorId")
    List<Child> getChildrenForDoctor(Long doctorId);

    @Query("Select c from Child c " +
            "join Parent p on p.id = c.parent.id " +
            "join Doctor d on d.id = p.doctor.id " +
            "where d.id = :doctorId and " +
            "(c.firstName LIKE %:name% or " +
            "c.lastName LIKE %:name%)")
    List<Child> getChildrenForDoctorByName(Long doctorId, String name);
}
