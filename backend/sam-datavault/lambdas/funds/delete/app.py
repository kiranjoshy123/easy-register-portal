from dynamodb import DynamoDBHelper


def lambda_handler(event, context):
    item_id = event["pathParameters"]["id"]
    dynamodb_helper = DynamoDBHelper()

    # Use the helper class to delete the item
    dynamodb_helper.delete_item({"id": item_id})

    return {"statusCode": 204, "body": ""}
