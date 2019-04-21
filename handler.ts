import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

import * as AWS from 'aws-sdk'
import * as moment from 'moment'

const Bucket = process.env.S3_BUCKET_NAME

const s3 = new AWS.S3({ params: { Bucket } })

export const writeToS3: APIGatewayProxyHandler = async (event, _context) => {
  const now = moment.utc()
  const formatted = now.format('YYYY-MM-DD HH:mm:ss')
  const stamped = now.format('YYYY-MM-DD_HH-mm-ss')
  // Set file name
  const Key = `${stamped}.txt`
  // Set file contents
  const Body = formatted
  const params = { Bucket, Key, Body }
  const status = await s3.putObject(params).promise()
  console.log(`status:`, status)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: status,
      input: event,
    }),
  };
}
