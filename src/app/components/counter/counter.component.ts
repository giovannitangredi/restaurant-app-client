import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

    public static get STARTING_VALUE() : number { return 1};
    @Output()
    valueEmitter = new EventEmitter<number>();

    counterValue = new FormControl(CounterComponent.STARTING_VALUE);

    @Input() 
    counterId : string = '';

     increase() {
      const newValue = this.counterValue.getRawValue();
      if (newValue) {
        this.counterValue.setValue(newValue + 1);
        this.valueEmitter.emit(newValue + 1);
      }
    }
    decrease() {
      const newValue = this.counterValue.getRawValue()
      if (newValue && newValue > 1) {
        this.counterValue.setValue(newValue - 1);
        this.valueEmitter.emit(newValue - 1);
      }
    }
    
}
