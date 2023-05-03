import {Component, OnInit} from '@angular/core';
import {SurveyService} from "../../services/survey.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey: any;

  constructor(private service: SurveyService) {
  }

  ngOnInit(): void {
    this.survey = this.service.getSurveyById(1);
    console.log(this.survey);
  }

}
