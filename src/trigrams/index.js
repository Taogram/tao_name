/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-15 23:12:47
 * @LastEditors: lax
 * @LastEditTime: 2024-05-18 20:22:22
 */
const acquired = require("@/trigrams/acquired.js");
const apriori = require("@/trigrams/apriori.js");
module.exports = Object.assign(
	{
		/**
		 * 数字
		 */
		num: ["一", "二", "三", "四", "五", "六", "七", "八", "九"],
	},
	acquired,
	apriori
);
