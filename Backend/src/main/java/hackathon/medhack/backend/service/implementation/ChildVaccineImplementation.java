package hackathon.medhack.backend.service.implementation;

import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.property.TextAlignment;
import hackathon.medhack.backend.model.Child;
import hackathon.medhack.backend.model.ChildVaccine;
import hackathon.medhack.backend.model.dto.ChildDto;
import hackathon.medhack.backend.model.dto.ChildVaccineDto;
import hackathon.medhack.backend.model.mapper.ChildMapper;
import hackathon.medhack.backend.repository.ChildRepository;
import hackathon.medhack.backend.repository.ChildVaccineRepository;
import hackathon.medhack.backend.service.ChildVaccineService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.io.FileNotFoundException;
import java.util.Comparator;
import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
@Slf4j
public class ChildVaccineImplementation implements ChildVaccineService {

    private final ChildVaccineRepository childVaccineRepository;

    private final ChildRepository childRepository;

    private final ChildMapper childMapper;

    @Override
    public List<ChildVaccineDto> getChildVaccines(Long childId) {
        return childVaccineRepository.getChildVaccines(childId);
    }

    @Override
    public ChildVaccineDto updateChildVaccine(ChildVaccineDto childVaccineDto) {
        if (childVaccineRepository.findById(childVaccineDto.getId()).isEmpty()) {
            return null;
        }
        ChildVaccine childVaccine = childVaccineRepository.findById(childVaccineDto.getId()).get();
        childVaccine.setDateWhenDone(childVaccineDto.getDateWhenDone());
        childVaccine.setIsDone(childVaccineDto.getIsDone());

        childVaccineRepository.save(childVaccine);

        childVaccineDto.setName(childVaccine.getVaccine().getName());
        childVaccineDto.setChildVaccineDate(childVaccine.getChildVaccineDate());
        return childVaccineDto;
    }

    Comparator<ChildVaccineDto> compareById = Comparator.comparing(ChildVaccineDto::getId);

    @Override
    public boolean generatePdf(Long childId) throws FileNotFoundException {
        List<ChildVaccineDto> childVaccinesDto = childVaccineRepository.getChildVaccines(childId);
        childVaccinesDto.sort(compareById);

        if (childRepository.findById(childId).isEmpty()) {
            return false;
        }

        Child child = childRepository.findById(childId).get();
        String childDataString = String.format("%s %s born %s, sex %s, with CNP: %s, residence %s",
                child.getFirstName(), child.getLastName(),
                child.getDateOfBirth().toString(), child.getGender(),
                child.getCNP(), child.getPermanentResidence());

        String destination = "D:/MedHack/Backend/src/main/resources/Vaccine_Report.pdf";
        PdfDocument pdf = new PdfDocument(new PdfWriter(destination));
        Document document = new Document(pdf);

        Paragraph title = new Paragraph("Vaccine Information");
        title.setTextAlignment(TextAlignment.CENTER);
        title.setBold();
        title.setFontSize(24);
        document.add(title);

        Paragraph space = new Paragraph("\n");
        document.add(space);

        Paragraph childData = new Paragraph(childDataString);
        document.add(childData);

        document.add(space);

        float [] pointColumnWidths = {150F, 150F, 150F, 150F};
        Table table = new Table(pointColumnWidths);
        table.addCell("Nr. Crt");
        table.addCell("Name");
        table.addCell("Vaccine Date");
        table.addCell("Done");

        childVaccinesDto.forEach(childVaccineDto -> {
            table.addCell(childVaccineDto.getId().toString());
            table.addCell(childVaccineDto.getName());
            table.addCell(childVaccineDto.getChildVaccineDate().toString());
            table.addCell(childVaccineDto.getIsDone().toString());
        });

        document.add(table);
        document.close();

        return true;
    }

    @Override
    public ChildDto getChild(Long childVaccineId) {
        ChildVaccine childVaccine = childVaccineRepository.findById(childVaccineId).get();

        return childMapper.convertChildToChildDto(childVaccine.getChild());
    }
}
