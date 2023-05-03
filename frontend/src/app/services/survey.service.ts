import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MockService } from "./mock.service";

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private mockService: MockService) { }

  getQuestion(questionId: any) {
    console.log(`SurveyService.getQuestion(${questionId}) -> calling ${environment.apiUrl}/question?id=${questionId}`);
    return this.mockService.getQuestions().find(elem => elem.id == questionId)
  }

  getSurveyById(surveyId: any) {
    console.log(`SurveyService.getSurveyById(${surveyId}) -> calling ${environment.apiUrl}/survey?id=${surveyId}`);
    return this.mockService.getSurveys().find(elem => elem.id == surveyId);
  }

  getSurveyByName(surveyName: any) {
    console.log(`SurveyService.getSurveyByName(${surveyName}) -> calling ${environment.apiUrl}/survey?name=${surveyName}`);
    return this.mockService.getSurveys().find(elem => elem.name == surveyName);
  }

}
