# AWS NodeJS Typescript Write To S3

> This Serverless Framework example writes a file to S3.

# Prerequisites

* npm and yarn installed
* AWS CLI installed and configured
* Serverless CLI installed and configured
* AWS environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are configured
* Ensure node dependencies are installed via `yarn`

# Deploying to AWS

Deploy S3 bucket and Lambda function to AWS:
```
sls deploy -v
```

# Checking Cloudwatch logs

```
sls logs -f writeToS3
```

# Removing resources from AWS

Command `sls remove` will fail if S3 bucket is not empty