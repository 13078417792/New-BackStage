import { Controller } from 'egg';

export default class Base extends Controller {

    public moni(time: number) {
        return new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(time)
                }, time)
            } catch (err) {
                reject(err)
            }
        })

    }

    echoJSON(data: object) {
        this.ctx.body = JSON.stringify(data)
    }

    printJSON(success: boolean, msg: string = '', extend: object = Object.create(null)) {
        const { json: Json } = this.ctx.service
        this.echoJSON(Json.parse(success, msg, extend))
    }

    post() {
        return this.ctx.request.body;
    }

    get() {
        return this.ctx.query
    }

}