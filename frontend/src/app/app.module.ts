import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageQuestionsComponent } from './components/manage-questions/manage-questions.component';
import { ManageResponseTypesComponent } from './components/manage-response-types/manage-response-types.component';
import { ManageSurveysComponent } from './components/manage-surveys/manage-surveys.component';
import { ManageRulesComponent } from './components/manage-rules/manage-rules.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SurveyComponent } from './components/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageQuestionsComponent,
    ManageResponseTypesComponent,
    ManageSurveysComponent,
    ManageRulesComponent,
    TopNavComponent,
    SideNavComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
