const path = require('path');

const fs = require('fs');

const qiniu = require('qiniu');

function uploadFile(formUploader, uploadToken, key, localFile, putExtra) {
  return new Promise((rosolve, reject) => {
    formUploader.putFile(uploadToken, key, localFile, putExtra, function (
      respErr,
      respBody,
      respInfo
    ) {
      if (respErr) {
        throw respErr;
        reject(respErr);
      }

      if (respInfo.statusCode == 200) {
        console.log(respBody);
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
      }
      rosolve(respBody);
    });
  });
}

const qiniuConfig = {
  accessKey: 'xxxxxxx',
  secretKey: 'xxxx',
  bucket: '',
};

const options = { scope: qiniuConfig.bucket };

var mac = new qiniu.auth.digest.Mac(
  qiniuConfig.accessKey,
  qiniuConfig.secretKey
);

var putPolicy = new qiniu.rs.PutPolicy(options);

var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();

config.zone = qiniu.zone.Zone_z0;

var formUploader = new qiniu.form_up.FormUploader(config);

var putExtra = new qiniu.form_up.PutExtra();

let files = fs.readdirSync(path.join(__dirname, '../build/static'));

const ignores = ['qh', 'robots.txt', 'index.html'];

files.forEach(async (name) => {
  if (ignores.includes(name)) {
    return;
  }

  let localFile = path.join(__dirname, `../build/${name}`);
  console.log(localFile);

  // var key = name;

  // formUploader.putFile(
  //   uploadToken,
  //   key,
  //   localFile,
  //   putExtra,

  //   function (respErr, respBody, respInfo) {
  //     if (respErr) {
  //       throw respErr;
  //     }

  //     if (respInfo.statusCode == 200) {
  //       console.log(respBody);
  //     } else {
  //       console.log(respInfo.statusCode);
  //       console.log(respBody);
  //     }
  //   }
  // );

  // let result = await uploadFile(
  //   formUploader,
  //   uploadToken,
  //   key,
  //   localFile,
  //   putExtra
  // );

  // console.log('result:', result);
});
