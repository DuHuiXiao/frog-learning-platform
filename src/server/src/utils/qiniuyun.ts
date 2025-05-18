import logger from "./logger";

const qiniu = require('qiniu')

const accessKey = "a2cTIK2Pgzy9n2wBDH-kNYs3ivjn_ZdlVIiz5kUg";
const secretKey = "B6rFGCla1TOAOFYjtEG4Ppib4tx-SriDZ984B_sM";
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
// 空间域名
const baseURL = 'swgmcldi2.sabkt.gdipper.com'

const options = {
  scope: "froglearningplatform",
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const uploadToken = putPolicy.uploadToken(mac);


const config = new qiniu.conf.Config();
// 空间对应的区域，若不配置将自动查询
config.regionsProvider = qiniu.httpc.Region.fromRegionId("as0");


// 是否使用https域名
// config.useHttpsDomain = true;
// 上传是否使用cdn加速
// config.useCdnDomain = true;

const formUploader = new qiniu.form_up.FormUploader(config);
const putExtra = new qiniu.form_up.PutExtra();


export async function uploadFileByBuffer(file: Express.Multer.File) {
  const date = new Date();
  // 我要一个路径， 这里我用日期来命名，比如`/2025/05/18/${filename}`
  const key = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}/${file.originalname}`;

  // 文件上传
  const {data, resp} = await formUploader.put(uploadToken, key, file.buffer, putExtra)
  if (resp.statusCode === 200) {
    return `${baseURL}/${key}`
  } 
  else {
    logger.error('上传失败', resp.statusCode, data)
    throw new Error('上传失败')
  }
}
