const CryptoJS = require("crypto-js");
const Config = require("./config");

const formatNumber = (n: number) => {
  const str = n.toString();
  return str[1] ? str : "0" + str;
};

export function formatTime(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return [year, month, day].map(formatNumber).join("/") + " " + [hour, minute, second].map(formatNumber).join(":");
}
/**
 * 深度克隆
 */
export function deepClone(target: any) {
  const copyed_objs: any[] = [];
  function _deepClone(target: any) {
    if (typeof target !== "object" || !target) {
      return target;
    }
    for (let index = 0; index < copyed_objs.length; index++) {
      if (copyed_objs[index].target === target) {
        return copyed_objs[index].copyTarget;
      }
    }
    const obj = Array.isArray(target) ? [] : {};
    copyed_objs.push({ target: target, copyTarget: obj });
    Object.keys(target).forEach(key => {
      // @ts-ignore
      if (obj[key]) return;
      // @ts-ignore
      obj[key] = _deepClone(target[key]);
    });
    return obj;
  }
  return _deepClone(target);
}

export const getSign = function(obj: any, reqMethod: "get" | "post") {
  try {
    if (!("c_p" in obj)) throw Error("getSign方法参数缺少c_p属性");
    if (!("user_code" in obj)) {
      throw Error("getSign方法参数缺少user_code属性");
    }
    const tmpObj = JSON.parse(JSON.stringify(obj));
    tmpObj.c_p = JSON.stringify(obj.c_p)
      .split("")
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join("");
    //排序进行签名
    const objAsArray = Object.keys(tmpObj).sort();
    let param = "";
    for (const key of objAsArray) {
      if (tmpObj.hasOwnProperty(key)) param += `${key}=${tmpObj[key]}&`;
    }
    param = param.slice(0, -1);
    obj.signature = CryptoJS.HmacSHA1(reqMethod + "&" + param, Config.appkey + "&").toString(CryptoJS.enc.Base64);
    obj.c_p = JSON.stringify(obj.c_p);
    return obj;
  } catch (e) {
    console.error(e.message);
  }
};
