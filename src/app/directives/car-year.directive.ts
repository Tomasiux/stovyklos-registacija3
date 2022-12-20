import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[kidAges]',
  providers:[
    { provide: NG_VALIDATORS, useExisting:kidAgesDirective, multi:true}
  ]
})
export class kidAgesDirective implements Validator{

  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let year:number=control.value;
    if (year<= (new Date()).getFullYear() -5 ){
      return null;
    }else{
      return { error:"Metai netisingi"}
    }
  }

}
