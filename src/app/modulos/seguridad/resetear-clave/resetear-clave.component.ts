import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResetearContrasenaModelo } from 'src/app/modelos/resetear-contrasena.modelo';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-resetear-clave',
  templateUrl: './resetear-clave.component.html',
  styleUrls: ['./resetear-clave.component.css']
})
export class ResetearClaveComponent implements OnInit {
  fgValidator: FormGroup;

  constructor(private fb: FormBuilder,
    private service: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.fgValidator = this.fb.group({
      correo: ['', [Validators.required]]
    });
  }

  PasswordResetFn() {
    if (this.fgValidator.invalid) {
      alert("Invalid form.");
    } else {
      //alert("Registering...");
      let model = this.getPasswordData();
      this.service.PasswordReset(model).subscribe(
        data => {
          alert("Your password has been reset successfuly, please check your phone.");
          this.router.navigate(['/home']);
        },
        error => {
          alert("Invalid data.");
        }
      );
    }
  }

  getPasswordData(): ResetearContrasenaModelo {
    let model = new ResetearContrasenaModelo();
    model.correo = this.fgv.correo.value;
 
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
