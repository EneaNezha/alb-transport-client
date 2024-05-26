import {Component, inject, Input, OnInit} from '@angular/core';
import {RouteRead} from "../../../../dto/route-read";
import {RouterLink} from "@angular/router";
import {RoutesService} from "../../../../services/routes/routes.service";

@Component({
  selector: 'app-upcomming-routes',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './upcomming-routes.component.html',
  styleUrl: './upcomming-routes.component.css'
})
export class UpcommingRoutesComponent implements OnInit{
  @Input("from") from: string = "";
  routes: RouteRead[] = [];

  constructor(private routeService: RoutesService) {
    //inject(RoutesService)
  }

  ngOnInit(): void {
    this.getRoutes();
  }

  getRoutes() {
    this.routeService.getUpComingByTerminalCity(this.from).subscribe({
      next: items => {
        this.routes = items;
      },
      error: err => {
        console.error(err);
      }
    })
  }

}
