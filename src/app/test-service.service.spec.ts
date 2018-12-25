import {async} from "@angular/core/testing";
import {TestServiceService} from "./test-service.service";
import {of} from "rxjs/internal/observable/of";

describe('TestServiceService', () => {
  let cookieServiceSpy: any;
  let httpClientSpy: any;
  let testedService: TestServiceService;
  beforeEach(async(() => {
    cookieServiceSpy = jasmine.createSpyObj("CookieService", ['set', 'get']);
    httpClientSpy = jasmine.createSpyObj("HttpClient", ['get']);
    testedService = new TestServiceService(httpClientSpy, cookieServiceSpy);
  }));

  it('should be created', () => {
    expect(testedService).toBeTruthy();
  });

  it('should return message', () => {
    expect(testedService.getMessage()).toEqual('Test message');
  });

  it('should return configuration', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of({
      name: 'testConfiguration'
    }));
    testedService.getConfiguration().subscribe((conf) => {
      expect(conf.name).toEqual('testConfiguration');
      done();
    });
  });

  it('should save cookie', () => {
    cookieServiceSpy.get.and.returnValue('testValue');
    expect(testedService.getTestCookie()).toBeTruthy();
  });
});
