import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValid(control: AbstractControl): ValidationErrors | null {
    const val: string = control.value;
    if (val.length < 10) {
        return { "emailHata": { mesaj: "Email alanında en az 10 karakter olmalıdır", hata: true } };
    }
    if (val.indexOf('!') > 0) {
        return { "emailHata": { mesaj: "Email alanında ! karakteri yazılamaz", hata: true } };
    }
    if (!val.match('[a-z]')) {
        return { "emailHata": { mesaj: "Email alanında en az 1 ufak karakter olmalıdır", hata: true } };
    }
    return null;
}

export function emailValidParam(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const val: string = control.value;
        if (val.length > max) {
            return { "emailValidParam": { mesaj: "Email alanında en fazla " + max + " karakter olmalıdır", hata: true } };
        }
        return null;
    }
}

export function formValid(control: AbstractControl): ValidationErrors | null {
    const fg: FormGroup = control as FormGroup;
    const val: string = fg.controls['email']?.value;
    if (val.length < 10) {
        return { "formValid": { mesaj: "Email alanında en az 10 karakter olmalıdır", hata: true } };
    }
    return null;
}