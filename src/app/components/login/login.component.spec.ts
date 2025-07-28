import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sollte erstellt werden', () => {
    expect(component).toBeTruthy();
  });

  it('sollte Username und Passwort Felder anzeigen', () => {
    const usernameInput = fixture.debugElement.query(By.css('input[type="text"]'));
    const passwordInput = fixture.debugElement.query(By.css('input[type="password"]'));
    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('sollte Login Button anzeigen', () => {
    const loginButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(loginButton.nativeElement.textContent).toContain('Login');
  });

  it('sollte Google Login Button anzeigen', () => {
    const googleButton = fixture.debugElement.query(By.css('button.btn-outline-danger'));
    expect(googleButton.nativeElement.textContent).toContain('Google');
  });

  it('sollte onLogin Methode aufrufen beim Klick auf Login', () => {
    spyOn(component, 'onLogin');
    const loginButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    loginButton.nativeElement.click();
    expect(component.onLogin).toHaveBeenCalled();
  });

  it('sollte onGoogleLogin Methode aufrufen beim Klick auf Google Login', () => {
    spyOn(component, 'onGoogleLogin');
    const googleButton = fixture.debugElement.query(By.css('button.btn-outline-danger'));
    googleButton.nativeElement.click();
    expect(component.onGoogleLogin).toHaveBeenCalled();
  });
});

