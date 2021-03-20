import { TimeZoneModel } from './TimeZoneModel'

const timeZoneData = new Array<TimeZoneModel>(
  new TimeZoneModel('American Samoa', '(GMT-11:00)'),
  new TimeZoneModel('International Date Line West', '(GMT-11:00)'),
  new TimeZoneModel('Midway Island', '(GMT-11:00)'),
  new TimeZoneModel('Hawaii', '(GMT-10:00)'),
  new TimeZoneModel('Alaska', '(GMT-09:00)'),
  new TimeZoneModel('Pacific Time (US Canada)', '(GMT-08:00)'),
  new TimeZoneModel('Tijuana', '(GMT-08:00)'),
  new TimeZoneModel('Arizona', '(GMT-07:00)'),
  new TimeZoneModel('Chihuahua', '(GMT-07:00)'),
  new TimeZoneModel('Mazatlan', '(GMT-07:00)'),
  new TimeZoneModel('Mountain Time (US Canada)', '(GMT-07:00)'),
  new TimeZoneModel('Central America', '(GMT-06:00)'),
  new TimeZoneModel('Central Time (US Canada)', '(GMT-06:00)'),
  new TimeZoneModel('Guadalajara', '(GMT-06:00)'),
  new TimeZoneModel('Mexico City', '(GMT-06:00)'),
  new TimeZoneModel('Monterrey', '(GMT-06:00)'),
  new TimeZoneModel('Saskatchewan', '(GMT-06:00)'),
  new TimeZoneModel('Bogota', '(GMT-05:00)'),
  new TimeZoneModel('Eastern Time (US Canada)', '(GMT-05:00)'),
  new TimeZoneModel('Indiana (East)', '(GMT-05:00)'),
  new TimeZoneModel('Lima', '(GMT-05:00)'),
  new TimeZoneModel('Quito', '(GMT-05:00)'),
  new TimeZoneModel('Atlantic Time (Canada)', '(GMT-04:00)'),
  new TimeZoneModel('Caracas', '(GMT-04:00)'),
  new TimeZoneModel('Georgetown', '(GMT-04:00)'),
  new TimeZoneModel('La Paz', '(GMT-04:00)'),
  new TimeZoneModel('Santiago', '(GMT-04:00)'),
  new TimeZoneModel('Newfoundland', '(GMT-03:30'),
  new TimeZoneModel('Brasilia', '(GMT-03:00)'),
  new TimeZoneModel('Buenos Aires', '(GMT-03:00)'),
  new TimeZoneModel('Greenland', '(GMT-03:00)'),
  new TimeZoneModel('Montevideo', '(GMT-03:00)'),
  new TimeZoneModel('Mid-Atlantic', '(GMT-02:00)'),
  new TimeZoneModel('Azores', '(GMT-01:00)'),
  new TimeZoneModel('Cape Verde Is.', '(GMT-01:00)'),
  new TimeZoneModel('Edinburgh', '(GMT+00):00)'),
  new TimeZoneModel('Lisbon', '(GMT+00):00)'),
  new TimeZoneModel('London', '(GMT+00):00)'),
  new TimeZoneModel('Monrovia', '(GMT+00):00)'),
  new TimeZoneModel('UTC', '(GMT+00):00)'),
  new TimeZoneModel('Amsterdam', '(GMT+01:00)'),
  new TimeZoneModel('Belgrade', '(GMT+01:00)'),
  new TimeZoneModel('Berlin', '(GMT+01:00)'),
  new TimeZoneModel('Bern', '(GMT+01:00)'),
  new TimeZoneModel('Bratislava', '(GMT+01:00)'),
  new TimeZoneModel('Brussels', '(GMT+01:00)'),
  new TimeZoneModel('Budapest', '(GMT+01:00)'),
  new TimeZoneModel('Casablanca', '(GMT+01:00)'),
  new TimeZoneModel('Copenhagen', '(GMT+01:00)'),
  new TimeZoneModel('Dublin', '(GMT+01:00)'),
  new TimeZoneModel('Europe/Berlin', '(GMT+01:00)'),
  new TimeZoneModel('Ljubljana', '(GMT+01:00)'),
  new TimeZoneModel('Madrid', '(GMT+01:00)'),
  new TimeZoneModel('Paris', '(GMT+01:00)'),
  new TimeZoneModel('Prague', '(GMT+01:00)'),
  new TimeZoneModel('Rome', '(GMT+01:00)'),
  new TimeZoneModel('Sarajevo', '(GMT+01:00)'),
  new TimeZoneModel('Skopje', '(GMT+01:00)'),
  new TimeZoneModel('Stockholm', '(GMT+01:00)'),
  new TimeZoneModel('Vienna', '(GMT+01:00)'),
  new TimeZoneModel('Warsaw', '(GMT+01:00)'),
  new TimeZoneModel('West Central Africa', '(GMT+01:00)'),
  new TimeZoneModel('Zagreb', '(GMT+01:00)'),
  new TimeZoneModel('Zurich', '(GMT+01:00)'),
  new TimeZoneModel('Athens', '(GMT+02:00)'),
  new TimeZoneModel('Bucharest', '(GMT+02:00)'),
  new TimeZoneModel('Cairo', '(GMT+02:00)'),
  new TimeZoneModel('Harare', '(GMT+02:00)'),
  new TimeZoneModel('Helsinki', '(GMT+02:00)'),
  new TimeZoneModel('Jerusalem', '(GMT+02:00)'),
  new TimeZoneModel('Kaliningrad', '(GMT+02:00)'),
  new TimeZoneModel('Kyiv', '(GMT+02:00)'),
  new TimeZoneModel('Pretoria', '(GMT+02:00)'),
  new TimeZoneModel('Riga', '(GMT+02:00)'),
  new TimeZoneModel('Sofia', '(GMT+02:00)'),
  new TimeZoneModel('Tallinn', '(GMT+02:00)'),
  new TimeZoneModel('Vilnius', '(GMT+02:00)'),
  new TimeZoneModel('Baghdad', '(GMT+03:00)'),
  new TimeZoneModel('Istanbul', '(GMT+03:00)'),
  new TimeZoneModel('Kuwait', '(GMT+03:00)'),
  new TimeZoneModel('Minsk', '(GMT+03:00)'),
  new TimeZoneModel('Moscow', '(GMT+03:00)'),
  new TimeZoneModel('Nairobi', '(GMT+03:00)'),
  new TimeZoneModel('Riyadh', '(GMT+03:00)'),
  new TimeZoneModel('St. Petersburg', '(GMT+03:00)'),
  new TimeZoneModel('Tehran', '(GMT+03:30'),
  new TimeZoneModel('Abu Dhabi', '(GMT+04:00)'),
  new TimeZoneModel('Baku', '(GMT+04:00)'),
  new TimeZoneModel('Muscat', '(GMT+04:00)'),
  new TimeZoneModel('Samara', '(GMT+04:00)'),
  new TimeZoneModel('Tbilisi', '(GMT+04:00)'),
  new TimeZoneModel('Volgograd', '(GMT+04:00)'),
  new TimeZoneModel('Yerevan', '(GMT+04:00)'),
  new TimeZoneModel('Kabul', '(GMT+04:30'),
  new TimeZoneModel('Ekaterinburg', '(GMT+05:00)'),
  new TimeZoneModel('Islamabad', '(GMT+05:00)'),
  new TimeZoneModel('Karachi', '(GMT+05:00)'),
  new TimeZoneModel('Tashkent', '(GMT+05:00)'),
  new TimeZoneModel('Chennai', '(GMT+05:30'),
  new TimeZoneModel('Kolkata', '(GMT+05:30'),
  new TimeZoneModel('Mumbai', '(GMT+05:30'),
  new TimeZoneModel('New Delhi', '(GMT+05:30'),
  new TimeZoneModel('Sri Jayawardenepura', '(GMT+05:30'),
  new TimeZoneModel('Kathmandu', '(GMT+05:45'),
  new TimeZoneModel('Almaty', '(GMT+06:00)'),
  new TimeZoneModel('Astana', '(GMT+06:00)'),
  new TimeZoneModel('Dhaka', '(GMT+06:00)'),
  new TimeZoneModel('Urumqi', '(GMT+06:00)'),
  new TimeZoneModel('Rangoon', '(GMT+06:30'),
  new TimeZoneModel('Bangkok', '(GMT+07:00)'),
  new TimeZoneModel('Hanoi', '(GMT+07:00)'),
  new TimeZoneModel('Jakarta', '(GMT+07:00)'),
  new TimeZoneModel('Krasnoyarsk', '(GMT+07:00)'),
  new TimeZoneModel('Novosibirsk', '(GMT+07:00)'),
  new TimeZoneModel('Beijing', '(GMT+08:00)'),
  new TimeZoneModel('Chongqing', '(GMT+08:00)'),
  new TimeZoneModel('Hong Kong', '(GMT+08:00)'),
  new TimeZoneModel('Irkutsk', '(GMT+08:00)'),
  new TimeZoneModel('Kuala Lumpur', '(GMT+08:00)'),
  new TimeZoneModel('Perth', '(GMT+08:00)'),
  new TimeZoneModel('Singapore', '(GMT+08:00)'),
  new TimeZoneModel('Taipei', '(GMT+08:00)'),
  new TimeZoneModel('Ulaanbaatar', '(GMT+08:00)'),
  new TimeZoneModel('Osaka', '(GMT+09:00)'),
  new TimeZoneModel('Sapporo', '(GMT+09:00)'),
  new TimeZoneModel('Seoul', '(GMT+09:00)'),
  new TimeZoneModel('Tokyo', '(GMT+09:00)'),
  new TimeZoneModel('Yakutsk', '(GMT+09:00)'),
  new TimeZoneModel('Adelaide', '(GMT+09:30)'),
  new TimeZoneModel('Darwin', '(GMT+09:30)'),
  new TimeZoneModel('Brisbane', '(GMT+10:00)'),
  new TimeZoneModel('Canberra', '(GMT+10:00)'),
  new TimeZoneModel('Guam', '(GMT+10:00)'),
  new TimeZoneModel('Hobart', '(GMT+10:00)'),
  new TimeZoneModel('Melbourne', '(GMT+10:00)'),
  new TimeZoneModel('Port Moresby', '(GMT+10:00)'),
  new TimeZoneModel('Sydney', '(GMT+10:00)'),
  new TimeZoneModel('Vladivostok', '(GMT+10:00)'),
  new TimeZoneModel('Magadan', '(GMT+11:00)'),
  new TimeZoneModel('New Caledonia', '(GMT+11:00)'),
  new TimeZoneModel('Solomon Is.', '(GMT+11:00)'),
  new TimeZoneModel('Srednekolymsk', '(GMT+11:00)'),
  new TimeZoneModel('Auckland', '(GMT+12:00)'),
  new TimeZoneModel('Fiji', '(GMT+12:00)'),
  new TimeZoneModel('Kamchatka', '(GMT+12:00)'),
  new TimeZoneModel('Marshall Is.', '(GMT+12:00)'),
  new TimeZoneModel('Wellington', '(GMT+12:00)'),
  new TimeZoneModel('Chatham Is.', '(GMT+12:45'),
  new TimeZoneModel("Nuku'alofa", '(GMT+13:00)'),
  new TimeZoneModel('Samoa', '(GMT+13:00)'),
  new TimeZoneModel('Tokelau Is.', '(GMT+13:00)')
)
export { timeZoneData }