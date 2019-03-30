// import * as crypto from 'crypto';
import { Stream } from 'stream';
const fs = require('fs');
// import Spark from 'spark-md5';
const SparkMd5 = require('spark-md5');

module.exports = {

    setContentType(value: string) {
        this.ctx.response['Content-Type'] = value
    },

    json(data: object) {
        // const {json:Json} = this.ctx.service
        // Json()
        this.ctx.body = JSON.stringify(data)
    },

    md5_file(path: string) {
        return new Promise((resolve, reject) => {
            let stream: Stream;
            try {
                stream = fs.createReadStream(path)
            } catch (err) {
                reject(err)
                return;
            }
            let result: string;
            // const md5 = crypto.createHash('md5');
            const SparkArrayBuffer = new SparkMd5.ArrayBuffer()
            stream.on('data', function (chunk: Buffer) {
                SparkArrayBuffer.append(chunk);
            });
            stream.on('end', function () {
                result = SparkArrayBuffer.end();
                resolve(result);
                // console.log(result)
            });

        })

    },

    sort(data: Array<any>) {
        if (data.length < 2) return data;
        let result: Array<number> = [];
        let base: number = parseInt(data.shift());
        let left: Array<number> = [], right: Array<number> = [];
        data.forEach(el => {
            const temp: number = parseInt(el);
            if (temp > base) {
                right.push(temp)
            } else {
                left.push(temp)
            }
        })
        result = [...this.sort(left), base, ...this.sort(right)];
        // console.log(result);
        return result;
    },

    getIPAdress() {
        var interfaces = require('os').networkInterfaces();
        for (var devName in interfaces) {
            var iface = interfaces[devName];
            for (var i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }


}