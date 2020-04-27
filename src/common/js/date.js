/** 格式化时间
 *  @param {string} date 需要格式化的时间
 *  @param {string} fmt 想要格式化的格式 YYYY
 */
exports.formatDate = (date, fmt) => {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  const o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
};
/** 格式化时间，返回年，月，日
 *  @param {string } date 需要格式化的时间
 */
exports.objectDate = date => {
  if (date && typeof date === "string") {
    date = new Date(date);
    const o = {
      Y: date.getFullYear(),
      M: date.getMonth() + 1,
      D: date.getDate()
    };
    return o;
  }
  return date;
};

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
/** 根据身份证出生日期计算年龄
 *  @param {string} birthDate 身份证出生日期
 */
exports.getAgeByBirthDate = birthDate => {
  var returnAge;
  var birthYear = Number(birthDate.substr(0, 4));
  var birthMonth = Number(birthDate.substr(5, 2));
  var birthDay = Number(birthDate.substr(8, 2));
  const d = new Date();
  var nowYear = d.getFullYear();
  var nowMonth = d.getMonth() + 1;
  var nowDay = d.getDate();
  if (nowYear === birthYear) {
    returnAge = 0; // 同年 则为0岁
  } else {
    var ageDiff = nowYear - birthYear; // 年之差
    if (ageDiff > 0) {
      if (nowMonth === birthMonth) {
        var dayDiff = nowDay - birthDay; // 日之差
        if (dayDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      } else {
        var monthDiff = nowMonth - birthMonth; // 月之差
        if (monthDiff < 0) {
          returnAge = ageDiff - 1;
        } else {
          returnAge = ageDiff;
        }
      }
    } else {
      returnAge = -1; // 返回-1 表示出生日期输入错误 晚于今天
    }
  }
  return returnAge; // 返回周岁年龄
};

/**
 * 获取日期
 */
exports.getDate = AddDayCount => {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount);
  var y = dd.getFullYear();
  var m =
    dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return y + "-" + m + "-" + d;
};
// 获取月
exports.getMonth = addMonthNum => {
  var dd = new Date();
  const month = dd.getMonth() + 1;
  if (month + addMonthNum > 12) {
    return (month + addMonthNum) % 12;
  } else if (month + addMonthNum < 1) {
    return 12 + month + addMonthNum;
  } else {
    return month + addMonthNum;
  }
};
// 获取周
exports.getWeek = addWeekNum => {
  var d1 = new Date();
  d1.setDate(d1.getDate() + addWeekNum * 7);
  const d2 = new Date();
  d2.setMonth(0);
  d2.setDate(1);
  const rq = d1 - d2;
  const days = Math.ceil(rq / (24 * 60 * 60 * 1000));
  const num = Math.ceil(days / 7);
  return num;
};

exports.season = num => {
  //   let d1 = new Date();
  const d3 = new Date().getFullYear();
  const d1 = new Date(
    new Date(d3, num * num + 1, 1).getTime() - 1000 * 60 * 60 * 24
  );
  const d2 = new Date(
    new Date(d3, num * 3 + 1, 1).getTime() - 1000 * 60 * 60 * 24
  );
  return {
    starttime: d1,
    endtime: d2
  };
};
