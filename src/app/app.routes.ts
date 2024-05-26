import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {RoutePageComponent} from "./pages/route-page/route-page.component";
import {BookingPageComponent} from "./pages/booking-page/booking-page.component";
import {SigninPageComponent} from "./pages/signin-page/components/signin-page.component";


export const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "routes", component: RoutePageComponent},
  {path: "booking:id", component: BookingPageComponent},
  {path: "contact", component: ContactPageComponent},
  {path: "sign-in", component: SigninPageComponent},
  {path: "driver", component: SigninPageComponent},

];
