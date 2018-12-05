import { TestBed, async } from '@angular/core/testing';
import { TestServiceService } from './test-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './apiInterseptor.service';

describe('TestServiceService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: APIInterceptor,
          multi: true,
        }
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    expect(service).toBeTruthy();
  });

  it('should return message', () => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    expect(service.getMessage()).toEqual('Test message');
  }); 

  it('should return configuration', (done: DoneFn) => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    service.getConfiguration().subscribe((conf) => {
      expect(conf.name).toEqual('testConfiguration');
      done();
    });
  });
});
