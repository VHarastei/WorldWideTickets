'use strict';

const { transformSeeder } = require("../utils/transformSeeder");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('boardingPasses',transformSeeder([
      { TicketFlightId: 1, seatNumber: 16 },
      { TicketFlightId: 2, seatNumber: 24 },
      { TicketFlightId: 5, seatNumber: 44 },
      { TicketFlightId: 3, seatNumber: 30 },
      { TicketFlightId: 4, seatNumber: 42 },
      { TicketFlightId: 9, seatNumber: 3 },
      { TicketFlightId: 10, seatNumber: 29 },
      { TicketFlightId: 6, seatNumber: 47 },
      { TicketFlightId: 7, seatNumber: 48 },
      { TicketFlightId: 8, seatNumber: 53 },
      { TicketFlightId: 11, seatNumber: 33 },
      { TicketFlightId: 12, seatNumber: 38 },
      { TicketFlightId: 13, seatNumber: 40 },
      { TicketFlightId: 14, seatNumber: 16 },
      { TicketFlightId: 15, seatNumber: 34 },
      { TicketFlightId: 17, seatNumber: 42 },
      { TicketFlightId: 19, seatNumber: 5 },
      { TicketFlightId: 20, seatNumber: 21 },
      { TicketFlightId: 16, seatNumber: 37 },
      { TicketFlightId: 18, seatNumber: 59 },
      { TicketFlightId: 22, seatNumber: 26 },
      { TicketFlightId: 23, seatNumber: 6 },
      { TicketFlightId: 21, seatNumber: 24 },
      { TicketFlightId: 24, seatNumber: 11 },
      { TicketFlightId: 26, seatNumber: 30 },
      { TicketFlightId: 27, seatNumber: 43 },
      { TicketFlightId: 28, seatNumber: 5 },
      { TicketFlightId: 25, seatNumber: 25 },
      { TicketFlightId: 30, seatNumber: 23 },
      { TicketFlightId: 31, seatNumber: 26 },
      { TicketFlightId: 33, seatNumber: 42 },
      { TicketFlightId: 29, seatNumber: 16 },
      { TicketFlightId: 32, seatNumber: 29 },
      { TicketFlightId: 35, seatNumber: 10 },
      { TicketFlightId: 36, seatNumber: 13 },
      { TicketFlightId: 38, seatNumber: 22 },
      { TicketFlightId: 34, seatNumber: 57 },
      { TicketFlightId: 37, seatNumber: 19 },
      { TicketFlightId: 40, seatNumber: 45 },
      { TicketFlightId: 43, seatNumber: 12 },
      { TicketFlightId: 39, seatNumber: 30 },
      { TicketFlightId: 41, seatNumber: 52 },
      { TicketFlightId: 42, seatNumber: 56 },
      { TicketFlightId: 44, seatNumber: 18 },
      { TicketFlightId: 47, seatNumber: 46 },
      { TicketFlightId: 45, seatNumber: 22 },
      { TicketFlightId: 46, seatNumber: 43 },
      { TicketFlightId: 49, seatNumber: 9 },
      { TicketFlightId: 50, seatNumber: 11 },
      { TicketFlightId: 51, seatNumber: 27 },
      { TicketFlightId: 48, seatNumber: 48 },
      { TicketFlightId: 52, seatNumber: 28 },
      { TicketFlightId: 53, seatNumber: 46 },
      { TicketFlightId: 54, seatNumber: 50 },
      { TicketFlightId: 55, seatNumber: 53 },
      { TicketFlightId: 56, seatNumber: 54 },
      { TicketFlightId: 57, seatNumber: 5 },
      { TicketFlightId: 58, seatNumber: 33 },
      { TicketFlightId: 59, seatNumber: 39 },
      { TicketFlightId: 61, seatNumber: 17 },
      { TicketFlightId: 60, seatNumber: 9 },
      { TicketFlightId: 62, seatNumber: 30 },
      { TicketFlightId: 63, seatNumber: 49 },
      { TicketFlightId: 68, seatNumber: 58 },
      { TicketFlightId: 64, seatNumber: 55 },
      { TicketFlightId: 65, seatNumber: 24 },
      { TicketFlightId: 66, seatNumber: 45 },
      { TicketFlightId: 67, seatNumber: 49 },
      { TicketFlightId: 69, seatNumber: 2 },
      { TicketFlightId: 70, seatNumber: 6 },
      { TicketFlightId: 71, seatNumber: 43 },
      { TicketFlightId: 72, seatNumber: 12 },
      { TicketFlightId: 74, seatNumber: 40 },
      { TicketFlightId: 76, seatNumber: 49 },
      { TicketFlightId: 73, seatNumber: 21 },
      { TicketFlightId: 75, seatNumber: 41 },
      { TicketFlightId: 80, seatNumber: 18 },
      { TicketFlightId: 77, seatNumber: 50 },
      { TicketFlightId: 78, seatNumber: 12 },
      { TicketFlightId: 79, seatNumber: 14 },
      { TicketFlightId: 85, seatNumber: 9 },
      { TicketFlightId: 81, seatNumber: 49 },
      { TicketFlightId: 82, seatNumber: 51 },
      { TicketFlightId: 83, seatNumber: 54 },
      { TicketFlightId: 84, seatNumber: 57 },
      { TicketFlightId: 86, seatNumber: 13 },
      { TicketFlightId: 87, seatNumber: 15 },
      { TicketFlightId: 88, seatNumber: 47 },
      { TicketFlightId: 89, seatNumber: 51 },
      { TicketFlightId: 90, seatNumber: 1 },
      { TicketFlightId: 91, seatNumber: 23 },
      { TicketFlightId: 92, seatNumber: 36 },
      { TicketFlightId: 93, seatNumber: 52 },
      { TicketFlightId: 94, seatNumber: 59 },
      { TicketFlightId: 95, seatNumber: 4 },
      { TicketFlightId: 96, seatNumber: 18 },
      { TicketFlightId: 98, seatNumber: 22 },
      { TicketFlightId: 97, seatNumber: 20 },
      { TicketFlightId: 99, seatNumber: 33 },
      { TicketFlightId: 102, seatNumber: 22 },
      { TicketFlightId: 100, seatNumber: 44 },
      { TicketFlightId: 101, seatNumber: 13 },
      { TicketFlightId: 103, seatNumber: 34 },
      { TicketFlightId: 104, seatNumber: 58 },
      { TicketFlightId: 105, seatNumber: 4 },
      { TicketFlightId: 106, seatNumber: 14 },
      { TicketFlightId: 107, seatNumber: 57 },
      { TicketFlightId: 109, seatNumber: 22 },
      { TicketFlightId: 110, seatNumber: 24 },
      { TicketFlightId: 111, seatNumber: 33 },
      { TicketFlightId: 108, seatNumber: 58 },
      { TicketFlightId: 113, seatNumber: 45 },
      { TicketFlightId: 114, seatNumber: 54 },
      { TicketFlightId: 116, seatNumber: 10 },
      { TicketFlightId: 112, seatNumber: 37 },
      { TicketFlightId: 115, seatNumber: 1 },
      { TicketFlightId: 117, seatNumber: 32 },
      { TicketFlightId: 118, seatNumber: 37 },
      { TicketFlightId: 119, seatNumber: 44 },
      { TicketFlightId: 120, seatNumber: 50 },
      { TicketFlightId: 122, seatNumber: 7 },
      { TicketFlightId: 121, seatNumber: 2 },
      { TicketFlightId: 123, seatNumber: 21 },
      { TicketFlightId: 124, seatNumber: 29 },
      { TicketFlightId: 125, seatNumber: 35 },
      { TicketFlightId: 126, seatNumber: 56 },
      { TicketFlightId: 127, seatNumber: 25 },
      { TicketFlightId: 128, seatNumber: 32 },
      { TicketFlightId: 130, seatNumber: 38 },
      { TicketFlightId: 131, seatNumber: 49 },
      { TicketFlightId: 132, seatNumber: 3 },
      { TicketFlightId: 133, seatNumber: 16 },
      { TicketFlightId: 129, seatNumber: 33 },
      { TicketFlightId: 134, seatNumber: 39 },
      { TicketFlightId: 135, seatNumber: 54 },
      { TicketFlightId: 136, seatNumber: 1 },
      { TicketFlightId: 137, seatNumber: 7 },
      { TicketFlightId: 139, seatNumber: 13 },
      { TicketFlightId: 138, seatNumber: 11 },
      { TicketFlightId: 140, seatNumber: 15 },
      { TicketFlightId: 141, seatNumber: 28 },
      { TicketFlightId: 143, seatNumber: 44 },
      { TicketFlightId: 142, seatNumber: 41 },
      { TicketFlightId: 144, seatNumber: 48 },
      { TicketFlightId: 145, seatNumber: 59 },
      { TicketFlightId: 147, seatNumber: 42 },
      { TicketFlightId: 146, seatNumber: 1 },
      { TicketFlightId: 148, seatNumber: 51 },
      { TicketFlightId: 149, seatNumber: 54 },
      { TicketFlightId: 153, seatNumber: 24 },
      { TicketFlightId: 150, seatNumber: 59 },
      { TicketFlightId: 151, seatNumber: 2 },
      { TicketFlightId: 152, seatNumber: 18 },
      { TicketFlightId: 155, seatNumber: 51 },
      { TicketFlightId: 157, seatNumber: 41 },
      { TicketFlightId: 158, seatNumber: 45 },
      { TicketFlightId: 154, seatNumber: 41 },
      { TicketFlightId: 156, seatNumber: 5 },
      { TicketFlightId: 163, seatNumber: 4 },
      { TicketFlightId: 159, seatNumber: 47 },
      { TicketFlightId: 160, seatNumber: 48 },
      { TicketFlightId: 161, seatNumber: 51 },
      { TicketFlightId: 162, seatNumber: 3 },
      { TicketFlightId: 164, seatNumber: 16 },
      { TicketFlightId: 165, seatNumber: 17 },
      { TicketFlightId: 167, seatNumber: 33 },
      { TicketFlightId: 166, seatNumber: 18 },
      { TicketFlightId: 172, seatNumber: 19 },
      { TicketFlightId: 168, seatNumber: 48 },
      { TicketFlightId: 169, seatNumber: 54 },
      { TicketFlightId: 170, seatNumber: 58 },
      { TicketFlightId: 171, seatNumber: 16 },
      { TicketFlightId: 173, seatNumber: 24 },
      { TicketFlightId: 174, seatNumber: 7 },
      { TicketFlightId: 175, seatNumber: 20 },
      { TicketFlightId: 176, seatNumber: 31 },
      { TicketFlightId: 178, seatNumber: 41 },
      { TicketFlightId: 180, seatNumber: 52 },
      { TicketFlightId: 177, seatNumber: 33 },
      { TicketFlightId: 179, seatNumber: 44 },
      { TicketFlightId: 183, seatNumber: 24 },
      { TicketFlightId: 185, seatNumber: 33 },
      { TicketFlightId: 181, seatNumber: 57 },
      { TicketFlightId: 182, seatNumber: 1 },
      { TicketFlightId: 184, seatNumber: 27 },
      { TicketFlightId: 186, seatNumber: 53 },
      { TicketFlightId: 187, seatNumber: 6 },
      { TicketFlightId: 188, seatNumber: 11 },
      { TicketFlightId: 190, seatNumber: 19 },
      { TicketFlightId: 189, seatNumber: 16 },
      { TicketFlightId: 191, seatNumber: 32 },
      { TicketFlightId: 192, seatNumber: 34 },
      { TicketFlightId: 193, seatNumber: 49 },
      { TicketFlightId: 194, seatNumber: 53 },
      { TicketFlightId: 196, seatNumber: 18 },
      { TicketFlightId: 195, seatNumber: 7 },
      { TicketFlightId: 197, seatNumber: 32 },
      { TicketFlightId: 198, seatNumber: 56 },
      { TicketFlightId: 199, seatNumber: 58 },
      { TicketFlightId: 200, seatNumber: 18 },
      { TicketFlightId: 201, seatNumber: 22 },
      { TicketFlightId: 202, seatNumber: 26 },
      { TicketFlightId: 203, seatNumber: 34 },
      { TicketFlightId: 204, seatNumber: 47 },
      { TicketFlightId: 206, seatNumber: 10 },
      { TicketFlightId: 205, seatNumber: 58 },
      { TicketFlightId: 207, seatNumber: 25 },
      { TicketFlightId: 209, seatNumber: 41 },
      { TicketFlightId: 212, seatNumber: 9 },
      { TicketFlightId: 208, seatNumber: 26 },
      { TicketFlightId: 210, seatNumber: 51 },
      { TicketFlightId: 211, seatNumber: 6 },
      { TicketFlightId: 213, seatNumber: 30 },
      { TicketFlightId: 216, seatNumber: 14 },
      { TicketFlightId: 214, seatNumber: 33 },
      { TicketFlightId: 215, seatNumber: 7 },
      { TicketFlightId: 218, seatNumber: 30 },
      { TicketFlightId: 220, seatNumber: 38 },
      { TicketFlightId: 217, seatNumber: 17 },
      { TicketFlightId: 219, seatNumber: 34 },
      { TicketFlightId: 221, seatNumber: 58 },
      { TicketFlightId: 222, seatNumber: 5 },
      { TicketFlightId: 223, seatNumber: 10 },
      { TicketFlightId: 224, seatNumber: 30 },
      { TicketFlightId: 227, seatNumber: 45 },
      { TicketFlightId: 225, seatNumber: 32 },
      { TicketFlightId: 226, seatNumber: 36 },
      { TicketFlightId: 228, seatNumber: 49 },
      { TicketFlightId: 229, seatNumber: 50 },
      { TicketFlightId: 230, seatNumber: 15 },
      { TicketFlightId: 231, seatNumber: 18 },
      { TicketFlightId: 232, seatNumber: 30 },
      { TicketFlightId: 235, seatNumber: 30 },
      { TicketFlightId: 237, seatNumber: 40 },
      { TicketFlightId: 233, seatNumber: 33 },
      { TicketFlightId: 234, seatNumber: 4 },
      { TicketFlightId: 236, seatNumber: 37 },
      { TicketFlightId: 242, seatNumber: 38 },
      { TicketFlightId: 238, seatNumber: 43 },
      { TicketFlightId: 239, seatNumber: 59 },
      { TicketFlightId: 240, seatNumber: 8 },
      { TicketFlightId: 241, seatNumber: 28 },
      { TicketFlightId: 243, seatNumber: 44 },
      { TicketFlightId: 244, seatNumber: 45 },
      { TicketFlightId: 245, seatNumber: 47 },
      { TicketFlightId: 246, seatNumber: 55 },
      { TicketFlightId: 247, seatNumber: 20 },
      { TicketFlightId: 248, seatNumber: 28 },
      { TicketFlightId: 249, seatNumber: 34 },
      { TicketFlightId: 250, seatNumber: 39 },
      { TicketFlightId: 255, seatNumber: 24 },
      { TicketFlightId: 251, seatNumber: 48 },
      { TicketFlightId: 252, seatNumber: 53 },
      { TicketFlightId: 253, seatNumber: 5 },
      { TicketFlightId: 254, seatNumber: 20 },
      { TicketFlightId: 257, seatNumber: 28 },
      { TicketFlightId: 256, seatNumber: 25 },
      { TicketFlightId: 258, seatNumber: 29 },
      { TicketFlightId: 259, seatNumber: 39 },
      { TicketFlightId: 261, seatNumber: 45 },
      { TicketFlightId: 263, seatNumber: 50 },
      { TicketFlightId: 264, seatNumber: 4 },
      { TicketFlightId: 260, seatNumber: 41 },
      { TicketFlightId: 262, seatNumber: 47 },
      { TicketFlightId: 265, seatNumber: 5 },
      { TicketFlightId: 266, seatNumber: 9 },
      { TicketFlightId: 267, seatNumber: 18 },
      { TicketFlightId: 268, seatNumber: 32 },
      { TicketFlightId: 269, seatNumber: 33 },
      { TicketFlightId: 270, seatNumber: 51 },
      { TicketFlightId: 271, seatNumber: 1 },
      { TicketFlightId: 272, seatNumber: 3 },
      { TicketFlightId: 276, seatNumber: 48 },
      { TicketFlightId: 273, seatNumber: 11 },
      { TicketFlightId: 274, seatNumber: 14 },
      { TicketFlightId: 275, seatNumber: 31 },
      { TicketFlightId: 277, seatNumber: 3 },
      { TicketFlightId: 278, seatNumber: 9 },
      { TicketFlightId: 279, seatNumber: 10 },
      { TicketFlightId: 280, seatNumber: 12 },
      { TicketFlightId: 281, seatNumber: 23 },
      { TicketFlightId: 282, seatNumber: 26 },
      { TicketFlightId: 283, seatNumber: 34 },
      { TicketFlightId: 284, seatNumber: 49 },
      { TicketFlightId: 287, seatNumber: 40 },
      { TicketFlightId: 289, seatNumber: 50 },
      { TicketFlightId: 285, seatNumber: 58 },
      { TicketFlightId: 286, seatNumber: 10 },
      { TicketFlightId: 288, seatNumber: 43 },
      { TicketFlightId: 290, seatNumber: 55 },
      { TicketFlightId: 291, seatNumber: 13 },
      { TicketFlightId: 292, seatNumber: 14 },
      { TicketFlightId: 293, seatNumber: 23 },
      { TicketFlightId: 298, seatNumber: 33 },
      { TicketFlightId: 294, seatNumber: 47 },
      { TicketFlightId: 295, seatNumber: 52 },
      { TicketFlightId: 296, seatNumber: 57 },
      { TicketFlightId: 297, seatNumber: 14 },
      { TicketFlightId: 299, seatNumber: 41 },
      { TicketFlightId: 300, seatNumber: 60 },
      { TicketFlightId: 301, seatNumber: 1 },
      { TicketFlightId: 302, seatNumber: 38 },
      { TicketFlightId: 303, seatNumber: 42 },
      { TicketFlightId: 304, seatNumber: 48 },
      { TicketFlightId: 305, seatNumber: 6 },
      { TicketFlightId: 306, seatNumber: 11 },
      { TicketFlightId: 307, seatNumber: 13 },
      { TicketFlightId: 308, seatNumber: 6 },
      { TicketFlightId: 309, seatNumber: 21 },
      { TicketFlightId: 310, seatNumber: 27 },
      { TicketFlightId: 311, seatNumber: 29 },
      { TicketFlightId: 312, seatNumber: 32 },
      { TicketFlightId: 313, seatNumber: 36 },
      { TicketFlightId: 314, seatNumber: 37 },
      { TicketFlightId: 315, seatNumber: 41 },
      { TicketFlightId: 316, seatNumber: 42 },
      { TicketFlightId: 317, seatNumber: 49 },
      { TicketFlightId: 318, seatNumber: 1 },
      { TicketFlightId: 322, seatNumber: 11 },
      { TicketFlightId: 319, seatNumber: 3 },
      { TicketFlightId: 320, seatNumber: 5 },
      { TicketFlightId: 321, seatNumber: 6 },
      { TicketFlightId: 323, seatNumber: 21 },
      { TicketFlightId: 324, seatNumber: 25 },
      { TicketFlightId: 325, seatNumber: 31 },
      { TicketFlightId: 326, seatNumber: 41 },
      { TicketFlightId: 327, seatNumber: 43 },
      { TicketFlightId: 328, seatNumber: 44 },
      { TicketFlightId: 329, seatNumber: 49 },
      { TicketFlightId: 330, seatNumber: 51 },
      { TicketFlightId: 331, seatNumber: 1 },
      { TicketFlightId: 332, seatNumber: 8 },
      { TicketFlightId: 333, seatNumber: 23 },
      { TicketFlightId: 334, seatNumber: 33 },
      { TicketFlightId: 335, seatNumber: 35 },
      { TicketFlightId: 336, seatNumber: 37 },
      { TicketFlightId: 337, seatNumber: 44 },
      { TicketFlightId: 338, seatNumber: 48 },
      { TicketFlightId: 339, seatNumber: 5 },
      { TicketFlightId: 340, seatNumber: 21 },
      { TicketFlightId: 341, seatNumber: 23 },
      { TicketFlightId: 342, seatNumber: 29 },
      { TicketFlightId: 345, seatNumber: 48 },
      { TicketFlightId: 343, seatNumber: 30 },
      { TicketFlightId: 344, seatNumber: 43 },
      { TicketFlightId: 346, seatNumber: 52 },
      { TicketFlightId: 347, seatNumber: 54 },
      { TicketFlightId: 348, seatNumber: 29 },
      { TicketFlightId: 349, seatNumber: 30 },
      { TicketFlightId: 350, seatNumber: 32 },
      { TicketFlightId: 351, seatNumber: 37 },
      { TicketFlightId: 352, seatNumber: 39 },
      { TicketFlightId: 353, seatNumber: 43 },
      { TicketFlightId: 354, seatNumber: 59 },
      { TicketFlightId: 357, seatNumber: 52 },
      { TicketFlightId: 358, seatNumber: 54 },
      { TicketFlightId: 355, seatNumber: 60 },
      { TicketFlightId: 356, seatNumber: 31 },
      { TicketFlightId: 359, seatNumber: 5 },
      { TicketFlightId: 360, seatNumber: 7 },
      { TicketFlightId: 361, seatNumber: 9 },
      { TicketFlightId: 362, seatNumber: 10 },
      { TicketFlightId: 365, seatNumber: 34 },
      { TicketFlightId: 366, seatNumber: 36 },
      { TicketFlightId: 367, seatNumber: 43 },
      { TicketFlightId: 363, seatNumber: 24 },
      { TicketFlightId: 364, seatNumber: 28 },
      { TicketFlightId: 368, seatNumber: 53 },
      { TicketFlightId: 369, seatNumber: 57 },
      { TicketFlightId: 370, seatNumber: 5 },
      { TicketFlightId: 371, seatNumber: 14 },
      { TicketFlightId: 374, seatNumber: 59 },
      { TicketFlightId: 375, seatNumber: 3 },
      { TicketFlightId: 376, seatNumber: 7 },
      { TicketFlightId: 372, seatNumber: 55 },
      { TicketFlightId: 373, seatNumber: 56 },
      { TicketFlightId: 377, seatNumber: 8 },
      { TicketFlightId: 378, seatNumber: 16 },
      { TicketFlightId: 379, seatNumber: 22 },
      { TicketFlightId: 380, seatNumber: 41 },
      { TicketFlightId: 381, seatNumber: 13 },
      { TicketFlightId: 382, seatNumber: 15 },
      { TicketFlightId: 383, seatNumber: 16 },
      { TicketFlightId: 384, seatNumber: 21 },
      { TicketFlightId: 386, seatNumber: 26 },
      { TicketFlightId: 387, seatNumber: 52 },
      { TicketFlightId: 385, seatNumber: 25 },
      { TicketFlightId: 388, seatNumber: 15 },
      { TicketFlightId: 389, seatNumber: 41 },
      { TicketFlightId: 390, seatNumber: 47 },
      { TicketFlightId: 391, seatNumber: 56 },
      { TicketFlightId: 392, seatNumber: 3 },
      { TicketFlightId: 397, seatNumber: 12 },
      { TicketFlightId: 393, seatNumber: 18 },
      { TicketFlightId: 394, seatNumber: 51 },
      { TicketFlightId: 395, seatNumber: 52 },
      { TicketFlightId: 396, seatNumber: 54 },
      { TicketFlightId: 398, seatNumber: 16 },
      { TicketFlightId: 399, seatNumber: 40 },
      { TicketFlightId: 400, seatNumber: 8 },
      { TicketFlightId: 401, seatNumber: 47 },
      { TicketFlightId: 404, seatNumber: 30 },
      { TicketFlightId: 405, seatNumber: 32 },
      { TicketFlightId: 402, seatNumber: 3 },
      { TicketFlightId: 403, seatNumber: 9 },
      { TicketFlightId: 406, seatNumber: 39 },
      { TicketFlightId: 407, seatNumber: 59 },
      { TicketFlightId: 408, seatNumber: 60 },
      { TicketFlightId: 409, seatNumber: 5 },
      { TicketFlightId: 410, seatNumber: 11 },
      { TicketFlightId: 411, seatNumber: 14 },
      { TicketFlightId: 412, seatNumber: 22 },
      { TicketFlightId: 413, seatNumber: 25 },
      { TicketFlightId: 414, seatNumber: 30 },
      { TicketFlightId: 415, seatNumber: 34 },
      { TicketFlightId: 416, seatNumber: 37 },
      { TicketFlightId: 417, seatNumber: 50 },
      { TicketFlightId: 418, seatNumber: 15 },
      { TicketFlightId: 419, seatNumber: 37 },
      { TicketFlightId: 420, seatNumber: 50 },
      { TicketFlightId: 421, seatNumber: 53 },
      { TicketFlightId: 425, seatNumber: 11 },
      { TicketFlightId: 422, seatNumber: 55 },
      { TicketFlightId: 423, seatNumber: 2 },
      { TicketFlightId: 424, seatNumber: 7 },
      { TicketFlightId: 426, seatNumber: 14 },
      { TicketFlightId: 427, seatNumber: 31 },
      { TicketFlightId: 428, seatNumber: 44 },
      { TicketFlightId: 429, seatNumber: 45 },
      { TicketFlightId: 433, seatNumber: 17 },
      { TicketFlightId: 430, seatNumber: 49 },
      { TicketFlightId: 431, seatNumber: 10 },
      { TicketFlightId: 432, seatNumber: 15 },
      { TicketFlightId: 437, seatNumber: 15 },
      { TicketFlightId: 434, seatNumber: 29 },
      { TicketFlightId: 435, seatNumber: 43 },
      { TicketFlightId: 436, seatNumber: 13 },
      { TicketFlightId: 438, seatNumber: 34 },
      { TicketFlightId: 439, seatNumber: 35 },
      { TicketFlightId: 440, seatNumber: 6 },
      { TicketFlightId: 441, seatNumber: 21 },
      { TicketFlightId: 445, seatNumber: 8 },
      { TicketFlightId: 446, seatNumber: 31 },
      { TicketFlightId: 442, seatNumber: 31 },
      { TicketFlightId: 443, seatNumber: 51 },
      { TicketFlightId: 444, seatNumber: 52 },
      { TicketFlightId: 447, seatNumber: 33 },
      { TicketFlightId: 448, seatNumber: 44 },
      { TicketFlightId: 450, seatNumber: 59 },
      { TicketFlightId: 449, seatNumber: 56 },
      { TicketFlightId: 452, seatNumber: 29 },
      { TicketFlightId: 453, seatNumber: 36 },
      { TicketFlightId: 455, seatNumber: 46 },
      { TicketFlightId: 451, seatNumber: 16 },
      { TicketFlightId: 454, seatNumber: 41 },
      { TicketFlightId: 457, seatNumber: 8 },
      { TicketFlightId: 456, seatNumber: 4 },
      { TicketFlightId: 458, seatNumber: 14 },
      { TicketFlightId: 459, seatNumber: 27 },
      { TicketFlightId: 462, seatNumber: 9 },
      { TicketFlightId: 460, seatNumber: 31 },
      { TicketFlightId: 461, seatNumber: 39 },
      { TicketFlightId: 463, seatNumber: 10 },
      { TicketFlightId: 466, seatNumber: 21 },
      { TicketFlightId: 464, seatNumber: 14 },
      { TicketFlightId: 465, seatNumber: 21 },
      { TicketFlightId: 467, seatNumber: 33 },
      { TicketFlightId: 470, seatNumber: 8 },
      { TicketFlightId: 471, seatNumber: 22 },
      { TicketFlightId: 472, seatNumber: 24 },
      { TicketFlightId: 468, seatNumber: 47 },
      { TicketFlightId: 469, seatNumber: 55 },
      { TicketFlightId: 473, seatNumber: 40 },
      { TicketFlightId: 474, seatNumber: 45 },
      { TicketFlightId: 475, seatNumber: 58 },
      { TicketFlightId: 476, seatNumber: 60 },
      { TicketFlightId: 478, seatNumber: 24 },
      { TicketFlightId: 479, seatNumber: 27 },
      { TicketFlightId: 480, seatNumber: 29 },
      { TicketFlightId: 477, seatNumber: 19 },
      { TicketFlightId: 481, seatNumber: 31 },
      { TicketFlightId: 482, seatNumber: 32 },
      { TicketFlightId: 483, seatNumber: 53 },
      { TicketFlightId: 484, seatNumber: 3 },
      { TicketFlightId: 489, seatNumber: 26 },
      { TicketFlightId: 485, seatNumber: 11 },
      { TicketFlightId: 486, seatNumber: 30 },
      { TicketFlightId: 487, seatNumber: 53 },
      { TicketFlightId: 488, seatNumber: 60 },
      { TicketFlightId: 491, seatNumber: 56 },
      { TicketFlightId: 490, seatNumber: 45 },
      { TicketFlightId: 492, seatNumber: 8 },
      { TicketFlightId: 493, seatNumber: 17 },
      { TicketFlightId: 497, seatNumber: 46 },
      { TicketFlightId: 498, seatNumber: 57 },
      { TicketFlightId: 494, seatNumber: 18 },
      { TicketFlightId: 495, seatNumber: 31 },
      { TicketFlightId: 496, seatNumber: 32 },
      { TicketFlightId: 499, seatNumber: 60 },
      { TicketFlightId: 500, seatNumber: 9 },
      { TicketFlightId: 501, seatNumber: 10 },
      { TicketFlightId: 502, seatNumber: 11 },
      { TicketFlightId: 505, seatNumber: 33 },
      { TicketFlightId: 503, seatNumber: 24 },
      { TicketFlightId: 504, seatNumber: 29 },
      { TicketFlightId: 506, seatNumber: 35 },
      { TicketFlightId: 507, seatNumber: 53 },
      { TicketFlightId: 508, seatNumber: 60 },
      { TicketFlightId: 509, seatNumber: 8 },
      { TicketFlightId: 510, seatNumber: 29 },
      { TicketFlightId: 511, seatNumber: 38 },
      { TicketFlightId: 512, seatNumber: 41 },
      { TicketFlightId: 513, seatNumber: 2 },
      { TicketFlightId: 514, seatNumber: 5 },
      { TicketFlightId: 515, seatNumber: 19 },
      { TicketFlightId: 516, seatNumber: 28 },
      { TicketFlightId: 517, seatNumber: 29 },
      { TicketFlightId: 518, seatNumber: 30 },
      { TicketFlightId: 521, seatNumber: 37 },
      { TicketFlightId: 519, seatNumber: 31 },
      { TicketFlightId: 520, seatNumber: 35 },
      { TicketFlightId: 522, seatNumber: 40 },
      { TicketFlightId: 523, seatNumber: 55 },
      { TicketFlightId: 524, seatNumber: 58 },
      { TicketFlightId: 525, seatNumber: 15 },
      { TicketFlightId: 526, seatNumber: 24 },
      { TicketFlightId: 528, seatNumber: 50 },
      { TicketFlightId: 531, seatNumber: 56 },
      { TicketFlightId: 527, seatNumber: 46 },
      { TicketFlightId: 529, seatNumber: 2 },
      { TicketFlightId: 530, seatNumber: 11 },
      { TicketFlightId: 534, seatNumber: 18 },
      { TicketFlightId: 533, seatNumber: 7 },
      { TicketFlightId: 532, seatNumber: 58 },
      { TicketFlightId: 535, seatNumber: 22 },
      { TicketFlightId: 536, seatNumber: 24 },
      { TicketFlightId: 537, seatNumber: 30 },
      { TicketFlightId: 538, seatNumber: 32 },
      { TicketFlightId: 539, seatNumber: 55 },
      { TicketFlightId: 543, seatNumber: 55 },
      { TicketFlightId: 540, seatNumber: 56 },
      { TicketFlightId: 541, seatNumber: 25 },
      { TicketFlightId: 542, seatNumber: 27 },
      { TicketFlightId: 547, seatNumber: 22 },
      { TicketFlightId: 544, seatNumber: 1 },
      { TicketFlightId: 545, seatNumber: 2 },
      { TicketFlightId: 546, seatNumber: 13 },
      { TicketFlightId: 550, seatNumber: 3 },
      { TicketFlightId: 551, seatNumber: 9 },
      { TicketFlightId: 552, seatNumber: 49 },
      { TicketFlightId: 548, seatNumber: 29 },
      { TicketFlightId: 549, seatNumber: 56 },
      { TicketFlightId: 553, seatNumber: 56 },
      { TicketFlightId: 554, seatNumber: 22 },
      { TicketFlightId: 555, seatNumber: 27 },
      { TicketFlightId: 558, seatNumber: 41 },
      { TicketFlightId: 557, seatNumber: 32 },
      { TicketFlightId: 556, seatNumber: 29 },
      { TicketFlightId: 559, seatNumber: 45 },
      { TicketFlightId: 562, seatNumber: 60 },
      { TicketFlightId: 563, seatNumber: 21 },
      { TicketFlightId: 564, seatNumber: 39 },
      { TicketFlightId: 560, seatNumber: 48 },
      { TicketFlightId: 561, seatNumber: 52 },
      { TicketFlightId: 565, seatNumber: 50 },
      { TicketFlightId: 566, seatNumber: 55 },
      { TicketFlightId: 567, seatNumber: 23 },
      { TicketFlightId: 568, seatNumber: 30 },
      { TicketFlightId: 569, seatNumber: 32 },
      { TicketFlightId: 570, seatNumber: 39 },
      { TicketFlightId: 571, seatNumber: 44 },
      { TicketFlightId: 572, seatNumber: 53 },
      { TicketFlightId: 574, seatNumber: 19 },
      { TicketFlightId: 573, seatNumber: 59 },
      { TicketFlightId: 575, seatNumber: 22 },
      { TicketFlightId: 576, seatNumber: 24 },
      { TicketFlightId: 577, seatNumber: 33 },
      { TicketFlightId: 578, seatNumber: 40 },
      { TicketFlightId: 579, seatNumber: 4 },
      { TicketFlightId: 580, seatNumber: 14 },
      { TicketFlightId: 581, seatNumber: 22 },
      { TicketFlightId: 582, seatNumber: 29 },
      { TicketFlightId: 583, seatNumber: 30 },
      { TicketFlightId: 584, seatNumber: 38 },
      { TicketFlightId: 586, seatNumber: 55 },
      { TicketFlightId: 587, seatNumber: 5 },
      { TicketFlightId: 588, seatNumber: 6 },
      { TicketFlightId: 589, seatNumber: 15 },
      { TicketFlightId: 585, seatNumber: 41 },
      { TicketFlightId: 590, seatNumber: 21 },
      { TicketFlightId: 591, seatNumber: 42 },
      { TicketFlightId: 592, seatNumber: 54 },
      { TicketFlightId: 593, seatNumber: 57 },
      { TicketFlightId: 598, seatNumber: 17 },
      { TicketFlightId: 594, seatNumber: 11 },
      { TicketFlightId: 595, seatNumber: 13 },
      { TicketFlightId: 596, seatNumber: 14 },
      { TicketFlightId: 600, seatNumber: 35 },
      { TicketFlightId: 597, seatNumber: 15 },
      { TicketFlightId: 599, seatNumber: 29 },
      { TicketFlightId: 601, seatNumber: 36 },
      { TicketFlightId: 602, seatNumber: 38 },
      { TicketFlightId: 603, seatNumber: 45 },
      { TicketFlightId: 604, seatNumber: 54 },
    ]));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('boardingPasses', null, {});
  },
};