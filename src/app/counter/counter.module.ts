import { NgModule } from "@angular/core";
import { counterComponent } from "./component/counter/counter.component";

@NgModule({
  exports:[
    counterComponent
  ],
  declarations: [
    counterComponent
  ]
})

export class CounterModule{

}
