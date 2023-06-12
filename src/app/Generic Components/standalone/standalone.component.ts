import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppSharedModule } from 'src/app/modules/shared/app-shared.module';

// Standalone Components: // now it is not needed in an ngModule, but you need to import it wherever you need it.
// Use it in other components by adding to @Component decorator:
// @Component({
// imports: [StandaloneComponent],
// })
// You can also add standaloneComponent to the ngModule imports

@Component({
  imports: [RouterModule],
  standalone: true,
  selector: 'app-standalone',
  templateUrl: './standalone.component.html',
  styleUrls: ['./standalone.component.scss'],
})
export class StandaloneComponent {}
