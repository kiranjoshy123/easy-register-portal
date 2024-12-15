import json
import uuid
from dynamodb import DynamoDBHelper


def lambda_handler(event, context):
    print("Start Create::lambda_handler")

    dynamodb_helper = DynamoDBHelper()
    body = json.loads(event["body"])
    item = {
        "id": str(uuid.uuid4()),  # Generate unique ID
        "name": body.get("name"),
        "description": body.get("description"),
    }
    created_item = dynamodb_helper.create_item(item)

    return {
        "statusCode": 201,
        "body": json.dumps(created_item),
        "headers": {"Content-Type": "application/json"},
    }
