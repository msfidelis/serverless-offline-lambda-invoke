'use strict';

const AWS = require('aws-sdk');

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
        this.serverless.cli.log('iniciando essa bosta');
        AWS.Lambda.prototype.invoke = (options) => {
            console.log(options);
        };
        
        console.log(this.getInstanceMethodNames(AWS.Lambda));
        const lambda = new AWS.Lambda();
        lambda.invoke({legal: 'fodase'});

    }

    getInstanceMethodNames (obj) {
        const proto = Object.getPrototypeOf (obj);
        const names = Object.getOwnPropertyNames (proto);
        return names.filter (name => typeof obj[name] === 'function');
    }

}


module.exports = ServerlessLambdaExecution;