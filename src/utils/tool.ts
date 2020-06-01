import dayjs from "dayjs";

// 日期格式化
export const parseDate = (date: Date, format = "YYYY-MM-DD HH:mm:ss") => {
  return dayjs(date).format(format);
};
/**
 * @function 分析变量类型并输出带颜色的日志
 * @param {type} any
 */
// 避免下一行的any产生警告提示
// eslint-disable-next-line
export const colorLog = (...rest: any) => {
  console.log(
    "%c %s",
    "color: #7f8c8d",
    `----------start ${parseDate(new Date())}----------`
  );
  for (const item of rest) {
    console.log(
      "%c [%s] %c %s",
      "color: #16a085",
      Object.prototype.toString.call(item).slice(8, -1),
      "color: #0000ff",
      ":",
      item
    );
  }
  console.log("%c %s", "color: #7f8c8d", "----------end----------");
};
