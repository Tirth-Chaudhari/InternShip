import { TestBed } from '@angular/core/testing';

import { NoteBookService } from './note-book.service';

describe('NoteBookService', () => {
  let service: NoteBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
