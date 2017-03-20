import { Component } from '@angular/core';
import { HumanInteraction, FireLoopRef } from './shared/sdk/models';
import { RealTime } from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuber.ai - make your idea work!';

  private humanInter : HumanInteraction = new HumanInteraction();
  private humanInterRef : FireLoopRef<HumanInteraction>;
  
  constructor(private rt:RealTime){ 
 	
  }
  

  create(): void {
    this.humanInterRef.create(this.humanInter).subscribe(() => this.humanInter = new HumanInteraction()); 
  }
}
