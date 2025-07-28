package com.edutools.certigen.controller;

import com.edutools.certigen.model.Certificate;
import com.edutools.certigen.repo.CertificatesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CertificateController {

    @Autowired
    CertificatesRepo certificatesRepo;

    @PostMapping("/certificates")
    public void saveCertificate(@RequestBody Certificate certificate) {
        certificatesRepo.save(certificate);
    }

    @GetMapping("/certificates")
    public List<Certificate> getAllCertificatesData() {
        return certificatesRepo.findAll();
    }

    @DeleteMapping("/certificates/{id}")
    public void deleteCertificate(@PathVariable Long id){
        certificatesRepo.deleteById(id);
    }

    @PutMapping("/certificates/{id}")
    public void update(@PathVariable Long id, @RequestBody Certificate certificate) {
        Certificate existing = certificatesRepo.findById(id).orElse(null);
        if(existing!=null) {
            existing.setStudentName(certificate.getStudentName());
            existing.setCourse(certificate.getCourse());
            existing.setAchievement(certificate.getAchievement());
            existing.setDate(certificate.getDate());

            certificatesRepo.save(existing);
        }
    }
}
