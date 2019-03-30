import 'egg';
import EggMysql from 'egg-mysql'

declare module 'egg' {
    interface mysql {
        get(tableName: String, find: {}): Promise<Any>

        query(sql: String, values: Any[]): Promise<Any>
    }
    interface Application {
        mysql: EggMysql;
        redis: any;
    }

}