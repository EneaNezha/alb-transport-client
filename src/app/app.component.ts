import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ButtonsModule} from "ngx-bootstrap/buttons";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooltipModule, ButtonsModule, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alb-transport-client';
}
