'use strict';

const AWS = require('aws-sdk');
const yml = require('js-yaml');


class ServerlessLambdaExecution {

    constructor(serverless, options) {
        this.serverless = serverless;
        this.service = serverless.service;
        this.options = options;

        this.hooks = {
            'before:offline:start:init': this.offlineStartInit.bind(this)
        };
    }

    offlineStartInit() {

        console.log(this.service.functions);

        AWS.Lambda.prototype.invoke = function(options) {

            // const functionName = this.service.functions[options['FunctionName']];
            // console.log(functionName);
        };

        const lambda = new AWS.Lambda();
    }

    getInstanceMethodNames (obj) {
        const proto = Object.getPrototypeOf (obj);
        const names = Object.getOwnPropertyNames (proto);
        return names.filter (name => typeof obj[name] === 'function');
    }

}


module.exports = ServerlessLambdaExecution;