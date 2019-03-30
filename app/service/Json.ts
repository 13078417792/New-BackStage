import { Service } from 'egg';


export default class Json extends Service {

    parse(success: boolean, msg: string = '', extend: object = Object.create(null)) {

        let json = Object.create(null)
        json.success = success
        json.msg = msg
        json = Object.assign(Object.create(null), extend, json)
        // console.log(json)
        return json
    }

}