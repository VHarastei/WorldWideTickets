const db = require('../../models');
const moment = require('moment');
const momentRandom = require('moment-random');

module.exports = generateFlights = async (amount) => {
  try {
    const flightsArr = [];
    for (let i = 0; i < amount; i++) {
      const [departureAirportId, arrivalAirportId] = randPairId(1, 8);
      const CompanyId = randId(1, 15);

      const company = await db.Company.findByPk(CompanyId);
      const departureAirport = await db.Airport.findByPk(departureAirportId);
      const arrivalAirport = await db.Airport.findByPk(arrivalAirportId);

      const distance = calcCrow(
        departureAirport.lat,
        departureAirport.lon,
        arrivalAirport.lat,
        arrivalAirport.lon
      );

      const flightTime = distance * 5000;

      const startDate = moment().add(30, 'd');
      const endDate = moment(startDate).add(30, 'd').toDate();

      const departureDate = momentRandom(endDate, startDate).toDate();
      const shiftArrival = Math.round(120 / company.rating);
      const arrivalDate = moment(departureDate).add(flightTime).add(shiftArrival, 'm').toDate();

      const flight = {
        flightNumber: randFlightNumber(),
        distance,
        departureAirportId,
        arrivalAirportId,
        departureDate: departureDate.toISOString(),
        arrivalDate: arrivalDate.toISOString(),
        CompanyId,
      };
      flightsArr.push(flight);
      //db.Flight.create(flight);
    }
    //console.log(flightsArr);
    setTimeout(() => {
      console.log(JSON.stringify(flightsArr));
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};

const calcCrow = (lat1, lon1, lat2, lon2) => {
  let R = 6371; // km
  let dLat = toRad(lat2 - lat1);
  let dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = Math.round(R * c);
  return d;
};

function toRad(Value) {
  return (Value * Math.PI) / 180;
}

function randPairId(min, max) {
  const depId = Math.floor(Math.random() * (max - min) + min);
  let arrId = Math.floor(Math.random() * (max - min) + min);
  if (depId === arrId) {
    return randPairId(min, max);
  }
  return [depId, arrId];
}

function randId(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randFlightNumber() {
  let strArr = [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 2; i++) {
    strArr.push(characters.charAt(Math.floor(Math.random() * characters.length)));
  }
  let num = Math.floor(1000 + Math.random() * 9000);
  return strArr.join('') + '-' + num;
}
