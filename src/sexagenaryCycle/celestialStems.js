/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-15 22:56:58
 * @LastEditors: lax
 * @LastEditTime: 2024-05-18 20:57:05
 */
const obj = {
	/**
	 * 天干
	 */
	CELESTIAL_STEMS_ARR: [
		"甲",
		"乙",
		"丙",
		"丁",
		"戊",
		"己",
		"庚",
		"辛",
		"壬",
		"癸",
	],
	CELESTIAL_STEMS: {
		/** 英文写法 */
		METH: "甲",
		ETH: "乙",
		PROP: "丙",
		BUT: "丁",
		PENT: "戊",
		HEX: "己",
		HEPT: "庚",
		OCT: "辛",
		NON: "壬",
		DEC: "癸",
		/** 拼音写法 */
		JIA: "甲",
		YI: "乙",
		BING: "丙",
		DING: "丁",
		WU: "戊",
		JI: "己",
		GENG: "庚",
		XIN: "辛",
		REN: "壬",
		GUI: "癸",
	},
};
obj.CS_ARR = obj.CELESTIAL_STEMS_ARR;
obj.CS = obj.CELESTIAL_STEMS;

module.exports = obj;
