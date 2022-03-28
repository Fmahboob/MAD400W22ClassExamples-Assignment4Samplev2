import { TestBed } from '@angular/core/testing';
import { InMemoryDataService } from './in-memory-data.service';

import { PokemonService } from './pokemon-service.service';

describe('InMemoryDaraService', () => {
  let service: PokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
