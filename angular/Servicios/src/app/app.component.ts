import { PlanetasService } from './planetas.service';
import { PersonasService } from './personas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private planetasService: PlanetasService) { }

  ngOnInit() {
    this.planetasService.getRandomNum()
      .then(response => {
        console.log(response);
      })

    // let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    // localStorage.setItem('arrNums', JSON.stringify(arr));

    console.log(JSON.parse(localStorage.getItem('arrNums')));

    this.planetasService.getNames()
      .then(
        arr => console.log(arr)
      );
  }

}
