# survey-maker

## Use Cases

### MVP 1
- view survey (default questions from default template)
- respond to question in survey
- follow up questions appear dynamically and are added/removed from the survey
- requirements are fulfilled dynamically
- responses can be flagged

### MVP 2
- add questions, response types, response options, categories
- create a template
- create a survey from a template
- add rules and requirements

### MVP 3
- add ad-hoc questions to a survey
- edit question.response_type


## Data Model

`NOTE: currently the data is just in JSON format, the goal is to use a Relational DB`

a Category has a name, details, and possibly a parent category (FK)
a Question has a category, text (rendered html), and a response type
a Response Type has an input type (html), and one to many Response Options
a Response Option has a label, a value, and a Response Type (FK)
a Response has a value or Response Option (FK), and a Question (FK)
    a Response can be flagged
a Flag has text, a Response (FK), and a rating (low, med, high)

a Question can have rules
a Rule has a deciding question (FK), deciding response option (FK), a follow up question to ask (FK), requirement type, requirement details, and zero to many valid response options
- when deciding question X 
- has response equal to deciding response option Y
- then ask follow up question Z
    - if requirement type is NOT NULL
    - then the requirement can only be met by response options [a,b,c]

a Template has a name, and one to many Questions
a Survey has a name, one to many Questions (FK), and one to many Responses (FK)

## Queries
```sql
-- get all questions in a template
select q.*
from template t
    inner join template_questions tq on tq.template_id = t.id
    inner join questions q on q.id = tq.question_id
where template.name = %
```

```sql
-- get all questions (and responses if available) in a survey with a name
select q.*, r.*
from survey s
    inner join xref_survey_question_response xref on xref.survey_id = s.id
    inner join questions q on q.id = s.question_id
    left join response r on r.id = xref.response_id
where s.name = %;
```

```sql
-- get all response options for a question with an id
select ro.*
from question q 
    inner join response_type rt on rt.id = q.response_type_id
    inner join response_option ro on ro.response_type_id = rt.id
where q.id = %
```

```sql
-- get all follow up question id for a given response
select q.*, ru.id as rule_id, ru.requirement_type, ru.requirement_details
from rules ru
    inner join response r on r.question_id = ru.deciding_question_id 
        and r.response_option_id = ru.deciding_response_option_id
    inner join question q on q.id = ru.follow_up_question_id
where r.id = %
```

```sql
-- get all valid response options for a rule
select ro.*
from rules ru
    inner join xref_valid_rules_response_options xref on xref.rule_id = ru.id
    inner join response_options ro on ro.id = xref.valid_response_option_id
where ru.id = %
```