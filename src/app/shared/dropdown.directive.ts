import { Directive , HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})

export class DropdownDirective{

	@HostBinding('class.open') dropdownstatus = false;
	@HostListener('click') toggleOpen(){
		this.dropdownstatus = !this.dropdownstatus;
	}

}