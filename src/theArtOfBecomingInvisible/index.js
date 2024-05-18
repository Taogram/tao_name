/*
 * @Description:
 * @Version: 1.0.0
 * @Author: lax
 * @Date: 2023-05-15 23:32:50
 * @LastEditors: lax
 * @LastEditTime: 2023-05-15 23:34:21
 */
const ceremony = require("@/theArtOfBecomingInvisible/ceremony.js");
const star = require("@/theArtOfBecomingInvisible/star.js");
const door = require("@/theArtOfBecomingInvisible/door.js");
const divinity = require("@/theArtOfBecomingInvisible/divinity.js");
const surprise = require("@/theArtOfBecomingInvisible/surprise.js");

module.exports = Object.assign({}, ceremony, star, door, divinity, surprise);
