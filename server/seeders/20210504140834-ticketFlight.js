'use strict';
const { transformSeeder } = require('../utils/transformSeeder');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ticketFlights', transformSeeder([
      { id: 1, FlightId: 1, TicketId: 1, price: 1402 },
      { id: 2, FlightId: 1, TicketId: 2, price: 1802 },
      { id: 5, FlightId: 1, TicketId: 5, price: 2302 },
      { id: 3, FlightId: 1, TicketId: 3, price: 1802 },
      { id: 4, FlightId: 1, TicketId: 4, price: 2302 },
      { id: 9, FlightId: 2, TicketId: 9, price: 782 },
      { id: 10, FlightId: 2, TicketId: 10, price: 1182 },
      { id: 6, FlightId: 1, TicketId: 6, price: 2302 },
      { id: 7, FlightId: 1, TicketId: 7, price: 2302 },
      { id: 8, FlightId: 1, TicketId: 8, price: 2302 },
      { id: 11, FlightId: 2, TicketId: 11, price: 1182 },
      { id: 12, FlightId: 2, TicketId: 12, price: 1182 },
      { id: 13, FlightId: 2, TicketId: 13, price: 1182 },
      { id: 14, FlightId: 3, TicketId: 14, price: 624 },
      { id: 15, FlightId: 3, TicketId: 15, price: 1024 },
      { id: 17, FlightId: 3, TicketId: 17, price: 1524 },
      { id: 19, FlightId: 4, TicketId: 19, price: 881 },
      { id: 20, FlightId: 4, TicketId: 20, price: 1281 },
      { id: 16, FlightId: 3, TicketId: 16, price: 1024 },
      { id: 18, FlightId: 3, TicketId: 18, price: 1524 },
      { id: 22, FlightId: 4, TicketId: 22, price: 1281 },
      { id: 23, FlightId: 5, TicketId: 23, price: 870 },
      { id: 21, FlightId: 4, TicketId: 21, price: 1281 },
      { id: 24, FlightId: 5, TicketId: 24, price: 870 },
      { id: 26, FlightId: 5, TicketId: 26, price: 1270 },
      { id: 27, FlightId: 5, TicketId: 27, price: 1770 },
      { id: 28, FlightId: 6, TicketId: 28, price: 1011 },
      { id: 25, FlightId: 5, TicketId: 25, price: 1270 },
      { id: 30, FlightId: 6, TicketId: 30, price: 1411 },
      { id: 31, FlightId: 6, TicketId: 31, price: 1411 },
      { id: 33, FlightId: 6, TicketId: 33, price: 1911 },
      { id: 29, FlightId: 6, TicketId: 29, price: 1011 },
      { id: 32, FlightId: 6, TicketId: 32, price: 1411 },
      { id: 35, FlightId: 7, TicketId: 35, price: 381 },
      { id: 36, FlightId: 7, TicketId: 36, price: 381 },
      { id: 38, FlightId: 7, TicketId: 38, price: 781 },
      { id: 34, FlightId: 6, TicketId: 34, price: 1911 },
      { id: 37, FlightId: 7, TicketId: 37, price: 381 },
      { id: 40, FlightId: 7, TicketId: 40, price: 1281 },
      { id: 43, FlightId: 8, TicketId: 43, price: 292 },
      { id: 39, FlightId: 7, TicketId: 39, price: 781 },
      { id: 41, FlightId: 7, TicketId: 41, price: 1281 },
      { id: 42, FlightId: 7, TicketId: 42, price: 1281 },
      { id: 44, FlightId: 8, TicketId: 44, price: 292 },
      { id: 47, FlightId: 8, TicketId: 47, price: 1192 },
      { id: 45, FlightId: 8, TicketId: 45, price: 692 },
      { id: 46, FlightId: 8, TicketId: 46, price: 1192 },
      { id: 49, FlightId: 9, TicketId: 49, price: 260 },
      { id: 50, FlightId: 9, TicketId: 50, price: 260 },
      { id: 51, FlightId: 9, TicketId: 51, price: 660 },
      { id: 48, FlightId: 8, TicketId: 48, price: 1192 },
      { id: 52, FlightId: 9, TicketId: 52, price: 660 },
      { id: 53, FlightId: 9, TicketId: 53, price: 1160 },
      { id: 54, FlightId: 9, TicketId: 54, price: 1160 },
      { id: 55, FlightId: 9, TicketId: 55, price: 1160 },
      { id: 56, FlightId: 9, TicketId: 56, price: 1160 },
      { id: 57, FlightId: 10, TicketId: 57, price: 587 },
      { id: 58, FlightId: 10, TicketId: 58, price: 987 },
      { id: 59, FlightId: 10, TicketId: 59, price: 987 },
      { id: 61, FlightId: 11, TicketId: 61, price: 241 },
      { id: 60, FlightId: 11, TicketId: 60, price: 241 },
      { id: 62, FlightId: 11, TicketId: 62, price: 641 },
      { id: 63, FlightId: 11, TicketId: 63, price: 1141 },
      { id: 68, FlightId: 12, TicketId: 68, price: 1155 },
      { id: 64, FlightId: 11, TicketId: 64, price: 1141 },
      { id: 65, FlightId: 12, TicketId: 65, price: 655 },
      { id: 66, FlightId: 12, TicketId: 66, price: 1155 },
      { id: 67, FlightId: 12, TicketId: 67, price: 1155 },
      { id: 69, FlightId: 13, TicketId: 69, price: 467 },
      { id: 70, FlightId: 13, TicketId: 70, price: 467 },
      { id: 71, FlightId: 13, TicketId: 71, price: 1367 },
      { id: 72, FlightId: 14, TicketId: 72, price: 599 },
      { id: 74, FlightId: 14, TicketId: 74, price: 999 },
      { id: 76, FlightId: 14, TicketId: 76, price: 1499 },
      { id: 73, FlightId: 14, TicketId: 73, price: 999 },
      { id: 75, FlightId: 14, TicketId: 75, price: 1499 },
      { id: 80, FlightId: 15, TicketId: 80, price: 333 },
      { id: 77, FlightId: 14, TicketId: 77, price: 1499 },
      { id: 78, FlightId: 15, TicketId: 78, price: 333 },
      { id: 79, FlightId: 15, TicketId: 79, price: 333 },
      { id: 85, FlightId: 16, TicketId: 85, price: 782 },
      { id: 81, FlightId: 15, TicketId: 81, price: 1233 },
      { id: 82, FlightId: 15, TicketId: 82, price: 1233 },
      { id: 83, FlightId: 15, TicketId: 83, price: 1233 },
      { id: 84, FlightId: 15, TicketId: 84, price: 1233 },
      { id: 86, FlightId: 16, TicketId: 86, price: 782 },
      { id: 87, FlightId: 16, TicketId: 87, price: 782 },
      { id: 88, FlightId: 16, TicketId: 88, price: 1682 },
      { id: 89, FlightId: 16, TicketId: 89, price: 1682 },
      { id: 90, FlightId: 17, TicketId: 90, price: 315 },
      { id: 91, FlightId: 17, TicketId: 91, price: 715 },
      { id: 92, FlightId: 17, TicketId: 92, price: 715 },
      { id: 93, FlightId: 17, TicketId: 93, price: 1215 },
      { id: 94, FlightId: 17, TicketId: 94, price: 1215 },
      { id: 95, FlightId: 18, TicketId: 95, price: 224 },
      { id: 96, FlightId: 18, TicketId: 96, price: 224 },
      { id: 98, FlightId: 18, TicketId: 98, price: 624 },
      { id: 97, FlightId: 18, TicketId: 97, price: 224 },
      { id: 99, FlightId: 18, TicketId: 99, price: 624 },
      { id: 102, FlightId: 19, TicketId: 102, price: 1127 },
      { id: 100, FlightId: 18, TicketId: 100, price: 1124 },
      { id: 101, FlightId: 19, TicketId: 101, price: 727 },
      { id: 103, FlightId: 19, TicketId: 103, price: 1127 },
      { id: 104, FlightId: 19, TicketId: 104, price: 1627 },
      { id: 105, FlightId: 20, TicketId: 105, price: 587 },
      { id: 106, FlightId: 20, TicketId: 106, price: 587 },
      { id: 107, FlightId: 20, TicketId: 107, price: 1487 },
      { id: 109, FlightId: 21, TicketId: 109, price: 987 },
      { id: 110, FlightId: 21, TicketId: 110, price: 987 },
      { id: 111, FlightId: 21, TicketId: 111, price: 987 },
      { id: 108, FlightId: 20, TicketId: 108, price: 1487 },
      { id: 113, FlightId: 21, TicketId: 113, price: 1487 },
      { id: 114, FlightId: 21, TicketId: 114, price: 1487 },
      { id: 116, FlightId: 22, TicketId: 116, price: 407 },
      { id: 112, FlightId: 21, TicketId: 112, price: 987 },
      { id: 115, FlightId: 22, TicketId: 115, price: 407 },
      { id: 117, FlightId: 22, TicketId: 117, price: 807 },
      { id: 118, FlightId: 22, TicketId: 118, price: 807 },
      { id: 119, FlightId: 22, TicketId: 119, price: 1307 },
      { id: 120, FlightId: 22, TicketId: 120, price: 1307 },
      { id: 122, FlightId: 23, TicketId: 122, price: 962 },
      { id: 121, FlightId: 23, TicketId: 121, price: 962 },
      { id: 123, FlightId: 23, TicketId: 123, price: 1362 },
      { id: 124, FlightId: 23, TicketId: 124, price: 1362 },
      { id: 125, FlightId: 23, TicketId: 125, price: 1362 },
      { id: 126, FlightId: 23, TicketId: 126, price: 1862 },
      { id: 127, FlightId: 24, TicketId: 127, price: 950 },
      { id: 128, FlightId: 24, TicketId: 128, price: 950 },
      { id: 130, FlightId: 24, TicketId: 130, price: 950 },
      { id: 131, FlightId: 24, TicketId: 131, price: 1450 },
      { id: 132, FlightId: 25, TicketId: 132, price: 996 },
      { id: 133, FlightId: 25, TicketId: 133, price: 996 },
      { id: 129, FlightId: 24, TicketId: 129, price: 950 },
      { id: 134, FlightId: 25, TicketId: 134, price: 1396 },
      { id: 135, FlightId: 25, TicketId: 135, price: 1896 },
      { id: 136, FlightId: 26, TicketId: 136, price: 817 },
      { id: 137, FlightId: 26, TicketId: 137, price: 817 },
      { id: 139, FlightId: 26, TicketId: 139, price: 817 },
      { id: 138, FlightId: 26, TicketId: 138, price: 817 },
      { id: 140, FlightId: 26, TicketId: 140, price: 817 },
      { id: 141, FlightId: 26, TicketId: 141, price: 1217 },
      { id: 143, FlightId: 26, TicketId: 143, price: 1717 },
      { id: 142, FlightId: 26, TicketId: 142, price: 1717 },
      { id: 144, FlightId: 26, TicketId: 144, price: 1717 },
      { id: 145, FlightId: 26, TicketId: 145, price: 1717 },
      { id: 147, FlightId: 27, TicketId: 147, price: 1408 },
      { id: 146, FlightId: 27, TicketId: 146, price: 508 },
      { id: 148, FlightId: 27, TicketId: 148, price: 1408 },
      { id: 149, FlightId: 27, TicketId: 149, price: 1408 },
      { id: 153, FlightId: 28, TicketId: 153, price: 640 },
      { id: 150, FlightId: 27, TicketId: 150, price: 1408 },
      { id: 151, FlightId: 28, TicketId: 151, price: 240 },
      { id: 152, FlightId: 28, TicketId: 152, price: 240 },
      { id: 155, FlightId: 28, TicketId: 155, price: 1140 },
      { id: 157, FlightId: 29, TicketId: 157, price: 1103 },
      { id: 158, FlightId: 29, TicketId: 158, price: 1103 },
      { id: 154, FlightId: 28, TicketId: 154, price: 1140 },
      { id: 156, FlightId: 29, TicketId: 156, price: 203 },
      { id: 163, FlightId: 30, TicketId: 163, price: 683 },
      { id: 159, FlightId: 29, TicketId: 159, price: 1103 },
      { id: 160, FlightId: 29, TicketId: 160, price: 1103 },
      { id: 161, FlightId: 29, TicketId: 161, price: 1103 },
      { id: 162, FlightId: 30, TicketId: 162, price: 683 },
      { id: 164, FlightId: 30, TicketId: 164, price: 683 },
      { id: 165, FlightId: 30, TicketId: 165, price: 683 },
      { id: 167, FlightId: 30, TicketId: 167, price: 1083 },
      { id: 166, FlightId: 30, TicketId: 166, price: 683 },
      { id: 172, FlightId: 31, TicketId: 172, price: 147 },
      { id: 168, FlightId: 30, TicketId: 168, price: 1583 },
      { id: 169, FlightId: 30, TicketId: 169, price: 1583 },
      { id: 170, FlightId: 30, TicketId: 170, price: 1583 },
      { id: 171, FlightId: 31, TicketId: 171, price: 147 },
      { id: 173, FlightId: 31, TicketId: 173, price: 547 },
      { id: 174, FlightId: 32, TicketId: 174, price: 587 },
      { id: 175, FlightId: 32, TicketId: 175, price: 587 },
      { id: 176, FlightId: 32, TicketId: 176, price: 987 },
      { id: 178, FlightId: 32, TicketId: 178, price: 1487 },
      { id: 180, FlightId: 32, TicketId: 180, price: 1487 },
      { id: 177, FlightId: 32, TicketId: 177, price: 987 },
      { id: 179, FlightId: 32, TicketId: 179, price: 1487 },
      { id: 183, FlightId: 33, TicketId: 183, price: 1191 },
      { id: 185, FlightId: 33, TicketId: 185, price: 1191 },
      { id: 181, FlightId: 32, TicketId: 181, price: 1487 },
      { id: 182, FlightId: 33, TicketId: 182, price: 791 },
      { id: 184, FlightId: 33, TicketId: 184, price: 1191 },
      { id: 186, FlightId: 33, TicketId: 186, price: 1691 },
      { id: 187, FlightId: 34, TicketId: 187, price: 459 },
      { id: 188, FlightId: 34, TicketId: 188, price: 459 },
      { id: 190, FlightId: 34, TicketId: 190, price: 459 },
      { id: 189, FlightId: 34, TicketId: 189, price: 459 },
      { id: 191, FlightId: 34, TicketId: 191, price: 859 },
      { id: 192, FlightId: 34, TicketId: 192, price: 859 },
      { id: 193, FlightId: 34, TicketId: 193, price: 1359 },
      { id: 194, FlightId: 34, TicketId: 194, price: 1359 },
      { id: 196, FlightId: 35, TicketId: 196, price: 1272 },
      { id: 195, FlightId: 35, TicketId: 195, price: 1272 },
      { id: 197, FlightId: 35, TicketId: 197, price: 1672 },
      { id: 198, FlightId: 35, TicketId: 198, price: 2172 },
      { id: 199, FlightId: 35, TicketId: 199, price: 2172 },
      { id: 200, FlightId: 36, TicketId: 200, price: 445 },
      { id: 201, FlightId: 36, TicketId: 201, price: 845 },
      { id: 202, FlightId: 36, TicketId: 202, price: 845 },
      { id: 203, FlightId: 36, TicketId: 203, price: 845 },
      { id: 204, FlightId: 36, TicketId: 204, price: 1345 },
      { id: 206, FlightId: 37, TicketId: 206, price: 638 },
      { id: 205, FlightId: 36, TicketId: 205, price: 1345 },
      { id: 207, FlightId: 37, TicketId: 207, price: 1038 },
      { id: 209, FlightId: 37, TicketId: 209, price: 1538 },
      { id: 212, FlightId: 38, TicketId: 212, price: 294 },
      { id: 208, FlightId: 37, TicketId: 208, price: 1038 },
      { id: 210, FlightId: 37, TicketId: 210, price: 1538 },
      { id: 211, FlightId: 38, TicketId: 211, price: 294 },
      { id: 213, FlightId: 38, TicketId: 213, price: 694 },
      { id: 216, FlightId: 39, TicketId: 216, price: 1402 },
      { id: 214, FlightId: 38, TicketId: 214, price: 694 },
      { id: 215, FlightId: 39, TicketId: 215, price: 1402 },
      { id: 218, FlightId: 39, TicketId: 218, price: 1802 },
      { id: 220, FlightId: 39, TicketId: 220, price: 1802 },
      { id: 217, FlightId: 39, TicketId: 217, price: 1402 },
      { id: 219, FlightId: 39, TicketId: 219, price: 1802 },
      { id: 221, FlightId: 39, TicketId: 221, price: 2302 },
      { id: 222, FlightId: 40, TicketId: 222, price: 272 },
      { id: 223, FlightId: 40, TicketId: 223, price: 272 },
      { id: 224, FlightId: 40, TicketId: 224, price: 672 },
      { id: 227, FlightId: 40, TicketId: 227, price: 1172 },
      { id: 225, FlightId: 40, TicketId: 225, price: 672 },
      { id: 226, FlightId: 40, TicketId: 226, price: 672 },
      { id: 228, FlightId: 40, TicketId: 228, price: 1172 },
      { id: 229, FlightId: 40, TicketId: 229, price: 1172 },
      { id: 230, FlightId: 41, TicketId: 230, price: 369 },
      { id: 231, FlightId: 41, TicketId: 231, price: 369 },
      { id: 232, FlightId: 41, TicketId: 232, price: 769 },
      { id: 235, FlightId: 42, TicketId: 235, price: 791 },
      { id: 237, FlightId: 42, TicketId: 237, price: 791 },
      { id: 233, FlightId: 41, TicketId: 233, price: 769 },
      { id: 234, FlightId: 42, TicketId: 234, price: 391 },
      { id: 236, FlightId: 42, TicketId: 236, price: 791 },
      { id: 242, FlightId: 43, TicketId: 242, price: 1487 },
      { id: 238, FlightId: 42, TicketId: 238, price: 1291 },
      { id: 239, FlightId: 42, TicketId: 239, price: 1291 },
      { id: 240, FlightId: 43, TicketId: 240, price: 1087 },
      { id: 241, FlightId: 43, TicketId: 241, price: 1487 },
      { id: 243, FlightId: 43, TicketId: 243, price: 1987 },
      { id: 244, FlightId: 43, TicketId: 244, price: 1987 },
      { id: 245, FlightId: 43, TicketId: 245, price: 1987 },
      { id: 246, FlightId: 43, TicketId: 246, price: 1987 },
      { id: 247, FlightId: 44, TicketId: 247, price: 180 },
      { id: 248, FlightId: 44, TicketId: 248, price: 580 },
      { id: 249, FlightId: 44, TicketId: 249, price: 580 },
      { id: 250, FlightId: 44, TicketId: 250, price: 580 },
      { id: 255, FlightId: 45, TicketId: 255, price: 792 },
      { id: 251, FlightId: 44, TicketId: 251, price: 1080 },
      { id: 252, FlightId: 44, TicketId: 252, price: 1080 },
      { id: 253, FlightId: 45, TicketId: 253, price: 392 },
      { id: 254, FlightId: 45, TicketId: 254, price: 392 },
      { id: 257, FlightId: 45, TicketId: 257, price: 792 },
      { id: 256, FlightId: 45, TicketId: 256, price: 792 },
      { id: 258, FlightId: 45, TicketId: 258, price: 792 },
      { id: 259, FlightId: 45, TicketId: 259, price: 792 },
      { id: 261, FlightId: 45, TicketId: 261, price: 1292 },
      { id: 263, FlightId: 45, TicketId: 263, price: 1292 },
      { id: 264, FlightId: 46, TicketId: 264, price: 601 },
      { id: 260, FlightId: 45, TicketId: 260, price: 1292 },
      { id: 262, FlightId: 45, TicketId: 262, price: 1292 },
      { id: 265, FlightId: 46, TicketId: 265, price: 601 },
      { id: 266, FlightId: 46, TicketId: 266, price: 601 },
      { id: 267, FlightId: 46, TicketId: 267, price: 601 },
      { id: 268, FlightId: 46, TicketId: 268, price: 1001 },
      { id: 269, FlightId: 46, TicketId: 269, price: 1001 },
      { id: 270, FlightId: 46, TicketId: 270, price: 1501 },
      { id: 271, FlightId: 47, TicketId: 271, price: 876 },
      { id: 272, FlightId: 47, TicketId: 272, price: 876 },
      { id: 276, FlightId: 47, TicketId: 276, price: 1776 },
      { id: 273, FlightId: 47, TicketId: 273, price: 876 },
      { id: 274, FlightId: 47, TicketId: 274, price: 876 },
      { id: 275, FlightId: 47, TicketId: 275, price: 1276 },
      { id: 277, FlightId: 48, TicketId: 277, price: 320 },
      { id: 278, FlightId: 48, TicketId: 278, price: 320 },
      { id: 279, FlightId: 48, TicketId: 279, price: 320 },
      { id: 280, FlightId: 48, TicketId: 280, price: 320 },
      { id: 281, FlightId: 48, TicketId: 281, price: 720 },
      { id: 282, FlightId: 48, TicketId: 282, price: 720 },
      { id: 283, FlightId: 48, TicketId: 283, price: 720 },
      { id: 284, FlightId: 48, TicketId: 284, price: 1220 },
      { id: 287, FlightId: 49, TicketId: 287, price: 1103 },
      { id: 289, FlightId: 49, TicketId: 289, price: 1603 },
      { id: 285, FlightId: 48, TicketId: 285, price: 1220 },
      { id: 286, FlightId: 49, TicketId: 286, price: 703 },
      { id: 288, FlightId: 49, TicketId: 288, price: 1603 },
      { id: 290, FlightId: 49, TicketId: 290, price: 1603 },
      { id: 291, FlightId: 50, TicketId: 291, price: 490 },
      { id: 292, FlightId: 50, TicketId: 292, price: 490 },
      { id: 293, FlightId: 50, TicketId: 293, price: 890 },
      { id: 298, FlightId: 51, TicketId: 298, price: 638 },
      { id: 294, FlightId: 50, TicketId: 294, price: 1390 },
      { id: 295, FlightId: 50, TicketId: 295, price: 1390 },
      { id: 296, FlightId: 50, TicketId: 296, price: 1390 },
      { id: 297, FlightId: 51, TicketId: 297, price: 238 },
      { id: 299, FlightId: 51, TicketId: 299, price: 1138 },
      { id: 300, FlightId: 51, TicketId: 300, price: 1138 },
      { id: 301, FlightId: 52, TicketId: 301, price: 208 },
      { id: 302, FlightId: 52, TicketId: 302, price: 608 },
      { id: 303, FlightId: 52, TicketId: 303, price: 1108 },
      { id: 304, FlightId: 52, TicketId: 304, price: 1108 },
      { id: 305, FlightId: 53, TicketId: 305, price: 445 },
      { id: 306, FlightId: 53, TicketId: 306, price: 445 },
      { id: 307, FlightId: 53, TicketId: 307, price: 445 },
      { id: 308, FlightId: 54, TicketId: 308, price: 221 },
      { id: 309, FlightId: 54, TicketId: 309, price: 621 },
      { id: 310, FlightId: 54, TicketId: 310, price: 621 },
      { id: 311, FlightId: 54, TicketId: 311, price: 621 },
      { id: 312, FlightId: 54, TicketId: 312, price: 621 },
      { id: 313, FlightId: 54, TicketId: 313, price: 621 },
      { id: 314, FlightId: 54, TicketId: 314, price: 621 },
      { id: 315, FlightId: 54, TicketId: 315, price: 1121 },
      { id: 316, FlightId: 54, TicketId: 316, price: 1121 },
      { id: 317, FlightId: 54, TicketId: 317, price: 1121 },
      { id: 318, FlightId: 55, TicketId: 318, price: 650 },
      { id: 322, FlightId: 55, TicketId: 322, price: 650 },
      { id: 319, FlightId: 55, TicketId: 319, price: 650 },
      { id: 320, FlightId: 55, TicketId: 320, price: 650 },
      { id: 321, FlightId: 55, TicketId: 321, price: 650 },
      { id: 323, FlightId: 55, TicketId: 323, price: 1050 },
      { id: 324, FlightId: 55, TicketId: 324, price: 1050 },
      { id: 325, FlightId: 55, TicketId: 325, price: 1050 },
      { id: 326, FlightId: 55, TicketId: 326, price: 1550 },
      { id: 327, FlightId: 55, TicketId: 327, price: 1550 },
      { id: 328, FlightId: 55, TicketId: 328, price: 1550 },
      { id: 329, FlightId: 55, TicketId: 329, price: 1550 },
      { id: 330, FlightId: 55, TicketId: 330, price: 1550 },
      { id: 331, FlightId: 56, TicketId: 331, price: 650 },
      { id: 332, FlightId: 56, TicketId: 332, price: 650 },
      { id: 333, FlightId: 56, TicketId: 333, price: 1050 },
      { id: 334, FlightId: 56, TicketId: 334, price: 1050 },
      { id: 335, FlightId: 56, TicketId: 335, price: 1050 },
      { id: 336, FlightId: 56, TicketId: 336, price: 1050 },
      { id: 337, FlightId: 56, TicketId: 337, price: 1550 },
      { id: 338, FlightId: 56, TicketId: 338, price: 1550 },
      { id: 339, FlightId: 57, TicketId: 339, price: 1272 },
      { id: 340, FlightId: 57, TicketId: 340, price: 1672 },
      { id: 341, FlightId: 57, TicketId: 341, price: 1672 },
      { id: 342, FlightId: 57, TicketId: 342, price: 1672 },
      { id: 345, FlightId: 57, TicketId: 345, price: 2172 },
      { id: 343, FlightId: 57, TicketId: 343, price: 1672 },
      { id: 344, FlightId: 57, TicketId: 344, price: 2172 },
      { id: 346, FlightId: 57, TicketId: 346, price: 2172 },
      { id: 347, FlightId: 57, TicketId: 347, price: 2172 },
      { id: 348, FlightId: 58, TicketId: 348, price: 1362 },
      { id: 349, FlightId: 58, TicketId: 349, price: 1362 },
      { id: 350, FlightId: 58, TicketId: 350, price: 1362 },
      { id: 351, FlightId: 58, TicketId: 351, price: 1362 },
      { id: 352, FlightId: 58, TicketId: 352, price: 1362 },
      { id: 353, FlightId: 58, TicketId: 353, price: 1862 },
      { id: 354, FlightId: 58, TicketId: 354, price: 1862 },
      { id: 357, FlightId: 59, TicketId: 357, price: 1024 },
      { id: 358, FlightId: 59, TicketId: 358, price: 1024 },
      { id: 355, FlightId: 58, TicketId: 355, price: 1862 },
      { id: 356, FlightId: 59, TicketId: 356, price: 524 },
      { id: 359, FlightId: 60, TicketId: 359, price: 255 },
      { id: 360, FlightId: 60, TicketId: 360, price: 255 },
      { id: 361, FlightId: 60, TicketId: 361, price: 255 },
      { id: 362, FlightId: 60, TicketId: 362, price: 255 },
      { id: 365, FlightId: 60, TicketId: 365, price: 655 },
      { id: 366, FlightId: 60, TicketId: 366, price: 655 },
      { id: 367, FlightId: 60, TicketId: 367, price: 1155 },
      { id: 363, FlightId: 60, TicketId: 363, price: 655 },
      { id: 364, FlightId: 60, TicketId: 364, price: 655 },
      { id: 368, FlightId: 60, TicketId: 368, price: 1155 },
      { id: 369, FlightId: 60, TicketId: 369, price: 1155 },
      { id: 370, FlightId: 61, TicketId: 370, price: 133 },
      { id: 371, FlightId: 61, TicketId: 371, price: 133 },
      { id: 374, FlightId: 61, TicketId: 374, price: 1033 },
      { id: 375, FlightId: 62, TicketId: 375, price: 791 },
      { id: 376, FlightId: 62, TicketId: 376, price: 791 },
      { id: 372, FlightId: 61, TicketId: 372, price: 1033 },
      { id: 373, FlightId: 61, TicketId: 373, price: 1033 },
      { id: 377, FlightId: 62, TicketId: 377, price: 791 },
      { id: 378, FlightId: 62, TicketId: 378, price: 791 },
      { id: 379, FlightId: 62, TicketId: 379, price: 1191 },
      { id: 380, FlightId: 62, TicketId: 380, price: 1691 },
      { id: 381, FlightId: 63, TicketId: 381, price: 485 },
      { id: 382, FlightId: 63, TicketId: 382, price: 485 },
      { id: 383, FlightId: 63, TicketId: 383, price: 485 },
      { id: 384, FlightId: 63, TicketId: 384, price: 885 },
      { id: 386, FlightId: 63, TicketId: 386, price: 885 },
      { id: 387, FlightId: 63, TicketId: 387, price: 1385 },
      { id: 385, FlightId: 63, TicketId: 385, price: 885 },
      { id: 388, FlightId: 64, TicketId: 388, price: 791 },
      { id: 389, FlightId: 64, TicketId: 389, price: 1691 },
      { id: 390, FlightId: 64, TicketId: 390, price: 1691 },
      { id: 391, FlightId: 64, TicketId: 391, price: 1691 },
      { id: 392, FlightId: 65, TicketId: 392, price: 392 },
      { id: 397, FlightId: 66, TicketId: 397, price: 625 },
      { id: 393, FlightId: 65, TicketId: 393, price: 392 },
      { id: 394, FlightId: 65, TicketId: 394, price: 1292 },
      { id: 395, FlightId: 65, TicketId: 395, price: 1292 },
      { id: 396, FlightId: 65, TicketId: 396, price: 1292 },
      { id: 398, FlightId: 66, TicketId: 398, price: 625 },
      { id: 399, FlightId: 66, TicketId: 399, price: 1025 },
      { id: 400, FlightId: 67, TicketId: 400, price: 1011 },
      { id: 401, FlightId: 67, TicketId: 401, price: 1911 },
      { id: 404, FlightId: 68, TicketId: 404, price: 720 },
      { id: 405, FlightId: 68, TicketId: 405, price: 720 },
      { id: 402, FlightId: 68, TicketId: 402, price: 320 },
      { id: 403, FlightId: 68, TicketId: 403, price: 320 },
      { id: 406, FlightId: 68, TicketId: 406, price: 720 },
      { id: 407, FlightId: 68, TicketId: 407, price: 1220 },
      { id: 408, FlightId: 68, TicketId: 408, price: 1220 },
      { id: 409, FlightId: 69, TicketId: 409, price: 685 },
      { id: 410, FlightId: 69, TicketId: 410, price: 685 },
      { id: 411, FlightId: 69, TicketId: 411, price: 685 },
      { id: 412, FlightId: 69, TicketId: 412, price: 1085 },
      { id: 413, FlightId: 69, TicketId: 413, price: 1085 },
      { id: 414, FlightId: 69, TicketId: 414, price: 1085 },
      { id: 415, FlightId: 69, TicketId: 415, price: 1085 },
      { id: 416, FlightId: 69, TicketId: 416, price: 1085 },
      { id: 417, FlightId: 69, TicketId: 417, price: 1585 },
      { id: 418, FlightId: 70, TicketId: 418, price: 881 },
      { id: 419, FlightId: 70, TicketId: 419, price: 1281 },
      { id: 420, FlightId: 70, TicketId: 420, price: 1781 },
      { id: 421, FlightId: 70, TicketId: 421, price: 1781 },
      { id: 425, FlightId: 71, TicketId: 425, price: 485 },
      { id: 422, FlightId: 70, TicketId: 422, price: 1781 },
      { id: 423, FlightId: 71, TicketId: 423, price: 485 },
      { id: 424, FlightId: 71, TicketId: 424, price: 485 },
      { id: 426, FlightId: 71, TicketId: 426, price: 485 },
      { id: 427, FlightId: 71, TicketId: 427, price: 885 },
      { id: 428, FlightId: 71, TicketId: 428, price: 1385 },
      { id: 429, FlightId: 71, TicketId: 429, price: 1385 },
      { id: 433, FlightId: 72, TicketId: 433, price: 508 },
      { id: 430, FlightId: 71, TicketId: 430, price: 1385 },
      { id: 431, FlightId: 72, TicketId: 431, price: 508 },
      { id: 432, FlightId: 72, TicketId: 432, price: 508 },
      { id: 437, FlightId: 73, TicketId: 437, price: 789 },
      { id: 434, FlightId: 72, TicketId: 434, price: 908 },
      { id: 435, FlightId: 72, TicketId: 435, price: 1408 },
      { id: 436, FlightId: 73, TicketId: 436, price: 789 },
      { id: 438, FlightId: 73, TicketId: 438, price: 1189 },
      { id: 439, FlightId: 73, TicketId: 439, price: 1189 },
      { id: 440, FlightId: 74, TicketId: 440, price: 782 },
      { id: 441, FlightId: 74, TicketId: 441, price: 1182 },
      { id: 445, FlightId: 75, TicketId: 445, price: 625 },
      { id: 446, FlightId: 75, TicketId: 446, price: 1025 },
      { id: 442, FlightId: 74, TicketId: 442, price: 1182 },
      { id: 443, FlightId: 74, TicketId: 443, price: 1682 },
      { id: 444, FlightId: 74, TicketId: 444, price: 1682 },
      { id: 447, FlightId: 75, TicketId: 447, price: 1025 },
      { id: 448, FlightId: 75, TicketId: 448, price: 1525 },
      { id: 450, FlightId: 75, TicketId: 450, price: 1525 },
      { id: 449, FlightId: 75, TicketId: 449, price: 1525 },
      { id: 452, FlightId: 76, TicketId: 452, price: 1290 },
      { id: 453, FlightId: 76, TicketId: 453, price: 1290 },
      { id: 455, FlightId: 76, TicketId: 455, price: 1790 },
      { id: 451, FlightId: 76, TicketId: 451, price: 890 },
      { id: 454, FlightId: 76, TicketId: 454, price: 1790 },
      { id: 457, FlightId: 77, TicketId: 457, price: 310 },
      { id: 456, FlightId: 77, TicketId: 456, price: 310 },
      { id: 458, FlightId: 77, TicketId: 458, price: 310 },
      { id: 459, FlightId: 77, TicketId: 459, price: 710 },
      { id: 462, FlightId: 78, TicketId: 462, price: 490 },
      { id: 460, FlightId: 77, TicketId: 460, price: 710 },
      { id: 461, FlightId: 77, TicketId: 461, price: 710 },
      { id: 463, FlightId: 78, TicketId: 463, price: 490 },
      { id: 466, FlightId: 79, TicketId: 466, price: 715 },
      { id: 464, FlightId: 78, TicketId: 464, price: 490 },
      { id: 465, FlightId: 78, TicketId: 465, price: 890 },
      { id: 467, FlightId: 79, TicketId: 467, price: 715 },
      { id: 470, FlightId: 80, TicketId: 470, price: 147 },
      { id: 471, FlightId: 80, TicketId: 471, price: 547 },
      { id: 472, FlightId: 80, TicketId: 472, price: 547 },
      { id: 468, FlightId: 79, TicketId: 468, price: 1215 },
      { id: 469, FlightId: 79, TicketId: 469, price: 1215 },
      { id: 473, FlightId: 80, TicketId: 473, price: 547 },
      { id: 474, FlightId: 80, TicketId: 474, price: 1047 },
      { id: 475, FlightId: 80, TicketId: 475, price: 1047 },
      { id: 476, FlightId: 80, TicketId: 476, price: 1047 },
      { id: 478, FlightId: 81, TicketId: 478, price: 1802 },
      { id: 479, FlightId: 81, TicketId: 479, price: 1802 },
      { id: 480, FlightId: 81, TicketId: 480, price: 1802 },
      { id: 477, FlightId: 81, TicketId: 477, price: 1402 },
      { id: 481, FlightId: 81, TicketId: 481, price: 1802 },
      { id: 482, FlightId: 81, TicketId: 482, price: 1802 },
      { id: 483, FlightId: 81, TicketId: 483, price: 2302 },
      { id: 484, FlightId: 82, TicketId: 484, price: 124 },
      { id: 489, FlightId: 83, TicketId: 489, price: 666 },
      { id: 485, FlightId: 82, TicketId: 485, price: 124 },
      { id: 486, FlightId: 82, TicketId: 486, price: 524 },
      { id: 487, FlightId: 82, TicketId: 487, price: 1024 },
      { id: 488, FlightId: 82, TicketId: 488, price: 1024 },
      { id: 491, FlightId: 83, TicketId: 491, price: 1166 },
      { id: 490, FlightId: 83, TicketId: 490, price: 1166 },
      { id: 492, FlightId: 84, TicketId: 492, price: 392 },
      { id: 493, FlightId: 84, TicketId: 493, price: 392 },
      { id: 497, FlightId: 84, TicketId: 497, price: 1292 },
      { id: 498, FlightId: 84, TicketId: 498, price: 1292 },
      { id: 494, FlightId: 84, TicketId: 494, price: 392 },
      { id: 495, FlightId: 84, TicketId: 495, price: 792 },
      { id: 496, FlightId: 84, TicketId: 496, price: 792 },
      { id: 499, FlightId: 84, TicketId: 499, price: 1292 },
      { id: 500, FlightId: 85, TicketId: 500, price: 876 },
      { id: 501, FlightId: 85, TicketId: 501, price: 876 },
      { id: 502, FlightId: 85, TicketId: 502, price: 876 },
      { id: 505, FlightId: 85, TicketId: 505, price: 1276 },
      { id: 503, FlightId: 85, TicketId: 503, price: 1276 },
      { id: 504, FlightId: 85, TicketId: 504, price: 1276 },
      { id: 506, FlightId: 85, TicketId: 506, price: 1276 },
      { id: 507, FlightId: 85, TicketId: 507, price: 1776 },
      { id: 508, FlightId: 85, TicketId: 508, price: 1776 },
      { id: 509, FlightId: 86, TicketId: 509, price: 260 },
      { id: 510, FlightId: 86, TicketId: 510, price: 660 },
      { id: 511, FlightId: 86, TicketId: 511, price: 660 },
      { id: 512, FlightId: 86, TicketId: 512, price: 1160 },
      { id: 513, FlightId: 87, TicketId: 513, price: 407 },
      { id: 514, FlightId: 87, TicketId: 514, price: 407 },
      { id: 515, FlightId: 87, TicketId: 515, price: 407 },
      { id: 516, FlightId: 87, TicketId: 516, price: 807 },
      { id: 517, FlightId: 87, TicketId: 517, price: 807 },
      { id: 518, FlightId: 87, TicketId: 518, price: 807 },
      { id: 521, FlightId: 87, TicketId: 521, price: 807 },
      { id: 519, FlightId: 87, TicketId: 519, price: 807 },
      { id: 520, FlightId: 87, TicketId: 520, price: 807 },
      { id: 522, FlightId: 87, TicketId: 522, price: 807 },
      { id: 523, FlightId: 87, TicketId: 523, price: 1307 },
      { id: 524, FlightId: 87, TicketId: 524, price: 1307 },
      { id: 525, FlightId: 88, TicketId: 525, price: 414 },
      { id: 526, FlightId: 88, TicketId: 526, price: 814 },
      { id: 528, FlightId: 88, TicketId: 528, price: 1314 },
      { id: 531, FlightId: 89, TicketId: 531, price: 1911 },
      { id: 527, FlightId: 88, TicketId: 527, price: 1314 },
      { id: 529, FlightId: 89, TicketId: 529, price: 1011 },
      { id: 530, FlightId: 89, TicketId: 530, price: 1011 },
      { id: 534, FlightId: 90, TicketId: 534, price: 432 },
      { id: 533, FlightId: 90, TicketId: 533, price: 432 },
      { id: 532, FlightId: 89, TicketId: 532, price: 1911 },
      { id: 535, FlightId: 90, TicketId: 535, price: 832 },
      { id: 536, FlightId: 90, TicketId: 536, price: 832 },
      { id: 537, FlightId: 90, TicketId: 537, price: 832 },
      { id: 538, FlightId: 90, TicketId: 538, price: 832 },
      { id: 539, FlightId: 90, TicketId: 539, price: 1332 },
      { id: 543, FlightId: 91, TicketId: 543, price: 1047 },
      { id: 540, FlightId: 90, TicketId: 540, price: 1332 },
      { id: 541, FlightId: 91, TicketId: 541, price: 547 },
      { id: 542, FlightId: 91, TicketId: 542, price: 547 },
      { id: 547, FlightId: 92, TicketId: 547, price: 943 },
      { id: 544, FlightId: 92, TicketId: 544, price: 543 },
      { id: 545, FlightId: 92, TicketId: 545, price: 543 },
      { id: 546, FlightId: 92, TicketId: 546, price: 543 },
      { id: 550, FlightId: 93, TicketId: 550, price: 625 },
      { id: 551, FlightId: 93, TicketId: 551, price: 625 },
      { id: 552, FlightId: 93, TicketId: 552, price: 1525 },
      { id: 548, FlightId: 92, TicketId: 548, price: 943 },
      { id: 549, FlightId: 92, TicketId: 549, price: 1443 },
      { id: 553, FlightId: 93, TicketId: 553, price: 1525 },
      { id: 554, FlightId: 94, TicketId: 554, price: 919 },
      { id: 555, FlightId: 94, TicketId: 555, price: 919 },
      { id: 558, FlightId: 94, TicketId: 558, price: 1419 },
      { id: 557, FlightId: 94, TicketId: 557, price: 919 },
      { id: 556, FlightId: 94, TicketId: 556, price: 919 },
      { id: 559, FlightId: 94, TicketId: 559, price: 1419 },
      { id: 562, FlightId: 94, TicketId: 562, price: 1419 },
      { id: 563, FlightId: 95, TicketId: 563, price: 1217 },
      { id: 564, FlightId: 95, TicketId: 564, price: 1217 },
      { id: 560, FlightId: 94, TicketId: 560, price: 1419 },
      { id: 561, FlightId: 94, TicketId: 561, price: 1419 },
      { id: 565, FlightId: 95, TicketId: 565, price: 1717 },
      { id: 566, FlightId: 95, TicketId: 566, price: 1717 },
      { id: 567, FlightId: 96, TicketId: 567, price: 608 },
      { id: 568, FlightId: 96, TicketId: 568, price: 608 },
      { id: 569, FlightId: 96, TicketId: 569, price: 608 },
      { id: 570, FlightId: 96, TicketId: 570, price: 608 },
      { id: 571, FlightId: 96, TicketId: 571, price: 1108 },
      { id: 572, FlightId: 96, TicketId: 572, price: 1108 },
      { id: 574, FlightId: 97, TicketId: 574, price: 508 },
      { id: 573, FlightId: 96, TicketId: 573, price: 1108 },
      { id: 575, FlightId: 97, TicketId: 575, price: 908 },
      { id: 576, FlightId: 97, TicketId: 576, price: 908 },
      { id: 577, FlightId: 97, TicketId: 577, price: 908 },
      { id: 578, FlightId: 97, TicketId: 578, price: 908 },
      { id: 579, FlightId: 98, TicketId: 579, price: 128 },
      { id: 580, FlightId: 98, TicketId: 580, price: 128 },
      { id: 581, FlightId: 98, TicketId: 581, price: 528 },
      { id: 582, FlightId: 98, TicketId: 582, price: 528 },
      { id: 583, FlightId: 98, TicketId: 583, price: 528 },
      { id: 584, FlightId: 98, TicketId: 584, price: 528 },
      { id: 586, FlightId: 98, TicketId: 586, price: 1028 },
      { id: 587, FlightId: 99, TicketId: 587, price: 391 },
      { id: 588, FlightId: 99, TicketId: 588, price: 391 },
      { id: 589, FlightId: 99, TicketId: 589, price: 391 },
      { id: 585, FlightId: 98, TicketId: 585, price: 1028 },
      { id: 590, FlightId: 99, TicketId: 590, price: 791 },
      { id: 591, FlightId: 99, TicketId: 591, price: 1291 },
      { id: 592, FlightId: 99, TicketId: 592, price: 1291 },
      { id: 593, FlightId: 99, TicketId: 593, price: 1291 },
      { id: 598, FlightId: 100, TicketId: 598, price: 870 },
      { id: 594, FlightId: 100, TicketId: 594, price: 870 },
      { id: 595, FlightId: 100, TicketId: 595, price: 870 },
      { id: 596, FlightId: 100, TicketId: 596, price: 870 },
      { id: 600, FlightId: 100, TicketId: 600, price: 1270 },
      { id: 597, FlightId: 100, TicketId: 597, price: 870 },
      { id: 599, FlightId: 100, TicketId: 599, price: 1270 },
      { id: 601, FlightId: 100, TicketId: 601, price: 1270 },
      { id: 602, FlightId: 100, TicketId: 602, price: 1270 },
      { id: 603, FlightId: 100, TicketId: 603, price: 1770 },
      { id: 604, FlightId: 100, TicketId: 604, price: 1770 },
    ]));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ticketFlights', null, {});
  },
};