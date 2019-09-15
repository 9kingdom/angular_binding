import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
		<h1>
		<font color="red">This is {{ bindingType }}</font>
		</h1>

    <div style="text-align:center">
      <h2><font color='blue'>String pipes</font></h2>
      <h2>{{ name | lowercase }} - zmiana na małą literę</h2>
      <h2>{{ message | titlecase }} - zmiana na 'camel case'</h2>
      <h2>{{ name | slice:2 }} - slice od indexu=2</h2>
      <h2>{{ name | slice:2:4 }} - slice od indexu=2 (included) do indexu=4 (not included)</h2>
      <h2>{{ name | slice:2 | uppercase }} - slice od indexu=2 + upper case</h2>
      <h2>{{ personObject | json }} - json pipe czyli widok w formacie json</h2>
      <h2><font color='blue'>Numbers pipes</font></h2>
      <h2>{{ 5.678 | number: '3.4-5' }}</h2>
      <!--1 to minimalna ilość cyfr przed przecinkiem
          2 to minimalna ilość cyfr po przecinku
          3 to max. ilość cyfr po przecinku
          Wynik => 005.6780-->
      <h2>{{ 5.678 | number: '3.1-2' }}</h2>
      <!--5.678 zostanie zaokrąglone do 005.68-->
      <h2>{{ 0.25 | percent }}</h2>
      <h2>{{ 0.25 | currency }}</h2> <!--Domyślna waluta to $, sprawdź ISO currency codes-->
      <h2>{{ 0.25 | currency: 'GBP'}}</h2>
      <h2>{{ 0.25 | currency: 'GBP': 'code'  }}</h2><!--zamiast symbolu będzie 3-literowy skrót-->
      <h2>{{ 0.25 | currency: 'PLN' }}</h2>
      <h2>{{ 0.25 | currency: 'EUR' }}</h2>
      <h2><font color='blue'>Date pipes</font></h2>
      <h2>{{ date }}</h2><!--format domyślny-->
      <h2>{{ date | date: 'short'}} -short format</h2>
      <h2>{{ date | date: 'medium'}} -medium format</h2>
      <h2>{{ date | date: 'long'}} -long format</h2>
      <h2>{{ date | date: 'shortDate'}} -short format, tylko data</h2>
      <h2>{{ date | date: 'mediumTime'}} -medium format, tylko czas</h2>
      <h2>{{ date | date: 'HH:mm:ss a z'}} -custom time format</h2>
      <!--  HH - godziny w formacie 24h
            hh - godziny w formacie 12h
            mm - minuty
            MM - miesiące
            a - AM/PM
            z - strefa czasowa -->
      </div>

	`,
  styles: []
})
export class PipesComponent implements OnInit {

  bindingType = '<Pipes>';

  public name = 'Robert';
  public message = 'To jest jakiś "title"';
  public personObject = {
    firstName: 'Sara',
    lastName: 'Krupicka'
  };
  public date = new Date();


  constructor() { }

  ngOnInit() {
  }

}
