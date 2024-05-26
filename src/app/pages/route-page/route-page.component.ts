import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-route-detail-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './route-page.component.html',
  styleUrl: './route-page.component.css'
})
export class RoutePageComponent {

}
