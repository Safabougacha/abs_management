import { TestBed } from '@angular/core/testing';

import { StudentAbsenceService } from './student-absence-service.service';

describe('StudentAbsenceServiceService', () => {
  let service: StudentAbsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentAbsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
