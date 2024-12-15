import json
from dynamodb import DynamoDBHelper


def lambda_handler(event, context):
    item_id = event["pathParameters"]["id"]
    body = json.loads(event["body"])
    dynamodb_helper = DynamoDBHelper()

    update_expression = "SET description = :description"
    expression_attribute_values = {
        ":description": body.get("description"),
    }

    # Use the helper class to update the item
    updated_item = dynamodb_helper.update_item(
        key={"id": item_id},
        update_expression=update_expression,
        expression_attribute_values=expression_attribute_values,
    )

    return {"statusCode": 200, "body": json.dumps(updated_item)}
