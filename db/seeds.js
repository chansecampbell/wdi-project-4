var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/hello-world-p4';
mongoose.connect(databaseURL);

var Country = require("../models/country"); 
var User    = require("../models/user");
var Journey = require("../models/journey");


  var country1 = new Country({
    name: "Bangladesh",
    countryCode: "BD",
    picture: "...."
  })

  country1.save(function(err, country) {
    if (err) return console.log(err);
    console.log("country added! ", country);
  });

  var country2 = new Country({
    name: "Belgium",
    countryCode: "BE",
    picture: "...."
  })

  country2.save(function(err, country) {
    if (err) return console.log(err);
    console.log("country added! ", country);
  });


  var country3 = new Country({
    name: "Japan",
    countryCode: "JP",
    picture: "...."
  })

  country3.save(function(err, country) {
    if (err) return console.log(err);
    console.log("country added! ", country);
  });

  var country4 = new Country({
    name: "United Kingdom",
    countryCode: "GB",
    picture: "...."
  })

  country4.save(function(err, country) {
    if (err) return console.log(err);
    console.log("country added! ", country);
  });

  var user1 = new User({
      name: "John Doe",
      picture: "http://www.fillmurray.com/g/300/300",
      email: "john@john.com",
      _password: "password",
      age: "21",
      gender: "Male",
      nationality: "American"
    })

  var user2 = new User({
      name: "Jane Smith",
      picture: "http://www.fillmurray.com/g/350/350",
      email: "jane@jane.com",
      _password: "password",
      age: "23",
      gender: "Female",
      nationality: "Spanish"
    })

  var user3 = new User({
      name: "Bob Bobson",
      picture: "http://www.fillmurray.com/g/400/400",
      email: "bob@bob.com",
      _password: "password",
      age: "42",
      gender: "Male",
      nationality: "German"
    })


  var journey1 = new Journey({
      name: "Bangladesh",
      description: "Went away for a couple of weeks and stopped off here whilst backpacking.",
      start: 11/01/2001,
      end: 21/02/2001,
      country: country1
    })

    journey1.save(function(err, journey) {
      if (err) return console.log(err);
      console.log("Journey added! ", journey);
    });

    var journey2 = new Journey({
        name: "Weekend in Belgium",
        description: "This was a crazy weekend away a few years ago.",
        start: 11/01/2010,
        end: 15/01/2010,
        country: country2
      })

      journey2.save(function(err, journey) {
        if (err) return console.log(err);
        console.log("Journey added! ", journey);
      });

      var journey3 = new Journey({
          name: "Japan",
          description: "It wasn't that good. I didn't rate Japan.",
          start: 11/01/2001,
          end: 20/01/2001,
          country: country3
        })

        journey3.save(function(err, journey) {
          if (err) return console.log(err);
          console.log("Journey added! ", journey);
        });

        var journey4 = new Journey({
            name: "Quick tour of the UK",
            description: "Amazing country, weird accents.",
            start: 11/01/2001,
            end: 20/01/2001,
            country: country4
          })

          journey4.save(function(err, journey) {
            if (err) return console.log(err);
            console.log("Journey added! ", journey);
          });


user1.countries.push(country1);
user1.countries.push(country2);
user2.countries.push(country3);
user3.countries.push(country4);
journey1.users.push(user1);
journey2.users.push(user1);
journey3.users.push(user2);
journey4.users.push(user3);


user1.save(function(err, user) {
  if (err) return console.log(err);
  console.log("User added! ", user);
});

user2.save(function(err, user) {
  if (err) return console.log(err);
  console.log("User added! ", user);
});

user3.save(function(err, user) {
  if (err) return console.log(err);
  console.log("User added! ", user);
});

user1.journeys.push(journey1);
user1.journeys.push(journey2);
user2.journeys.push(journey3);
user3.journeys.push(journey4);


// var country2 = new Country({
//   name: "Belgium",
//   countryCode: "BE",
//   picture: "...."
// })

// country2.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country3 = new Country({
//   name: "Burkina Faso",
//   countryCode: "BF",
//   picture: "...."
// })

// country3.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country4 = new Country({
//   name: "Bulgaria",
//   countryCode: "BG",
//   picture: "...."
// })

// country4.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country5 = new Country({
//   name: "Bosnia and Herz",
//   countryCode: "BA",
//   picture: "...."
// })

// country5.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country6 = new Country({
//   name: "Brunei",
//   countryCode: "BN",
//   picture: "...."
// })

// country6.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country7 = new Country({
//   name: "Bolivia",
//   countryCode: "BO",
//   picture: "...."
// })

// country7.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country8 = new Country({
//   name: "Japan",
//   countryCode: "JP",
//   picture: "...."
// })

// country8.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country9 = new Country({
//   name: "Burundi",
//   countryCode: "BI",
//   picture: "...."
// })

// country9.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// var country10 = new Country({
//   name: "Benin",
//   countryCode: "BJ",
//   picture: "...."
// })

// country10.save(function(err, country) {
//  if (err) return console.log(err);
//  console.log("Country added! ", country);
// })

// 1 BD  Bangladesh
// 2 BE  Belgium
// 3 BF  Burkina Faso
// 4 BG  Bulgaria
// 5 BA  Bosnia and Herz.
// 6 BN  Brunei
// 7 BO  Bolivia
// 8 JP  Japan
// 9 BI  Burundi
// 10  BJ  Benin
// 11  BT  Bhutan
// 12  JM  Jamaica
// 13  BW  Botswana
// 14  BR  Brazil
// 15  BS  Bahamas
// 16  BY  Belarus
// 17  BZ  Belize
// 18  RU  Russia
// 19  RW  Rwanda
// 20  RS  Serbia
// 21  TL  Timor-Leste
// 22  TM  Turkmenistan
// 23  TJ  Tajikistan
// 24  RO  Romania
// 25  GW  Guinea-Bissau
// 26  GT  Guatemala
// 27  GR  Greece
// 28  GQ  Eq. Guinea
// 29  GY  Guyana
// 30  GE  Georgia
// 31  GB  United Kingdom
// 32  GA  Gabon
// 33  GN  Guinea
// 34  GM  Gambia
// 35  GL  Greenland
// 36  GH  Ghana
// 37  OM  Oman
// 38  TN  Tunisia
// 39  JO  Jordan
// 40  HR  Croatia
// 41  HT  Haiti
// 42  HU  Hungary
// 43  HN  Honduras
// 44  PR  Puerto Rico
// 45  PS  Palestine
// 46  PT  Portugal
// 47  PY  Paraguay
// 48  PA  Panama
// 49  PG  Papua New Guinea
// 50  PE  Peru
// 51  PK  Pakistan
// 52  PH  Philippines
// 53  PL  Poland
// 54  ZM  Zambia
// 55  EH  W. Sahara
// 56  EE  Estonia
// 57  EG  Egypt
// 58  ZA  South Africa
// 59  EC  Ecuador
// 60  IT  Italy
// 61  VN  Vietnam
// 62  SB  Solomon Is.
// 63  ET  Ethiopia
// 64  SO  Somalia
// 65  ZW  Zimbabwe
// 66  ES  Spain
// 67  ER  Eritrea
// 68  ME  Montenegro
// 69  MD  Moldova
// 70  MG  Madagascar
// 71  MA  Morocco
// 72  UZ  Uzbekistan
// 73  MM  Myanmar
// 74  ML  Mali
// 75  MN  Mongolia
// 76  MK  Macedonia
// 77  MW  Malawi
// 78  MR  Mauritania
// 79  UG  Uganda
// 80  MY  Malaysia
// 81  MX  Mexico
// 82  IL  Israel
// 83  FR  France
// 84  XS  Somaliland
// 85  FI  Finland
// 86  FJ  Fiji
// 87  FK  Falkland Is.
// 88  NI  Nicaragua
// 89  NL  Netherlands
// 90  NO  Norway
// 91  NA  Namibia
// 92  VU  Vanuatu
// 93  NC  New Caledonia
// 94  NE  Niger
// 95  NG  Nigeria
// 96  NZ  New Zealand
// 97  NP  Nepal
// 98  XK  Kosovo
// 99  CI  Côte d'Ivoire
// 100 CH  Switzerland
// 101 CO  Colombia
// 102 CN  China
// 103 CM  Cameroon
// 104 CL  Chile
// 105 XC  N. Cyprus
// 106 CA  Canada
// 107 CG  Congo
// 108 CF  Central African Rep.
// 109 CD  Dem. Rep. Congo
// 110 CZ  Czech Rep.
// 111 CY  Cyprus
// 112 CR  Costa Rica
// 113 CU  Cuba
// 114 SZ  Swaziland
// 115 SY  Syria
// 116 KG  Kyrgyzstan
// 117 KE  Kenya
// 118 SS  S. Sudan
// 119 SR  Suriname
// 120 KH  Cambodia
// 121 SV  El Salvador
// 122 SK  Slovakia
// 123 KR  Korea
// 124 SI  Slovenia
// 125 KP  Dem. Rep. Korea
// 126 KW  Kuwait
// 127 SN  Senegal
// 128 SL  Sierra Leone
// 129 KZ  Kazakhstan
// 130 SA  Saudi Arabia
// 131 SE  Sweden
// 132 SD  Sudan
// 133 DO  Dominican Rep.
// 134 DJ  Djibouti
// 135 DK  Denmark
// 136 DE  Germany
// 137 YE  Yemen
// 138 DZ  Algeria
// 139 US  United States
// 140 UY  Uruguay
// 141 LB  Lebanon
// 142 LA  Lao PDR
// 143 TW  Taiwan
// 144 TT  Trinidad and Tobago
// 145 TR  Turkey
// 146 LK  Sri Lanka
// 147 LV  Latvia
// 148 LT  Lithuania
// 149 LU  Luxembourg
// 150 LR  Liberia
// 151 LS  Lesotho
// 152 TH  Thailand
// 153 TF  Fr. S. Antarctic Lands
// 154 TG  Togo
// 155 TD  Chad
// 156 LY  Libya
// 157 AE  United Arab Emirates
// 158 VE  Venezuela
// 159 AF  Afghanistan
// 160 IQ  Iraq
// 161 IS  Iceland
// 162 IR  Iran
// 163 AM  Armenia
// 164 AL  Albania
// 165 AO  Angola
// 166 AR  Argentina
// 167 AU  Australia
// 168 AT  Austria
// 169 IN  India
// 170 TZ  Tanzania
// 171 AZ  Azerbaijan
// 172 IE  Ireland
// 173 ID  Indonesia
// 174 UA  Ukraine
// 175 QA  Qatar
// 176 MZ  Mozambique
