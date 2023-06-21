import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CardComponent } from '../../generic components/card/card.component';
import { FooterComponent } from '../../generic components/footer/footer.component';
import { HighlightDirective } from '../../directives/highlight.directive';
import { UnlessDirective } from '../../directives/unless.directive';
import { DirectiveTesterComponent } from '../../directives/directive-tester/directive-tester.component';
import { ModalComponent } from '../../generic components/modal/modal.component';
import { HeaderComponent } from '../../generic components/header/header.component';
import { LoggedOutModalComponent } from '../../generic components/logged-out-modal/logged-out-modal.component';
import { ModalContainerDirective } from '../../directives/modal-container.directive';
import { LoadingSpinnerComponent } from '../../generic components/loading-spinner/loading-spinner.component';

const components = [
  CardComponent,
  FooterComponent,
  HighlightDirective,
  UnlessDirective,
  DirectiveTesterComponent,
  ModalComponent,
  HeaderComponent,
  LoggedOutModalComponent,
  ModalContainerDirective,
  LoadingSpinnerComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [CommonModule, FormsModule, HttpClientModule, ...components],
})
export class AppSharedModule {}
