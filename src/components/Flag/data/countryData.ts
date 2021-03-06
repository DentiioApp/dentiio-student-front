const countryData = [
  {
    id: 1,
    iso: 'af',
    nicename: 'Afghanistan',
    phonecode: 93
  },
  {
    id: 2,
    iso: 'al',
    nicename: 'Albania',
    phonecode: 355
  },
  {
    id: 3,
    iso: 'dz',
    nicename: 'Algeria',
    phonecode: 213
  },
  {
    id: 4,
    iso: 'as',
    nicename: 'American Samoa',
    phonecode: 1684
  },
  {
    id: 5,
    iso: 'ad',
    nicename: 'Andorra',
    phonecode: 376
  },
  {
    id: 6,
    iso: 'ao',
    nicename: 'Angola',
    phonecode: 244
  },
  {
    id: 7,
    iso: 'ai',
    nicename: 'Anguilla',
    phonecode: 1264
  },
  {
    id: 8,
    iso: 'aq',
    nicename: 'Antarctica',
    phonecode: 0
  },
  {
    id: 9,
    iso: 'ag',
    nicename: 'Antigua and Barbuda',
    phonecode: 1268
  },
  {
    id: 10,
    iso: 'ar',
    nicename: 'Argentina',
    phonecode: 54
  },
  {
    id: 11,
    iso: 'am',
    nicename: 'Armenia',
    phonecode: 374
  },
  {
    id: 12,
    iso: 'aw',
    nicename: 'Aruba',
    phonecode: 297
  },
  {
    id: 13,
    iso: 'au',
    nicename: 'Australia',
    phonecode: 61
  },
  {
    id: 14,
    iso: 'at',
    nicename: 'Austria',
    phonecode: 43
  },
  {
    id: 15,
    iso: 'az',
    nicename: 'Azerbaijan',
    phonecode: 994
  },
  {
    id: 16,
    iso: 'bs',
    nicename: 'Bahamas',
    phonecode: 1242
  },
  {
    id: 17,
    iso: 'bh',
    nicename: 'Bahrain',
    phonecode: 973
  },
  {
    id: 18,
    iso: 'bd',
    nicename: 'Bangladesh',
    phonecode: 880
  },
  {
    id: 19,
    iso: 'bb',
    nicename: 'Barbados',
    phonecode: 1246
  },
  {
    id: 20,
    iso: 'by',
    nicename: 'Belarus',
    phonecode: 375
  },
  {
    id: 21,
    iso: 'be',
    nicename: 'Belgium',
    phonecode: 32
  },
  {
    id: 22,
    iso: 'bz',
    nicename: 'Belize',
    phonecode: 501
  },
  {
    id: 23,
    iso: 'bj',
    nicename: 'Benin',
    phonecode: 229
  },
  {
    id: 24,
    iso: 'bm',
    nicename: 'Bermuda',
    phonecode: 1441
  },
  {
    id: 25,
    iso: 'bt',
    nicename: 'Bhutan',
    phonecode: 975
  },
  {
    id: 26,
    iso: 'bo',
    nicename: 'Bolivia',
    phonecode: 591
  },
  {
    id: 27,
    iso: 'ba',
    nicename: 'Bosnia and Herzegovina',
    phonecode: 387
  },
  {
    id: 28,
    iso: 'bw',
    nicename: 'Botswana',
    phonecode: 267
  },
  {
    id: 29,
    iso: 'bv',
    nicename: 'Bouvet Island',
    phonecode: 0
  },
  {
    id: 30,
    iso: 'br',
    nicename: 'Brazil',
    phonecode: 55
  },
  {
    id: 31,
    iso: 'io',
    nicename: 'British Indian Ocean Territory',
    phonecode: 246
  },
  {
    id: 32,
    iso: 'bn',
    nicename: 'Brunei Darussalam',
    phonecode: 673
  },
  {
    id: 33,
    iso: 'bg',
    nicename: 'Bulgaria',
    phonecode: 359
  },
  {
    id: 34,
    iso: 'bf',
    nicename: 'Burkina Faso',
    phonecode: 226
  },
  {
    id: 35,
    iso: 'bi',
    nicename: 'Burundi',
    phonecode: 257
  },
  {
    id: 36,
    iso: 'kh',
    nicename: 'Cambodia',
    phonecode: 855
  },
  {
    id: 37,
    iso: 'cm',
    nicename: 'Cameroon',
    phonecode: 237
  },
  {
    id: 38,
    iso: 'ca',
    nicename: 'Canada',
    phonecode: 1
  },
  {
    id: 39,
    iso: 'cv',
    nicename: 'Cape Verde',
    phonecode: 238
  },
  {
    id: 40,
    iso: 'ky',
    nicename: 'Cayman Islands',
    phonecode: 1345
  },
  {
    id: 41,
    iso: 'cf',
    nicename: 'Central African Republic',
    phonecode: 236
  },
  {
    id: 42,
    iso: 'td',
    nicename: 'Chad',
    phonecode: 235
  },
  {
    id: 43,
    iso: 'cl',
    nicename: 'Chile',
    phonecode: 56
  },
  {
    id: 44,
    iso: 'cn',
    nicename: 'China',
    phonecode: 86
  },
  {
    id: 45,
    iso: 'cx',
    nicename: 'Christmas Island',
    phonecode: 61
  },
  {
    id: 46,
    iso: 'cc',
    nicename: 'Cocos (Keeling) Islands',
    phonecode: 672
  },
  {
    id: 47,
    iso: 'co',
    nicename: 'Colombia',
    phonecode: 57
  },
  {
    id: 48,
    iso: 'km',
    nicename: 'Comoros',
    phonecode: 269
  },
  {
    id: 49,
    iso: 'cg',
    nicename: 'Congo',
    phonecode: 242
  },
  {
    id: 50,
    iso: 'cd',
    nicename: 'Congo, the Democratic Republic of the',
    phonecode: 242
  },
  {
    id: 51,
    iso: 'ck',
    nicename: 'Cook Islands',
    phonecode: 682
  },
  {
    id: 52,
    iso: 'cr',
    nicename: 'Costa Rica',
    phonecode: 506
  },
  {
    id: 53,
    iso: 'ci',
    nicename: "Cote D''Ivoire",
    phonecode: 225
  },
  {
    id: 54,
    iso: 'hr',
    nicename: 'Croatia',
    phonecode: 385
  },
  {
    id: 55,
    iso: 'cu',
    nicename: 'Cuba',
    phonecode: 53
  },
  {
    id: 56,
    iso: 'cy',
    nicename: 'Cyprus',
    phonecode: 357
  },
  {
    id: 57,
    iso: 'cz',
    nicename: 'Czech Republic',
    phonecode: 420
  },
  {
    id: 58,
    iso: 'dk',
    nicename: 'Denmark',
    phonecode: 45
  },
  {
    id: 59,
    iso: 'dj',
    nicename: 'Djibouti',
    phonecode: 253
  },
  {
    id: 60,
    iso: 'dm',
    nicename: 'Dominica',
    phonecode: 1767
  },
  {
    id: 61,
    iso: 'do',
    nicename: 'Dominican Republic',
    phonecode: 1809
  },
  {
    id: 62,
    iso: 'ec',
    nicename: 'Ecuador',
    phonecode: 593
  },
  {
    id: 63,
    iso: 'eg',
    nicename: 'Egypt',
    phonecode: 20
  },
  {
    id: 64,
    iso: 'sv',
    nicename: 'El Salvador',
    phonecode: 503
  },
  {
    id: 65,
    iso: 'gq',
    nicename: 'Equatorial Guinea',
    phonecode: 240
  },
  {
    id: 66,
    iso: 'er',
    nicename: 'Eritrea',
    phonecode: 291
  },
  {
    id: 67,
    iso: 'ee',
    nicename: 'Estonia',
    phonecode: 372
  },
  {
    id: 68,
    iso: 'et',
    nicename: 'Ethiopia',
    phonecode: 251
  },
  {
    id: 69,
    iso: 'fk',
    nicename: 'Falkland Islands (Malvinas)',
    phonecode: 500
  },
  {
    id: 70,
    iso: 'fo',
    nicename: 'Faroe Islands',
    phonecode: 298
  },
  {
    id: 71,
    iso: 'fj',
    nicename: 'Fiji',
    phonecode: 679
  },
  {
    id: 72,
    iso: 'fi',
    nicename: 'Finland',
    phonecode: 358
  },
  {
    id: 73,
    iso: 'fr',
    nicename: 'France',
    phonecode: 33
  },
  {
    id: 74,
    iso: 'gf',
    nicename: 'French Guiana',
    phonecode: 594
  },
  {
    id: 75,
    iso: 'pf',
    nicename: 'French Polynesia',
    phonecode: 689
  },
  {
    id: 76,
    iso: 'tf',
    nicename: 'French Southern Territories',
    phonecode: 0
  },
  {
    id: 77,
    iso: 'ga',
    nicename: 'Gabon',
    phonecode: 241
  },
  {
    id: 78,
    iso: 'gm',
    nicename: 'Gambia',
    phonecode: 220
  },
  {
    id: 79,
    iso: 'ge',
    nicename: 'Georgia',
    phonecode: 995
  },
  {
    id: 80,
    iso: 'de',
    nicename: 'Germany',
    phonecode: 49
  },
  {
    id: 81,
    iso: 'gh',
    nicename: 'Ghana',
    phonecode: 233
  },
  {
    id: 82,
    iso: 'gi',
    nicename: 'Gibraltar',
    phonecode: 350
  },
  {
    id: 83,
    iso: 'gr',
    nicename: 'Greece',
    phonecode: 30
  },
  {
    id: 84,
    iso: 'gl',
    nicename: 'Greenland',
    phonecode: 299
  },
  {
    id: 85,
    iso: 'gd',
    nicename: 'Grenada',
    phonecode: 1473
  },
  {
    id: 86,
    iso: 'gp',
    nicename: 'Guadeloupe',
    phonecode: 590
  },
  {
    id: 87,
    iso: 'gu',
    nicename: 'Guam',
    phonecode: 1671
  },
  {
    id: 88,
    iso: 'gt',
    nicename: 'Guatemala',
    phonecode: 502
  },
  {
    id: 89,
    iso: 'gn',
    nicename: 'Guinea',
    phonecode: 224
  },
  {
    id: 90,
    iso: 'gw',
    nicename: 'Guinea-Bissau',
    phonecode: 245
  },
  {
    id: 91,
    iso: 'gy',
    nicename: 'Guyana',
    phonecode: 592
  },
  {
    id: 92,
    iso: 'ht',
    nicename: 'Haiti',
    phonecode: 509
  },
  {
    id: 93,
    iso: 'hm',
    nicename: 'Heard Island and Mcdonald Islands',
    phonecode: 0
  },
  {
    id: 94,
    iso: 'va',
    nicename: 'Holy See (Vatican City State)',
    phonecode: 39
  },
  {
    id: 95,
    iso: 'hn',
    nicename: 'Honduras',
    phonecode: 504
  },
  {
    id: 96,
    iso: 'hk',
    nicename: 'Hong Kong',
    phonecode: 852
  },
  {
    id: 97,
    iso: 'hu',
    nicename: 'Hungary',
    phonecode: 36
  },
  {
    id: 98,
    iso: 'is',
    nicename: 'Iceland',
    phonecode: 354
  },
  {
    id: 99,
    iso: 'in',
    nicename: 'India',
    phonecode: 91
  },
  {
    id: 100,
    iso: 'id',
    nicename: 'Indonesia',
    phonecode: 62
  },
  {
    id: 101,
    iso: 'ir',
    nicename: 'Iran, Islamic Republic of',
    phonecode: 98
  },
  {
    id: 102,
    iso: 'iq',
    nicename: 'Iraq',
    phonecode: 964
  },
  {
    id: 103,
    iso: 'ie',
    nicename: 'Ireland',
    phonecode: 353
  },
  {
    id: 104,
    iso: 'il',
    nicename: 'Israel',
    phonecode: 972
  },
  {
    id: 105,
    iso: 'it',
    nicename: 'Italy',
    phonecode: 39
  },
  {
    id: 106,
    iso: 'jm',
    nicename: 'Jamaica',
    phonecode: 1876
  },
  {
    id: 107,
    iso: 'jp',
    nicename: 'Japan',
    phonecode: 81
  },
  {
    id: 108,
    iso: 'jo',
    nicename: 'Jordan',
    phonecode: 962
  },
  {
    id: 109,
    iso: 'kz',
    nicename: 'Kazakhstan',
    phonecode: 7
  },
  {
    id: 110,
    iso: 'ke',
    nicename: 'Kenya',
    phonecode: 254
  },
  {
    id: 111,
    iso: 'ki',
    nicename: 'Kiribati',
    phonecode: 686
  },
  {
    id: 112,
    iso: 'kp',
    nicename: "Korea, Democratic People''s Republic of",
    phonecode: 850
  },
  {
    id: 113,
    iso: 'kr',
    nicename: 'Korea, Republic of',
    phonecode: 82
  },
  {
    id: 114,
    iso: 'kw',
    nicename: 'Kuwait',
    phonecode: 965
  },
  {
    id: 115,
    iso: 'kg',
    nicename: 'Kyrgyzstan',
    phonecode: 996
  },
  {
    id: 116,
    iso: 'la',
    nicename: "Lao People''s Democratic Republic",
    phonecode: 856
  },
  {
    id: 117,
    iso: 'lv',
    nicename: 'Latvia',
    phonecode: 371
  },
  {
    id: 118,
    iso: 'lb',
    nicename: 'Lebanon',
    phonecode: 961
  },
  {
    id: 119,
    iso: 'ls',
    nicename: 'Lesotho',
    phonecode: 266
  },
  {
    id: 120,
    iso: 'lr',
    nicename: 'Liberia',
    phonecode: 231
  },
  {
    id: 121,
    iso: 'ly',
    nicename: 'Libyan Arab Jamahiriya',
    phonecode: 218
  },
  {
    id: 122,
    iso: 'li',
    nicename: 'Liechtenstein',
    phonecode: 423
  },
  {
    id: 123,
    iso: 'lt',
    nicename: 'Lithuania',
    phonecode: 370
  },
  {
    id: 124,
    iso: 'lu',
    nicename: 'Luxembourg',
    phonecode: 352
  },
  {
    id: 125,
    iso: 'mo',
    nicename: 'Macao',
    phonecode: 853
  },
  {
    id: 126,
    iso: 'mk',
    nicename: 'Macedonia, the Former Yugoslav Republic of',
    phonecode: 389
  },
  {
    id: 127,
    iso: 'mg',
    nicename: 'Madagascar',
    phonecode: 261
  },
  {
    id: 128,
    iso: 'mw',
    nicename: 'Malawi',
    phonecode: 265
  },
  {
    id: 129,
    iso: 'my',
    nicename: 'Malaysia',
    phonecode: 60
  },
  {
    id: 130,
    iso: 'mv',
    nicename: 'Maldives',
    phonecode: 960
  },
  {
    id: 131,
    iso: 'ml',
    nicename: 'Mali',
    phonecode: 223
  },
  {
    id: 132,
    iso: 'mt',
    nicename: 'Malta',
    phonecode: 356
  },
  {
    id: 133,
    iso: 'mh',
    nicename: 'Marshall Islands',
    phonecode: 692
  },
  {
    id: 134,
    iso: 'mq',
    nicename: 'Martinique',
    phonecode: 596
  },
  {
    id: 135,
    iso: 'mr',
    nicename: 'Mauritania',
    phonecode: 222
  },
  {
    id: 136,
    iso: 'mu',
    nicename: 'Mauritius',
    phonecode: 230
  },
  {
    id: 137,
    iso: 'yt',
    nicename: 'Mayotte',
    phonecode: 269
  },
  {
    id: 138,
    iso: 'mx',
    nicename: 'Mexico',
    phonecode: 52
  },
  {
    id: 139,
    iso: 'fm',
    nicename: 'Micronesia, Federated States of',
    phonecode: 691
  },
  {
    id: 140,
    iso: 'md',
    nicename: 'Moldova, Republic of',
    phonecode: 373
  },
  {
    id: 141,
    iso: 'mc',
    nicename: 'Monaco',
    phonecode: 377
  },
  {
    id: 142,
    iso: 'mn',
    nicename: 'Mongolia',
    phonecode: 976
  },
  {
    id: 143,
    iso: 'ms',
    nicename: 'Montserrat',
    phonecode: 1664
  },
  {
    id: 144,
    iso: 'ma',
    nicename: 'Morocco',
    phonecode: 212
  },
  {
    id: 145,
    iso: 'mz',
    nicename: 'Mozambique',
    phonecode: 258
  },
  {
    id: 146,
    iso: 'mm',
    nicename: 'Myanmar',
    phonecode: 95
  },
  {
    id: 147,
    iso: 'na',
    nicename: 'Namibia',
    phonecode: 264
  },
  {
    id: 148,
    iso: 'nr',
    nicename: 'Nauru',
    phonecode: 674
  },
  {
    id: 149,
    iso: 'np',
    nicename: 'Nepal',
    phonecode: 977
  },
  {
    id: 150,
    iso: 'nl',
    nicename: 'Netherlands',
    phonecode: 31
  },
  {
    id: 151,
    iso: 'an',
    nicename: 'Netherlands Antilles',
    phonecode: 599
  },
  {
    id: 152,
    iso: 'nc',
    nicename: 'New Caledonia',
    phonecode: 687
  },
  {
    id: 153,
    iso: 'nz',
    nicename: 'New Zealand',
    phonecode: 64
  },
  {
    id: 154,
    iso: 'ni',
    nicename: 'Nicaragua',
    phonecode: 505
  },
  {
    id: 155,
    iso: 'ne',
    nicename: 'Niger',
    phonecode: 227
  },
  {
    id: 156,
    iso: 'ng',
    nicename: 'Nigeria',
    phonecode: 234
  },
  {
    id: 157,
    iso: 'nu',
    nicename: 'Niue',
    phonecode: 683
  },
  {
    id: 158,
    iso: 'nf',
    nicename: 'Norfolk Island',
    phonecode: 672
  },
  {
    id: 159,
    iso: 'mp',
    nicename: 'Northern Mariana Islands',
    phonecode: 1670
  },
  {
    id: 160,
    iso: 'no',
    nicename: 'Norway',
    phonecode: 47
  },
  {
    id: 161,
    iso: 'om',
    nicename: 'Oman',
    phonecode: 968
  },
  {
    id: 162,
    iso: 'pk',
    nicename: 'Pakistan',
    phonecode: 92
  },
  {
    id: 163,
    iso: 'pw',
    nicename: 'Palau',
    phonecode: 680
  },
  {
    id: 164,
    iso: 'ps',
    nicename: 'Palestinian Territory, Occupied',
    phonecode: 970
  },
  {
    id: 165,
    iso: 'pa',
    nicename: 'Panama',
    phonecode: 507
  },
  {
    id: 166,
    iso: 'pg',
    nicename: 'Papua New Guinea',
    phonecode: 675
  },
  {
    id: 167,
    iso: 'py',
    nicename: 'Paraguay',
    phonecode: 595
  },
  {
    id: 168,
    iso: 'pe',
    nicename: 'Peru',
    phonecode: 51
  },
  {
    id: 169,
    iso: 'ph',
    nicename: 'Philippines',
    phonecode: 63
  },
  {
    id: 170,
    iso: 'pn',
    nicename: 'Pitcairn',
    phonecode: 0
  },
  {
    id: 171,
    iso: 'pl',
    nicename: 'Poland',
    phonecode: 48
  },
  {
    id: 172,
    iso: 'pt',
    nicename: 'Portugal',
    phonecode: 351
  },
  {
    id: 173,
    iso: 'pr',
    nicename: 'Puerto Rico',
    phonecode: 1787
  },
  {
    id: 174,
    iso: 'qa',
    nicename: 'Qatar',
    phonecode: 974
  },
  {
    id: 175,
    iso: 're',
    nicename: 'Reunion',
    phonecode: 262
  },
  {
    id: 176,
    iso: 'ro',
    nicename: 'Romania',
    phonecode: 40
  },
  {
    id: 177,
    iso: 'ru',
    nicename: 'Russian Federation',
    phonecode: 70
  },
  {
    id: 178,
    iso: 'rw',
    nicename: 'Rwanda',
    phonecode: 250
  },
  {
    id: 179,
    iso: 'sh',
    nicename: 'Saint Helena',
    phonecode: 290
  },
  {
    id: 180,
    iso: 'kn',
    nicename: 'Saint Kitts and Nevis',
    phonecode: 1869
  },
  {
    id: 181,
    iso: 'lc',
    nicename: 'Saint Lucia',
    phonecode: 1758
  },
  {
    id: 182,
    iso: 'pm',
    nicename: 'Saint Pierre and Miquelon',
    phonecode: 508
  },
  {
    id: 183,
    iso: 'vc',
    nicename: 'Saint Vincent and the Grenadines',
    phonecode: 1784
  },
  {
    id: 184,
    iso: 'ws',
    nicename: 'Samoa',
    phonecode: 684
  },
  {
    id: 185,
    iso: 'sm',
    nicename: 'San Marino',
    phonecode: 378
  },
  {
    id: 186,
    iso: 'st',
    nicename: 'Sao Tome and Principe',
    phonecode: 239
  },
  {
    id: 187,
    iso: 'sa',
    nicename: 'Saudi Arabia',
    phonecode: 966
  },
  {
    id: 188,
    iso: 'sn',
    nicename: 'Senegal',
    phonecode: 221
  },
  {
    id: 189,
    iso: 'cs',
    nicename: 'Serbia and Montenegro',
    phonecode: 381
  },
  {
    id: 190,
    iso: 'sc',
    nicename: 'Seychelles',
    phonecode: 248
  },
  {
    id: 191,
    iso: 'sl',
    nicename: 'Sierra Leone',
    phonecode: 232
  },
  {
    id: 192,
    iso: 'sg',
    nicename: 'Singapore',
    phonecode: 65
  },
  {
    id: 193,
    iso: 'sk',
    nicename: 'Slovakia',
    phonecode: 421
  },
  {
    id: 194,
    iso: 'si',
    nicename: 'Slovenia',
    phonecode: 386
  },
  {
    id: 195,
    iso: 'sb',
    nicename: 'Solomon Islands',
    phonecode: 677
  },
  {
    id: 196,
    iso: 'so',
    nicename: 'Somalia',
    phonecode: 252
  },
  {
    id: 197,
    iso: 'za',
    nicename: 'South Africa',
    phonecode: 27
  },
  {
    id: 198,
    iso: 'gs',
    nicename: 'South Georgia and the South Sandwich Islands',
    phonecode: 0
  },
  {
    id: 199,
    iso: 'es',
    nicename: 'Spain',
    phonecode: 34
  },
  {
    id: 200,
    iso: 'lk',
    nicename: 'Sri Lanka',
    phonecode: 94
  },
  {
    id: 201,
    iso: 'sd',
    nicename: 'Sudan',
    phonecode: 249
  },
  {
    id: 202,
    iso: 'sr',
    nicename: 'Suriname',
    phonecode: 597
  },
  {
    id: 203,
    iso: 'sj',
    nicename: 'Svalbard and Jan Mayen',
    phonecode: 47
  },
  {
    id: 204,
    iso: 'sz',
    nicename: 'Swaziland',
    phonecode: 268
  },
  {
    id: 205,
    iso: 'se',
    nicename: 'Sweden',
    phonecode: 46
  },
  {
    id: 206,
    iso: 'ch',
    nicename: 'Switzerland',
    phonecode: 41
  },
  {
    id: 207,
    iso: 'sy',
    nicename: 'Syrian Arab Republic',
    phonecode: 963
  },
  {
    id: 208,
    iso: 'tw',
    nicename: 'Taiwan, Province of China',
    phonecode: 886
  },
  {
    id: 209,
    iso: 'tj',
    nicename: 'Tajikistan',
    phonecode: 992
  },
  {
    id: 210,
    iso: 'tz',
    nicename: 'Tanzania, United Republic of',
    phonecode: 255
  },
  {
    id: 211,
    iso: 'th',
    nicename: 'Thailand',
    phonecode: 66
  },
  {
    id: 212,
    iso: 'tl',
    nicename: 'Timor-Leste',
    phonecode: 670
  },
  {
    id: 213,
    iso: 'tg',
    nicename: 'Togo',
    phonecode: 228
  },
  {
    id: 214,
    iso: 'tk',
    nicename: 'Tokelau',
    phonecode: 690
  },
  {
    id: 215,
    iso: 'to',
    nicename: 'Tonga',
    phonecode: 676
  },
  {
    id: 216,
    iso: 'tt',
    nicename: 'Trinidad and Tobago',
    phonecode: 1868
  },
  {
    id: 217,
    iso: 'tn',
    nicename: 'Tunisia',
    phonecode: 216
  },
  {
    id: 218,
    iso: 'tr',
    nicename: 'Turkey',
    phonecode: 90
  },
  {
    id: 219,
    iso: 'tm',
    nicename: 'Turkmenistan',
    phonecode: 7370
  },
  {
    id: 220,
    iso: 'tc',
    nicename: 'Turks and Caicos Islands',
    phonecode: 1649
  },
  {
    id: 221,
    iso: 'tv',
    nicename: 'Tuvalu',
    phonecode: 688
  },
  {
    id: 222,
    iso: 'ug',
    nicename: 'Uganda',
    phonecode: 256
  },
  {
    id: 223,
    iso: 'ua',
    nicename: 'Ukraine',
    phonecode: 380
  },
  {
    id: 224,
    iso: 'ae',
    nicename: 'United Arab Emirates',
    phonecode: 971
  },
  {
    id: 225,
    iso: 'gb',
    nicename: 'United Kingdom',
    phonecode: 44
  },
  {
    id: 226,
    iso: 'us',
    nicename: 'United States',
    phonecode: 1
  },
  {
    id: 227,
    iso: 'um',
    nicename: 'United States Minor Outlying Islands',
    phonecode: 1
  },
  {
    id: 228,
    iso: 'uy',
    nicename: 'Uruguay',
    phonecode: 598
  },
  {
    id: 229,
    iso: 'uz',
    nicename: 'Uzbekistan',
    phonecode: 998
  },
  {
    id: 230,
    iso: 'vu',
    nicename: 'Vanuatu',
    phonecode: 678
  },
  {
    id: 231,
    iso: 've',
    nicename: 'Venezuela',
    phonecode: 58
  },
  {
    id: 232,
    iso: 'vn',
    nicename: 'Viet Nam',
    phonecode: 84
  },
  {
    id: 233,
    iso: 'vg',
    nicename: 'Virgin Islands, British',
    phonecode: 1284
  },
  {
    id: 234,
    iso: 'vi',
    nicename: 'Virgin Islands, U.s.',
    phonecode: 1340
  },
  {
    id: 235,
    iso: 'wf',
    nicename: 'Wallis and Futuna',
    phonecode: 681
  },
  {
    id: 236,
    iso: 'eh',
    nicename: 'Western Sahara',
    phonecode: 212
  },
  {
    id: 237,
    iso: 'ye',
    nicename: 'Yemen',
    phonecode: 967
  },
  {
    id: 238,
    iso: 'zm',
    nicename: 'Zambia',
    phonecode: 260
  },
  {
    id: 239,
    iso: 'zw',
    nicename: 'Zimbabwe',
    phonecode: 263
  }
]
export { countryData }
