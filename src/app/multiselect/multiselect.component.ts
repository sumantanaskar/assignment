import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css']
})
export class MultiselectComponent implements OnInit{
  @Input() value: string[] = [];
  @Input() readonly: boolean = false;

  isDropdownOpen: boolean = false;
  options = ['Apple', 'Mango', 'Kiwi','Jackfruits','Grapes'];
  selectedOptions: string[] = [];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  ngOnInit(): void {
    this.selectedOptions = this.value;
    console.log(this.selectedOptions)
  }

 

  isSelected(option: string) {
    return this.selectedOptions.includes(option);
    
  }
  toggleOption(option: string) {
    console.log('Hello',this.isSelected(option));
    if (this.isSelected(option)) {
      console.log('New',this.selectedOptions);
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    } else {
      if (this.selectedOptions.length < 3) {
        this.selectedOptions.push(option);
      }
    }
  }
  deleteOption(option: string) {
    this.selectedOptions = this.selectedOptions.filter(o => o !== option);
  }
  

}
