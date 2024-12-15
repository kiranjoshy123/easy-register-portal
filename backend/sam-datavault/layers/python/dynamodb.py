import boto3
import os
from botocore.exceptions import ClientError


class DynamoDBHelper:
    def __init__(self, table_name=None):
        if not table_name:
            table_name = os.environ.get("TABLE", "Users")
        dynamodb = boto3.resource("dynamodb", endpoint_url="http://dynamo-local:8000")
        self.table = dynamodb.Table(table_name)

    def create_item(self, item):
        """Create an item in the DynamoDB table"""
        try:
            self.table.put_item(Item=item)
            return item
        except ClientError as e:
            raise Exception(f"Error creating item: {str(e)}")

    def get_item(self, key):
        """Get an item from the DynamoDB table"""
        try:
            response = self.table.get_item(Key=key)
            return response.get("Item", None)
        except ClientError as e:
            raise Exception(f"Error fetching item: {str(e)}")

    def update_item(self, key, update_expression, expression_attribute_values):
        """Update an item in the DynamoDB table"""
        try:
            response = self.table.update_item(
                Key=key,
                UpdateExpression=update_expression,
                ExpressionAttributeValues=expression_attribute_values,
                ReturnValues="UPDATED_NEW",
            )
            return response.get("Attributes", {})
        except ClientError as e:
            raise Exception(f"Error updating item: {str(e)}")

    def delete_item(self, key):
        """Delete an item from the DynamoDB table"""
        try:
            self.table.delete_item(Key=key)
        except ClientError as e:
            raise Exception(f"Error deleting item: {str(e)}")
