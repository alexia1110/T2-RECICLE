import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { initComponent } from './init.component';

describe('initComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        initComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(initComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EcoQR'`, () => {
    const fixture = TestBed.createComponent(initComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EcoQR');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(initComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('EcoQR app is running!');
  });
});
