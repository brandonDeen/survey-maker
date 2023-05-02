import os
import pandas
import json

DEFAULT_EXCEL_FILENAME = 'test.xlsx'

def convert(excel_filename: str, json_filename: str):
    # read excel data
    excel_file = pandas.ExcelFile(excel_filename)
    excel_data = pandas.concat([pandas.read_excel(excel_filename, sheet_name=sheet) for sheet in excel_file.sheet_names])

    # convert to json
    json_data = excel_data.to_json(orient='records')

    json_data_dict = json.loads(json_data)

    with open(json_filename, 'w') as json_file:
        json.dump(json_data_dict, json_file)

def convert_by_sheet(excel_filename: str):
    # read excel data
    excel_file = pandas.ExcelFile(excel_filename)
    for sheet in excel_file.sheet_names:
        excel_data = pandas.read_excel(excel_filename, sheet_name=sheet)

        # excel sheet names cannot contain: / \ ? * : [ ]
        # need to remove any other special characters
        json_filename = sheet.translate({ord(c): " " for c in "!@#$%^&*()[]{};:,./<>?\|`~-=_+"}) + '.json'

        # convert to json
        json_data = excel_data.to_json(orient='records')

        json_data_dict = json.loads(json_data)

        with open(json_filename, 'w') as json_file:
            json.dump(json_data_dict, json_file)

# def main():
#     current_directory = os.getcwd()
    # convert(f'{current_directory}/{DEFAULT_EXCEL_FILENAME}')