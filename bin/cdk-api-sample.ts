#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkApiSampleStack } from '../lib/cdk-api-sample-stack';

const app = new cdk.App();
new CdkApiSampleStack(app, 'CdkApiSampleStack', {
    stackName: 'api-sample-stack',
    description: 'serverless stack sample.',
});
