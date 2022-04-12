import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {  OnboardingComponent } from './obng.component';

describe(' OnboardingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
         OnboardingComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent( OnboardingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EcoQR'`, () => {
    const fixture = TestBed.createComponent( OnboardingComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EcoQR');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent( OnboardingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('EcoQR app is running!');
  });
});
