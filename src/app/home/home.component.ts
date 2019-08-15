import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colors = [
    'warn',
    'primary',
    'accent',
    ''
  ]

  clickValue = 0

  idx = 0

  spinnerMode = 'determinate'

  btnEnable: boolean = true; 
  selectDisabled: boolean = false
  selectedOption: any

  constructor() { }

  ngOnInit() {
    setInterval( () =>{
      this.idx = (this.idx + 1) % this.colors.length
    }, 1000)
  }


  updateValue(){
    this.clickValue = (this.clickValue + 10) % 110
  }

  disable(){
    this.btnEnable = false
    this.spinnerMode = 'indeterminate'
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate'
    }, 3000)
  }

  cbChange($event){
    console.log($event.checked);
    this.selectDisabled = $event.checked
  }

  selectionChange($event){
    console.log($event);

    this.selectedOption = $event.value
    
  }

}