/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-15 23:23:52
 * @LastEditors: lax
 * @LastEditTime: 2024-05-18 20:56:46
 */
const RELATION = require("@/phases/relation.js");
const CYCLE = require("@/phases/cycle.js");
module.exports = Object.assign({
	PHASES_ARR: ["水", "火", "木", "金", "土"],
	PHASES: {
		/** 英文 */
		WATER: "水",
		FIRE: "火",
		WOOD: "木",
		METAL: "金",
		EARTH: "土",
		/** 拼音 */
		SHUI: "水",
		HUO: "火",
		MU: "木",
		JIN: "金",
		TU: "土",
	},
	RELATION,
	CYCLE,
});
