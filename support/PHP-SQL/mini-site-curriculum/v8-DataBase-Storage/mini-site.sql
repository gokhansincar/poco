/*
 Navicat MySQL Data Transfer

 Source Server         : LOCALHOST
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : 127.0.0.1:3306
 Source Schema         : mini-site

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 01/06/2019 10:50:51
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for pages
-- ----------------------------
DROP TABLE IF EXISTS `pages`;
CREATE TABLE `pages`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `page_key` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `menu` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `visible` tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'If value is 0 it will be hidden for the users',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pages
-- ----------------------------
INSERT INTO `pages` VALUES (1, 'index', 'Where hardest stuff is possible', 'HOME', 'where-hardest-stuff-is-possible', '    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\r\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\n      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </p>\r\n\r\n    <p>\r\n      Sed ut dignissim ex, viverra sollicitudin nunc. Vivamus magna elit, sagittis eget condimentum ac, ullamcorper at\r\n      odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium non odio a pretium. Vivamus in dictum\r\n      arcu. Integer vel ligula sed orci mollis semper. Cras lobortis lacus laoreet malesuada aliquam. Suspendisse et\r\n      aliquet eros, nec sodales mi. Cras et sapien euismod, congue dolor vitae, posuere enim. Pellentesque at augue quis\r\n      est convallis pharetra sed vitae purus. Praesent sed sapien eu ex aliquam tempus nec vel lectus. Donec aliquet\r\n      enim justo, nec tincidunt libero elementum sed. Nulla vehicula neque et justo pellentesque, non blandit nisl\r\n      lacinia. Nulla consequat, ex a sagittis mattis, urna eros gravida libero, sed ultrices dolor orci quis ipsum.\r\n    </p>', 1);

-- ----------------------------
-- Table structure for settings
-- ----------------------------
DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `key` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of settings
-- ----------------------------
INSERT INTO `settings` VALUES (1, 'global_title', 'Heavy Metal Company.');
INSERT INTO `settings` VALUES (2, 'description', 'How to use PHP to create a dynamic website');
INSERT INTO `settings` VALUES (3, 'keywords', 'php,dynamic site,cool,raoul');
INSERT INTO `settings` VALUES (4, 'author', 'Sorin Paun');

SET FOREIGN_KEY_CHECKS = 1;
