import download from '@xingrz/download2';
import { rm } from 'fs/promises';
import { HOME } from './index';

const PACKAGE = 'gcc-arm-none-eabi-10.3';
const VERSION = '2021.10';

const NAME = `${PACKAGE}-${VERSION}-${process.platform}_${process.arch}.tar.zst`;

const URL = `https://cdn.iflyos.cn/public/lisa-binary/${PACKAGE}/${NAME}`;

(async () => {

  try {
    await rm(HOME, { recursive: true });
  } catch (e) {
  }

  await download(URL, HOME, {
    extract: true,
  });

})();
