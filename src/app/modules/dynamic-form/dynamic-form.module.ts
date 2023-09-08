import { NgModule } from '@angular/core';
import { AppSharedModule } from '../shared/app-shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputWrapperComponent } from './input-wrapper/input-wrapper.component';
import { FormspecComponent } from './formspec/formspec.component';
import { FormspecNavigationComponent } from './formspec-navigation/formspec-navigation.component';
import { FormspecFormpageComponent } from './formspec-formpage/formspec-formpage.component';
import { FormspecNavigationAbstractComponent } from './formspec-navigation/formspec-navigation-abstract/formspec-navigation-abstract.component';
import { FormspecPageAbstractComponent } from './formspec-navigation/formspec-page-abstract/formspec-page-abstract.component';

const routes: Routes = [
  {
    path: 'formspec',
    component: FormspecComponent,
  },
  {
    path: 'dynamic-form',
    component: DynamicFormComponent,
  },

  { path: '**', component: FormspecComponent },
];

@NgModule({
  declarations: [
    DynamicFormComponent,
    InputWrapperComponent,
    FormspecComponent,
    FormspecNavigationComponent,
    FormspecFormpageComponent,
    FormspecNavigationAbstractComponent,
    FormspecPageAbstractComponent,
  ],
  imports: [
    AppSharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DynamicFormModule {}
