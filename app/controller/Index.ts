import Base from './base';

export default class IndexController extends Base {

    index() {
        this.printJSON(true);
    }
}