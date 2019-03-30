import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { Context } from 'koa';

const reg: RegExp = /^(127\.0\.0\.1)|(localhost)|(10\.\d{1,3}\.\d{1,3}\.\d{1,3})|(172\.((1[6-9])|(2\d)|(3[01]))\.\d{1,3}\.\d{1,3})|(192\.168\.\d{1,3}\.\d{1,3})$/;

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1547782682513_3676';

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.part = 'home'

  // config.redis = {
  //   client: {
  //     port: 6379,          // Redis port
  //     host: '127.0.0.1',   // Redis host
  //   },
  // }

  config.mysql = {
    app: true,
    default: {},
    clients: {
      // tool: {
      //   // host
      //   host: '192.168.1.5',
      //   // 端口号
      //   port: '3306',
      //   // 用户名
      //   user: 'vm',
      //   // 密码
      //   password: 'root',
      //   // 数据库名
      //   database: 'tool',
      // },
      tool: {
        host: '134.175.68.43',
        // 端口号
        port: '3306',
        // 用户名
        user: 'user',
        // 密码
        password: '397201698zcj',
        // 数据库名
        database: 'tool',
      },
      back: {
        // host
        host: '192.168.1.5',
        // 端口号
        port: '3306',
        // 用户名
        user: 'vm',
        // 密码
        password: 'root',
        // 数据库名
        database: 'home-server',
      }
    }
  }

  // config.io = {

  // }



  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    multipart: {
      mode: 'file',
    },
    security: {
      csrf: {
        ignore: (ctx: Context) => reg.test(ctx.ip)
        // enable: false
      }
    }


  };
};

// exports.redis = {
//   client: {
//     port: 6379,          // Redis port
//     host: '127.0.0.1',   // Redis host
//   },
// }

// exports.mysql = {
//   app: true,
//   default: {},
//   client: {
//     // host
//     host: '192.168.1.5',
//     // 端口号
//     port: '3306',
//     // 用户名
//     user: 'vm',
//     // 密码
//     password: 'root',
//     // 数据库名
//     database: 'tool',
//   }
// }
