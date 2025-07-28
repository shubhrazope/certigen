package com.edutools.certigen.repo;

import com.edutools.certigen.model.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificatesRepo extends JpaRepository<Certificate, Long> {
}
