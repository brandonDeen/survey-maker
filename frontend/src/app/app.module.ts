import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageQuestionsComponent } from './component/manage-questions/manage-questions.component';
import { ManageResponseTypesComponent } from './component/manage-response-types/manage-response-types.component';
import { ManageSurveysComponent } from './component/manage-surveys/manage-surveys.component';
import { ManageRulesComponent } from './component/manage-rules/manage-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageQuestionsComponent,
    ManageResponseTypesComponent,
    ManageSurveysComponent,
    ManageRulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
