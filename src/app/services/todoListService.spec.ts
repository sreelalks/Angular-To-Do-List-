import { TestBed } from '@angular/core/testing';

import { todoListService } from './todoListService';

describe('todoListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: todoListService = TestBed.get(todoListService);
    expect(service).toBeTruthy();
  });
});
