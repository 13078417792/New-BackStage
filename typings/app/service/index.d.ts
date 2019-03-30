// This file is created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase from '../../../app/service/Base';
import ExportJson from '../../../app/service/Json';
import ExportSecondIp from '../../../app/service/SecondIp';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    base: ExportBase;
    json: ExportJson;
    secondIp: ExportSecondIp;
    test: ExportTest;
  }
}
