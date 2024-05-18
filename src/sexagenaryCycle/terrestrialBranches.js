/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-15 22:58:00
 * @LastEditors: lax
 * @LastEditTime: 2024-05-18 12:24:04
 */
const obj = {
	/**
	 * 地支
	 */
	terrestrialBranches: [
		"子",
		"丑",
		"寅",
		"卯",
		"辰",
		"巳",
		"午",
		"未",
		"申",
		"酉",
		"戌",
		"亥",
	],
	TERRESTRIAL_BRANCHES: {
		/** 英文写法 */
		Jan: "子",
		Feb: "丑",
		Mar: "寅",
		Apr: "卯",
		May: "辰",
		Jun: "巳",
		Jul: "午",
		Aug: "未",
		Sep: "申",
		Oct: "酉",
		Nov: "戌",
		Dec: "亥",
		/** 拼音写法 */
		zi: "子",
		chou: "丑",
		yin: "寅",
		mao: "卯",
		chen: "辰",
		si: "巳",
		wu: "午",
		wei: "未",
		shen: "申",
		you: "酉",
		xu: "戌",
		hai: "亥",
	},
};
obj.TB = obj.TERRESTRIAL_BRANCHES;
obj.tb = obj.terrestrialBranches;

module.exports = obj;
