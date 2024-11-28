import { Component } from '@angular/core';
import jsonData from '../data/DATA.json';
@Component({
  selector: 'app-get-all-nurses',
  templateUrl: './get-all-nurses.component.html',
  styleUrl: './get-all-nurses.component.css'
})
export class GetAllNursesComponent {
  nurses: any[] = jsonData; 

}
