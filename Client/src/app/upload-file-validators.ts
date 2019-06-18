import { FormControl } from '@angular/forms';

export function requiredFileType(types: string[]) {
  return function (control: FormControl) {
    const file = control.value;
    let valid = false;
    if (file) {
      const extension = file.name.split('.')[1].toLowerCase();
      for (const type of types) {
        if (type.toLowerCase() == extension.toLowerCase()) {
          valid = true;
        }
      }
    }
    return valid ? null : {
      requiredFileType: true
    };
  };
}
