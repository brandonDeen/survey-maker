import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  getResponseTypes() {
    return [
      {
        id: 1,
        name: "Pizza Toppings",
        input_type: "checkbox",
        response_options: [
          {id: 1, label: "Extra Cheese", value: "extra_cheese"},
          {id: 1, label: "Pepperoni", value: "pepperoni"},
          {id: 2, label: "Mushrooms", value: "mushrooms"},
          {id: 3, label: "Peppers", value: "peppers"},
          {id: 4, label: "Sausage", value: "sausage"},
        ]
      },
      {
        id: 2,
        name: "Text",
        input_type: "text",
        response_options: []
      },
      {
        id: 3,
        name: "Number",
        input_type: "number",
        response_options: []
      },
      {
        id: 4,
        name: "Crust",
        input_type: "radio",
        response_options: [
          {id: 5, label: "Regular", value: "regular"},
          {id: 6, label: "Thin", value: "thin"},
          {id: 7, label: "Deep Dish", value: "deep_dish"},
          {id: 8, label: "Stuffed", value: "stuffed"},
        ]
      }
    ];
  }

  getFlagRatings() {
    return [
      {name: "informational", details: ""},
      {name: "important", details: ""},
      {name: "critical", details: ""}
    ];
  }

  getRequirementTypes() {
    return [
      {
        name: "Ethics",
        details: "Pizza Hutt's code of ethics requires that Deep Dish pizzas cannot have pineapple",
        source: "https://salernospizza.com/pizza-facts/does-pineapple-belong-on-pizza/"
      }
    ]
  }

  getCategories() {
    return [
      {id: 1, name: "Food", details: "here is a good description for the food category"}
    ]
  }

  getQuestions() {
    return [
      {
        id: 1,
        text: "Name your pizza",
        response_type: this.getResponseTypes()[1],
        category: this.getCategories()[0],
        responses: [],
        validations: {
          min_options_selected: null,
          max_options_selected: null,
          max_value: null,
          min_value: null
        }
      },
      {
        id: 2,
        text: "Choose a crust",
        response_type: this.getResponseTypes()[3],
        category: this.getCategories()[0],
        responses: [],
        validations: {
          min_options_selected: 1,
          max_options_selected: 1,
          max_value: null,
          min_value: null
        }
      },
      {
        id: 3,
        text: "Pick your toppings (default: crust, sauce, & cheese)",
        response_type: this.getResponseTypes()[0],
        category: this.getCategories()[0],
        responses: [],
        validations: {
          min_options_selected: null,
          max_options_selected: null,
          max_value: null,
          min_value: null
        }
      },
      {
        id: 4,
        text: "Quantity",
        response_type: this.getResponseTypes()[2],
        category: this.getCategories()[0],
        responses: [],
        validations: {
          min_options_selected: null,
          max_options_selected: null,
          max_value: 0,
          min_value: null
        }
      }
    ]
  }

  getSurveys() {
    return [
      {id: 1, name: "Pizza Builder", questions: this.getQuestions()}
    ]
  }

}
