module.exports = generateSeats = (airplanesNumber) => {
  const seatClass = ['economy', 'business', 'first'];
  const seatsArr = [];
  for (let airplaneItem = 1; airplaneItem <= airplanesNumber; airplaneItem++) {
    let seatNumber = 1;
    for (let classItem = 0; classItem <= 2; classItem++) {
      for (let seatItem = 1; seatItem <= 20; seatItem++) {
        const seatStatus =  Math.random() < 0.1,
        const seat = {
          seatClass: seatClass[classItem],
          seatNumber: seatNumber++,
          seatStatus,
          AirplaneId: airplaneItem,
        };
        seatsArr.push(seat);
      }
    }
  }
  //console.dir(seatsArr, { maxArrayLength: 120 });
  return seatsArr;
};
