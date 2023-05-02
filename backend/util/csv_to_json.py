import os
import csv
import json

CURRENT_DIRECTORY = os.getcwd()
DEFAULT_CSV_FILENAME = 'text.csv'

def extract(filename: str, primary_key: str):
    result = {}
    with open(f'{filename}', newline='', encoding='utf8') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            key = row[primary_key]
            result[key] = row

    return result

def write_to_file(contents: dict, filename: str):
    with open(filename, 'w', encoding='utf8') as json_file:
        json_file.write(json.dumps(contents, indent=4))


def generate_json_filename(csv_filename: str):
    return csv_file_name.replace('.csv', '.json')

def main():
    json_date = extract(DEFAULT_CSV_FILENAME)
    json_filename = generate_json_filename(DEFAULT_CSV_FILENAME)
    write_to_file(json_data, json_filename)

if __name__ == '__main__':
    main()