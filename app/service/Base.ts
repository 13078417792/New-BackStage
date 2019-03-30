import { Service } from 'egg'

export default class Base extends Service {

    public tool() {
        return this.app.mysql.get('tool');
    }
}