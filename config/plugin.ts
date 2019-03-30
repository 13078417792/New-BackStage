import { EggPlugin } from 'egg';


const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  // io: {
  //   enable: true,
  //   package: 'egg-socket.io',
  // }
};

export default plugin;