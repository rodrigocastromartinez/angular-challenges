import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  input = 0
  inputCurrency = 'USD'
  output = 0
  outputCurrency = 'EUR'
  result = ''

  currencies = ['USD', 'EUR', 'POUND']
  currenciesValues = {USD: 1.24, EUR: 1.16, POUND: 1}

  convert() {
    switch(this.inputCurrency) {
      case 'USD':
        if(this.outputCurrency === 'USD') this.output = this.input
        if(this.outputCurrency === 'EUR') this.output = this.input * 0.84
        if(this.outputCurrency === 'POUND') this.output = this.input * 0.75
        break;

      case 'EUR':
        if(this.outputCurrency === 'USD') this.output = this.input / 0.84
        if(this.outputCurrency === 'EUR') this.output = this.input
        if(this.outputCurrency === 'POUND') this.output = this.input * 0.9
        break;

      case 'POUND':
        if(this.outputCurrency === 'USD') this.output = this.input / 0.75
        if(this.outputCurrency === 'EUR') this.output = this.input /0.9
        if(this.outputCurrency === 'POUND') this.output = this.input
        break;
    }

    this.result = this.output.toFixed(2)
  }
}
