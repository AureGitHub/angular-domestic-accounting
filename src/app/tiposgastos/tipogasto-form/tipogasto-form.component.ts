import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
selector: 'tipogasto-form',
//templateUrl: './tipogasto-form.component-ModelDriven.html',
templateUrl: './tipogasto-form.component-ReactiveForms.html',

//styleUrls: ['./tipogasto-form.component.css']
})
export class TipoGastoFormComponent  implements OnInit  {
formGroup: FormGroup
constructor(private formBuilder: FormBuilder){}
ngOnInit(){
    this.formGroup = this.formBuilder.group({
        descripcion: ['', [Validators.required, Validators.minLength(4)]]
        });
}



save(tipogasto) {
    window.alert(this.formGroup.valid);
    return false;
}

}