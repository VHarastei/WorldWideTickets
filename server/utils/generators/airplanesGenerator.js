module.exports = generateAirplanes = (airplanesNumber) => {
  const airplaneModels = [
    'Boeing 747',
    'Boeing 777',
    'Airbus 217',
    'Airbus 717',
    'Boeing 333',
    'Airbus A350',
    'Airbus A330',
    'Airbus A320',
    'Comac C919',
    'Irkut MC-21',
    'Tupolev 204',
    'Embraer E-Jet',
    'Embraer Jet',
    'Ilyushin Il-96',
    'Sukhoi SSJ100',
    'Airbus A380',
    'Airbus A340',
  ];

  const airplanesArr = [];

  for (let i = 1; i <= airplanesNumber; i++) {
    const modelIndex = Math.floor(Math.random() * airplaneModels.length);
    const airplane = {
      model: airplaneModels[modelIndex],
      FlightId: i,
    };
    console.dir(airplane);
    airplanesArr.push(airplane);
  }
  return airplanesArr;
};
