import missionsSlice, { joinMission, unjoinMission } from './MissionsSlice';

describe('Test the functionality of the missionsSlice', () => {
  test('Test the functionality of the joinMission', () => {
    const missions = [
      {
        missionid: '9D1B7E0',
        missionName: 'Thaicom',
        missionDesc: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        missionweblink: 'https://en.wikipedia.org/wiki/Thaicom',
        missionjoin: false,
      },
      {
        missionid: 'F4F83DE',
        missionName: 'Telstar',
        missionDesc: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        missionweblink: 'https://en.wikipedia.org/wiki/Telesat',
        missionjoin: false,
      },
    ];

    const newState = [
      {
        missionid: '9D1B7E0',
        missionName: 'Thaicom',
        missionDesc: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        missionweblink: 'https://en.wikipedia.org/wiki/Thaicom',
        missionjoin: false,
      },
      {
        missionid: 'F4F83DE',
        missionName: 'Telstar',
        missionDesc: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        missionweblink: 'https://en.wikipedia.org/wiki/Telesat',
        missionjoin: true,
      },
    ];
    expect(missionsSlice(missions, joinMission('F4F83DE'))).toEqual(newState);
  });

  test('Test the functionality of the unjoinMission', () => {
    const missions = [
      {
        missionid: '9D1B7E0',
        missionName: 'Thaicom',
        missionDesc: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        missionweblink: 'https://en.wikipedia.org/wiki/Thaicom',
        missionjoin: true,
      },
      {
        missionid: 'F4F83DE',
        missionName: 'Telstar',
        missionDesc: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        missionweblink: 'https://en.wikipedia.org/wiki/Telesat',
        missionjoin: true,
      },
    ];

    const newState = [
      {
        missionid: '9D1B7E0',
        missionName: 'Thaicom',
        missionDesc: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        missionweblink: 'https://en.wikipedia.org/wiki/Thaicom',
        missionjoin: true,
      },
      {
        missionid: 'F4F83DE',
        missionName: 'Telstar',
        missionDesc: 'Telstar 19V (Telstar 19 Vantage) is a communication satellite in the Telstar series of the Canadian satellite communications company Telesat. It was built by Space Systems Loral (MAXAR) and is based on the SSL-1300 bus. As of 26 July 2018, Telstar 19V is the heaviest commercial communications satellite ever launched, weighing at 7,076 kg (15,600 lbs) and surpassing the previous record, set by TerreStar-1 (6,910 kg/15230lbs), launched by Ariane 5ECA on 1 July 2009.',
        missionweblink: 'https://en.wikipedia.org/wiki/Telesat',
        missionjoin: false,
      },
    ];
    expect(missionsSlice(missions, unjoinMission('F4F83DE'))).toEqual(newState);
  });
});
