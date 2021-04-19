import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


@NgModule({
  declarations: [MyLibComponent, WelcomeComponent],
  imports: [],
  exports: [MyLibComponent, WelcomeComponent]
})
export class MyLibModule { }
