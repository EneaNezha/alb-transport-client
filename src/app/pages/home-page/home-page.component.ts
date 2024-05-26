import { Component } from '@angular/core';
import {UpcommingRoutesComponent} from "./components/upcomming-routes/upcomming-routes.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UpcommingRoutesComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
