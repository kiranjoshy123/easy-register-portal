import json
from dynamodb import DynamoDBHelper


def lambda_handler(event, context):
    item_id = event["pathParameters"]["id"]
    dynamodb_helper = DynamoDBHelper()

    # Use the helper class to get the item
    item = dynamodb_helper.get_item({"id": item_id})

    if not item:
        return {"statusCode": 404, "body": json.dumps({"error": "Item not found"})}

    return {"statusCode": 200, "body": json.dumps(item)}
