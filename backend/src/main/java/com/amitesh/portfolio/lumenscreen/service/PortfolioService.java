package com.amitesh.portfolio.lumenscreen.service;

import com.amitesh.portfolio.lumenscreen.api.CreateRecordRequest;
import com.amitesh.portfolio.lumenscreen.domain.PortfolioRecord;
import org.springframework.stereotype.Service;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.UUID;
import java.util.concurrent.CopyOnWriteArrayList;

@Service
public class PortfolioService {
    private final CopyOnWriteArrayList<PortfolioRecord> records = new CopyOnWriteArrayList<>(List.of(
            new PortfolioRecord(UUID.randomUUID(), "Editorial review", "IN_REVIEW", "Programme task", Instant.now()),
            new PortfolioRecord(UUID.randomUUID(), "Caption quality check", "READY", "Programme task", Instant.now()),
            new PortfolioRecord(UUID.randomUUID(), "Release schedule update", "OPEN", "Programme task", Instant.now())
    ));

    public List<PortfolioRecord> findAll(String query) {
        if (query == null || query.isBlank()) return List.copyOf(records);
        String needle = query.toLowerCase(Locale.ROOT);
        return records.stream().filter(item -> (item.title() + " " + item.status() + " " + item.note()).toLowerCase(Locale.ROOT).contains(needle)).toList();
    }

    public PortfolioRecord create(CreateRecordRequest request) {
        PortfolioRecord created = new PortfolioRecord(UUID.randomUUID(), request.title().trim(), "OPEN", request.note().trim(), Instant.now());
        records.add(0, created);
        return created;
    }
}
