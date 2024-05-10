INSERT INTO profile(code, name)
VALUES	('etu', 'etudiant');
INSERT INTO profile(code, name)
VALUES	('ro', 'professeur');
INSERT INTO profile(code, name)
VALUES	('adm', 'admin');

INSERT INTO legal_id_type(code, name)
VALUES	('C', 'CIN');
INSERT INTO legal_id_type(code, name)
VALUES	('P', 'Passeport');
INSERT INTO legal_id_type(code, name)
VALUES	('S', 'Carte de séjour');

ALTER TABLE UNIVERSITY DROP COLUMN description;
ALTER TABLE UNIVERSITY ADD (description CLOB);

ALTER TABLE UNIVERSITY DROP COLUMN thumbnail;
ALTER TABLE UNIVERSITY ADD (thumbnail CLOB);

INSERT INTO UNIVERSITY(code, name, description, thumbnail, city_id)
VALUES ('uit', 'Université Ibn Tofail', :description, :thumbnail, (SELECT id FROM city WHERE code = '330'));
--description => L'Université Ibn Tofaïl située au cœur de la forêt de Maâmora, une pluridisciplinaire (Arts et Sciences Humaines, Droit, Economie, Gestion, Lettres et Langues, chimie, Sciences et Techniques, école de commerce et d'ingénieurs…). Depuis le 23 octobre 1989, elle a inscrit sa mission de formation et de recherche par Dahir 1.89.144 du 22 Rabiae1 er 1410. Implantée sur 8 hectares, l'UIT accompagne aujourd'hui plus de 85 000 étudiants au sein d'un campus ramassé composé de 11 établissements afin de former des étudiants curieux, réflexifs qui deviendront des professionnels et des citoyens actifs et responsables, attentifs aux conséquences environnementales, sociales et éthiques de leurs actions et de leurs décisions. L'Université se distingue par la richesse de son offre culturelle et éducationnel à travers une infrastructure moderne à savoir un Théâtre universitaire avec près de 300 places et un passeport culturel étudiant donnant accès à plusieurs structures culturelles nationales et internationales couvrant les cinq continents, l'université joue un rôle majeur également dans la mobilité des étudiants, des professeurs chercheurs, les doctorants… , à travers ses partenariats avec des universités prestigieuses, ses programmes de formation à l''étranger. Au vu de ses potentialités, étant l''unique campus public ramassé à l’échelle nationale, tend à véhiculer son image grâce son classement par The Times Higher Education World University Rankings 2023.
--thumbnail => data:image/png;base64,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

INSERT INTO UNIVERSITY(code, name, description, thumbnail, city_id)
VALUES ('uit', 'Université Ibn Tofail', 'L’Université Ibn Tofaïl située au cœur de la forêt de Maâmora, une pluridisciplinaire (Arts et Sciences Humaines, Droit, Economie, Gestion, Lettres et Langues, chimie, Sciences et Techniques, école de commerce et d’ingénieurs…). Depuis le 23 octobre 1989, elle a inscrit sa mission de formation et de recherche par Dahir 1.89.144 du 22 Rabiae1 er 1410. Implantée sur 8 hectares, l’UIT accompagne aujourd’hui plus de 85 000 étudiants au sein d’un campus ramassé composé de 11 établissements afin de former des étudiants curieux, réflexifs qui deviendront des professionnels et des citoyens actifs et responsables, attentifs aux conséquences environnementales, sociales et éthiques de leurs actions et de leurs décisions. L’Université se distingue par la richesse de son offre culturelle et éducationnel à travers une infrastructure moderne à savoir un Théâtre universitaire avec près de 300 places et un passeport culturel étudiant donnant accès à plusieurs structures culturelles nationales et internationales couvrant les cinq continents, l’université joue un rôle majeur également dans la mobilité des étudiants, des professeurs chercheurs, les doctorants… , à travers ses partenariats avec des universités prestigieuses, ses programmes de formation à l''étranger. Au vu de ses potentialités, étant l''unique campus public ramassé à l’échelle nationale, tend à véhiculer son image grâce son classement par The Times Higher Education World University Rankings 2023.', 'data:image/png;base64,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', (SELECT id FROM city WHERE code = '330'));

INSERT INTO COUNTRY (code, name, rank)
VALUES(N'MA', N'MAROC', 1);

INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'810', N'RABAT', 1);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'780', N'CASABLANCA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'881', N'AAZANEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'010', N'AGADIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'224', N'AGHBALOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'1670', N'AGLOU PLAGE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'7870', N'AGOUDIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'19', N'AGUERD NTEZKE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'4880', N'AHDIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'576', N'AHFIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'4900', N'ARBAA DOUIRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'428', N'AZZABA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'170', N'EL JADIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'270', N'FES', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'450', N'MARRAKECH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'787', N'MOHAMMEDIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'640', N'TANGER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'519', N'ZAIO', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'011', N'BIOUGRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'012', N'AIT BAHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'013', N'BELFAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'014', N'IDA OUGNIDIF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'015', N'MASSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'016', N'TANALT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'017', N'AOURIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'018', N'LQLIAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'019', N'DRARGUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'020', N'DCHEIRA EL JIHADIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'021', N'INEZGANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'022', N'AIT MELLOUL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'023', N'IMOUZZER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'024', N'TAMRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'025', N'IRHERM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'026', N'AIT ABDALLAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'027', N'AMSKROUD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'028', N'OULAD TEIMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'029', N'ARGANA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'030', N'TEMSIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'031', N'EL GUERDANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'032', N'SIDI BIBI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'033', N'INCHADEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'034', N'AIT AMIRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'035', N'AIT MILK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'036', N'AQESRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'037', N'HILALA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'038', N'SIDI ABDALLAH EL BOUCHOUARI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'039', N'TARGUA NTOUCHKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'040', N'TAFRAOUTEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'041', N'TAROUDANNT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'042', N'AHMAR LAGLALCHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'043', N'AOULOUZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'044', N'FREIJA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'045', N'OULAD BERHIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'046', N'TAFINGOULT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'047', N'AIT IAAZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'048', N'EL KOUDIA EL BEIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'049', N'LARBAA DE BOUTAYEB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'050', N'AL HOCEIMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'051', N'BNI BOUFRAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'052', N'BNI GMIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'053', N'AIT YOUSSEF OU ALI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'054', N'ARBAA TAOURIRT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'055', N'BNI BOUAYACH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'056', N'BNI HADIFA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'057', N'IMZOUREN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'058', N'BNI ABDALLAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'059', N'ISSAGUEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'060', N'BNI BOUNSAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'061', N'TARGUIST', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'062', N'BNI AMMART', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'063', N'KETAMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'064', N'ROUADI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'065', N'SENADA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'066', N'KRIFATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'067', N'MOULAY AISSA BEN DRISS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'068', N'TIMOULILT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'069', N'TABIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'070', N'AZILAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'071', N'AIT M''HAMED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'072', N'TABANT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'073', N'ZAOUIAT AHANSAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'074', N'BZOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'075', N'AIT AATAB ( CERCLE DE BZOU )', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'076', N'TANANT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'077', N'BIN EL OUIDANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'078', N'BNI AYAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'079', N'FOUM JEMAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'080', N'OULED GNAOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'081', N'DEMNATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'082', N'TIZI N''ISLY', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'083', N'FOUM OUDI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'084', N'OUAOUIZEGHT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'085', N'AFOURAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'086', N'FOUM EL ANCEUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'087', N'TAGLEFT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'088', N'TILOUGGUITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'089', N'DIR EL KSIBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'090', N'BENI MELLAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'091', N'OULED M''BAREK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'092', N'OULED YAICH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'093', N'SIDI JABER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'094', N'DAR OULD ZIDOUH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'095', N'SOUK SEBT OULED NEMMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'096', N'EL KSIBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'097', N'AGHBALA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'098', N'TAGHZIRT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'099', N'ZAOUIAT CHEIKH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'100', N'OULED AYAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'101', N'FQUIH BEN SALAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'102', N'SIDI AISSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'103', N'BNI OUKIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'104', N'KASBA TADLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'105', N'KHALFIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'106', N'HAD BOUMOUSSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'107', N'OULED SAID L''OUED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'108', N'BRADIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'109', N'OULED ZMAM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'110', N'BENSLIMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'111', N'FDALATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'112', N'MELLILA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'113', N'SIDI MOHAMMED BEN RAHAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'114', N'OULAD HAMDANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'115', N'ZIAIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'116', N'EL MANSOURIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'117', N'SIDI ALI BEN HAMDOUCHE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'119', N'BNI CHEGDALE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'120', N'OUAOULA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'121', N'BOUZNIKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'122', N'BNI YAKHLEF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'123', N'SIDI MOUSSA BEN ALI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'124', N'SIDI YAHYA ZAER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'125', N'M''ZOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'126', N'HIADNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'127', N'TOUDGHA ESSOUFLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'128', N'AFRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'129', N'TERNATA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'130', N'BOUJDOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'135', N'GUELTAT ZEMMOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'136', N'OUED MALHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'138', N'GUIGOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'139', N'EL MERS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'140', N'BOULEMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'141', N'IMOUZZER MARMOUCHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'142', N'AIT EL MANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'143', N'SKOURA M''DAZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'144', N'MISSOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'145', N'KSABI MOULOUYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'146', N'OUTAT EL HAJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'147', N'OULAD ALI YOUSSEF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'148', N'FRITISSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'149', N'ENJIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'150', N'CHEFCHAOUEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'151', N'BAB BERRED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'152', N'BNI AHMED CHERQIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'153', N'JEBHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'154', N'BNI RZINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'155', N'BNI BOUZRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'156', N'BAB TAZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'157', N'BOU AHMED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'158', N'STEHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'159', N'BNI SMIH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'160', N'KALAAT BOUQORRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'161', N'KORIMATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'162', N'ASSIFANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'163', N'TALAMBOTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'164', N'LAAOUAMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'165', N'MOQRISSET', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'166', N'BRIKCHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'167', N'ZOUMI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'168', N'OUNNANA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'169', N'CHRAFAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'171', N'MY ABDELLAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'172', N'METTOUH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'173', N'SIDI ABED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'174', N'OULED GHANEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'175', N'SIDI BOUZID ARRAGRAGUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'176', N'AZEMMOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'177', N'LBIR JDID', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'178', N'CHTOUKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'179', N'SIDI BENNOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'180', N'OULED HCINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'181', N'BNI HILAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'182', N'LAAOUNATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'183', N'OULAD AMRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'184', N'SIDI SMAIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'185', N'OULED FREJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'186', N'ZEMAMRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'187', N'LOUALIDIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'188', N'LGHARBIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'189', N'SANIAT BERGUIG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'190', N'EL KELAA DES SRARHNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'191', N'ERRAFIAYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'192', N'OULAD AAMER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'193', N'ASSAHRIJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'194', N'LAATTAOUIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'195', N'DZOUZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'196', N'SIDI RAHHAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'197', N'SIDI BOU OTHMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'198', N'EDDACHRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'199', N'RAS AIN RHAMNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'200', N'EL AAMRIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'201', N'BEN GUERIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'202', N'OUARGUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'203', N'SIDI AISSA BEN SLIMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'204', N'SKHOUR REHAMNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'205', N'BOUCHANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'206', N'SIDI EL HATTAB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'207', N'TAMALLALT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'208', N'FRAITA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'209', N'OUAHAT SIDI BRAHIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'210', N'ERRACHIDIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'211', N'AOUFOUS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'212', N'BOUDNIB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'213', N'BNI M''HAMED-SIJELMASSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'214', N'ES-SFALAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'215', N'ASSOUL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'216', N'AIT HANI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'217', N'ER-RTEB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'218', N'ARFOUD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'219', N'ALNIF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'220', N'FERKLA EL OULIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'221', N'FEZNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'222', N'JORF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'223', N'GOULMIMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'225', N'MELAAB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'226', N'TINEJDAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'227', N'IMILCHIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'228', N'AMOUGUER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'229', N'GHERIS EL OULOUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'230', N'GHERIS ES-SOUFLI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'231', N'ER-RICH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'232', N'AIT IZDEG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'233', N'GOURRAMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'234', N'TAMEGROUTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'235', N'ER-RISSANI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'236', N'ET-TAOUS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'237', N'TADIGHOUST', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'238', N'N''KOB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'239', N'TAGHBALTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'240', N'ESSAOUIRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'241', N'AGUERD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'242', N'BIZDAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'243', N'TAFETACHTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'244', N'HAD DRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'245', N'ZAOUIAT BEN HMIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'246', N'EL HANCHANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'247', N'JDOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'248', N'TALMEST', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'249', N'OULED DLIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'250', N'LAMHARRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'251', N'TAMANAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'252', N'AIT DAOUD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'253', N'LAATAMNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'254', N'CHTAIBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'255', N'ASSIF EL MAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'256', N'SMIMOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'257', N'AYIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'258', N'OULAD ZARRAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'259', N'LOUNASDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'260', N'ES-SEMARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'261', N'EL OUATIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'262', N'JDIRIYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'264', N'AMGALA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'266', N'HAOUZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'268', N'TIFARITI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'271', N'AIN CHKEF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'272', N'AIN CHEGGAG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'273', N'DAYAT AOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'274', N'SIDI HARAZEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'275', N'AIN BOU ALI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'276', N'MOULAY YACOUB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'277', N'TAZOUTA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'278', N'AIN KANSRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'279', N'IGHZRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'280', N'EL MENZEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'281', N'SEFROU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'282', N'AIT SEBAA LAJROUF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'283', N'RAS TABOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'284', N'BENI YAZRHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'285', N'BIR TAM TAM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'286', N'BHALIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'287', N'ADREJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'288', N'IMOUZZER KANDAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'289', N'DAR EL HAMRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'290', N'DKHISSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'291', N'OULAD ZBAIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'292', N'OULAD MIMOUN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'293', N'SIDI ALI BOURAKBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'294', N'TIMEZGANA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'301', N'TIZTOUTINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'302', N'IHADDADENE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'303', N'TROUGOUT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'304', N'BENI BOUGHAFER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'310', N'FIGUIG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'311', N'AIN CHOUATER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'312', N'BOUARFA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'313', N'TENDRARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'314', N'TIOUGHZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'315', N'BNI TADJITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'316', N'BOUANANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'317', N'TIMOULAY', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'318', N'TALSINT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'319', N'TAGANTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'320', N'GUELMIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'321', N'ASRIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'322', N'LAQSABI TAGOUST', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'323', N'ASSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'324', N'ZAG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'325', N'BOUIZAKARNE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'326', N'IFRANE ATLAS SAGHIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'327', N'TAGHJIJT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'328', N'FASK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'329', N'AIN DORIJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'330', N'KENITRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'331', N'MOULAY BOUSSELHAM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'332', N'SIDI YAHYA EL GHARB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'333', N'HAD KOURT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'334', N'AIN DFALI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'335', N'KHNICHET', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'336', N'MECHRAA BEL KSIRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'337', N'DAR GUEDDARI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'338', N'MNASRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'339', N'N''ZALAT BNI AMAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'340', N'SIDI ALLAL TAZI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'341', N'OUEZZANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'342', N'ASJEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'343', N'SIDI BOUSBER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'344', N'SIDI REDOUANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'345', N'TEROUAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'346', N'SIDI KACEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'347', N'LAMJAARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'348', N'ZAGGOTA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'349', N'SIDI SLIMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'350', N'DAR BEL AMRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'351', N'BOUMAIZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'352', N'KCEIBYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'353', N'SOUK EL ARBAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'354', N'ARBAOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'355', N'KARIAT BEN AOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'356', N'LALLA MIMOUNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'357', N'SIDI BOUBKER EL HAJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'359', N'SOUK TLET EL GHARB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'360', N'KHEMISSET', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'361', N'AIN SBIT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'362', N'AIT IKKOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'363', N'AIT YADINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'364', N'SIDI ALLAL LAMSADDER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'365', N'OULMES', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'366', N'MAAZIZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'367', N'TIDDAS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'368', N'ROMMANI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'369', N'BRACHOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'370', N'SFASSIF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'371', N'LAGHOUALEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'372', N'SIDI BETTACHE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'373', N'EZZHILIGA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'374', N'TIFLET', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'375', N'SIDI ABDERRAZAK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'376', N'SIDI ALLAL EL BAHRAOUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'377', N'LEHRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'378', N'TIGHASSALINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'379', N'OUAOUMANA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'380', N'KHENIFRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'381', N'AGUELMOUS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'382', N'KAHF NSSAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'383', N'EL HAMMAM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'384', N'MOULAY BOUAZZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'385', N'EL KBAB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'386', N'AIT ISHAQ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'387', N'KERROUCHEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'388', N'M''RIRT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'389', N'ZAIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'390', N'HAD BOUHSSOUSSEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'391', N'MIDELT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'392', N'AMERSID', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'393', N'GUERS TIAALLALINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'394', N'SIDI AAYAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'395', N'BOUMIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'396', N'ITZER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'397', N'TOUNFITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'398', N'SEBT AIT RAHOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'399', N'SIDI LAMINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'400', N'KHOURIBGA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'401', N'BOUJNIBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'402', N'HATTANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'403', N'BIR MEZOUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'404', N'BNI BATAOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'405', N'BEJAAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'406', N'CHOUGRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'407', N'BNI ZRANTEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'408', N'BULANOUARE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'409', N'TACHRAFT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'410', N'LAGFAF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'411', N'OUED ZEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'412', N'BENI KHIRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'413', N'OULED YOUSSEF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'414', N'MSILA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'415', N'BNI SMIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'416', N'MAADNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'417', N'OULAD FENNANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'418', N'BRAKSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'419', N'TIZGANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'420', N'IFRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'421', N'BEN SMIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'422', N'HAJ KADDOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'423', N'SIDI ADDI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'424', N'TIGRIGRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'425', N'AZROU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'426', N'TIZGUITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'427', N'TIMAHDITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'429', N'M''SAADA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'430', N'LAAYOUNE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'431', N'BOUKRAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'432', N'DCHEIRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'433', N'EL MARSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'435', N'DAOURA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'436', N'EL HAGOUNIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'437', N'TARFAYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'438', N'AKHFENNIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'439', N'OUED IFRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'441', N'SIDI TAIBI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'442', N'MEHDYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'443', N'BEN MANSOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'444', N'SIDI AMEUR AL HADI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'445', N'NOUIRATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'446', N'LAMZOUDIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'447', N'BOUABOUT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'448', N'TASSOULTANTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'449', N'OULAD HASSOUNE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'451', N'TAMANSOURT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'452', N'AIT FASKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'453', N'LOUDAYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'454', N'AIT OURIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'455', N'AIT IMOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'456', N'ABADOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'457', N'GHMATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'458', N'KETTARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'459', N'TOUAMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'460', N'LALLA TAKARKOUST', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'461', N'AMIZMIZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'462', N'TALAT N''YAAQOUB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'463', N'TIZGUINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'464', N'NZALAT LAADAM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'465', N'CHICHAOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'466', N'FROUGA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'467', N'DOUIRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'468', N'SID L''MOKHTAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'469', N'AIT HADI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'470', N'MAJJAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'471', N'IMINTANOUTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'472', N'DEMSIRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'473', N'STI FADMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'474', N'MOULAY BRAHIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'475', N'TAHANNAOUT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'476', N'OURIKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'477', N'TAMESLOHTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'478', N'ASNI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'479', N'TIGHEDOUINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'480', N'MEKNES', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'481', N'BOUFAKRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'482', N'AIN JEMAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'483', N'OUISLANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'484', N'MOULAY DRISS ZERHOUN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'485', N'AIN LEUH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'486', N'M''HAYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'487', N'AIN KARMA- OUED ROMMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'488', N'AIN ORMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'489', N'AIT AYACH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'490', N'BOUCHFAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'491', N'EL HAJEB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'492', N'AIN TAOUJDATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'493', N'AGOURAI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'494', N'SABAA AIYOUN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'495', N'AIT BOUBIDMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'496', N'AIT YAAZEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'497', N'JAHJOUH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'498', N'AIT MAJDEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'499', N'HEL MERBAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'500', N'NADOR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'501', N'DRIOUCH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'502', N'AIN ZOHRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'503', N'DAR EL KEBDANI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'504', N'FARKHANA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'505', N'IAAZZANENE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'506', N'BNI BOUIFROUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'507', N'ZEGHANGHANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'508', N'BNI CHIKER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'509', N'BNI SIDEL JBEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'511', N'BNI ANSAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'512', N'SELOUANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'513', N'TAZAGHINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'514', N'SIDI BOUAFIF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'515', N'AL AAROUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'516', N'KOUROUNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'517', N'RAS KEBDANA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'518', N'RAS EL MA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'520', N'AREKMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'521', N'HASSI BERKANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'522', N'M''HAJER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'523', N'BEN TAIEB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'524', N'MIDAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'525', N'TEMSAMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'527', N'BOUDINAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'528', N'TAFERSIT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'529', N'AZLAF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'530', N'DAKHLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'531', N'AOUSSERD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'532', N'AGHOUINITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'533', N'TICHLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'534', N'ZOUG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'535', N'ALOUIDANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'536', N'BIR ANZARANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'537', N'GLEIBAT EL FOULA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'538', N'MIJIK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'539', N'OUM DREYGA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'540', N'TOUNDOUTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'541', N'TELOUET', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'542', N'BIR GANDOUZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'543', N'BOUZEROUAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'544', N'EL ARGOUB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'545', N'TIDLI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'546', N'TARMIGT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'547', N'KHOUZAMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'548', N'IZNAGUEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'549', N'GHASSATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'550', N'OUARZAZATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'551', N'AIT ZINEB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'552', N'IGHREM N''OUGDAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'553', N'SKOURA AHL EL OUST', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'554', N'AMERZGANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'555', N'BOUMALNE DADES', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'556', N'KALAAT M''GOUNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'557', N'IKNIOUEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'558', N'M''SEMRIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'559', N'TINGHIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'560', N'BNI ZOLI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'561', N'TALIOUINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'562', N'TAGHZOUTE N''AIT ATTA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'563', N'TAZNAKHT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'564', N'AIT OUALLAL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'565', N'ZAGORA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'566', N'AGDZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'567', N'M''HAMID EL GHIZLANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'568', N'TAGOUNITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'569', N'TAZARINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'570', N'OUJDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'571', N'BNI DRAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'572', N'SIDI YAHIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'573', N'TOUISSIT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'574', N'AHL ANGAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'575', N'BERKANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'577', N'AKLIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'578', N'AIN ERREGGADA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'579', N'SAIDIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'580', N'MADAGH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'581', N'TAFOUGHALT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'582', N'JERADA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'583', N'AIN BNI MATHAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'584', N'BSARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'585', N'TAOURIRT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'586', N'DEBDOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'587', N'EL AIOUN SIDI MELLOUK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'588', N'GUENFOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'589', N'SIDI BOUBKER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'590', N'SAFI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'591', N'EL GANTOUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'592', N'IGHOUD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'593', N'SEBT GZOULA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'594', N'EL GHIATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'595', N'BOUGUEDRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'596', N'JAMAAT SHAIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'597', N'NAGGA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'598', N'EL BEDDOUZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'599', N'HRARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'600', N'HARBIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'601', N'ECHEMMAIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'602', N'LABKHATI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'603', N'LAMAACHATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'604', N'MOUL EL BERGUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'605', N'SIDI AHMED ESSAYEH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'606', N'SIDI CHIKER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'607', N'YOUSSOUFIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'608', N'SIDI BOUMEHDI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'609', N'OULAD FARES', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'610', N'SETTAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'611', N'BNI KHLOUG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'612', N'DAR CHAFFAI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'613', N'OULAD BOUZIRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'614', N'OULAD SAID', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'615', N'BEN AHMED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'616', N'OULAD M''HAMED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'617', N'MACHRAA BEN ABBOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'618', N'RAS EL AIN CHAOUIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'619', N'SIDI HAJJAJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'620', N'LOULAD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'621', N'BERRECHID', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'622', N'EL GARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'623', N'OULAD ABBOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'624', N'DEROUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'625', N'SIDI RAHAL CHATAI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'626', N'EL BOROUJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'627', N'GUISSER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'628', N'BENI MESKINE GHARBIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'629', N'SOUALEM TRIFIYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'630', N'SIDI EL AIDI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'631', N'OULAD BEN DAOUD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'632', N'HAD SOUALEM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'633', N'MOUALINE EL OUED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'634', N'OULAD M''RAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'635', N'JOUAMAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'636', N'ALLYENE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'637', N'AYACHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'638', N'BNI FAGHLOUM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'639', N'MASMOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'641', N'AIN LAHSAN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'642', N'SEBT AZZINATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'643', N'ASSILAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'644', N'DAR CHAOUI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'645', N'HAD AL GHARBIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'646', N'SIDI LYAMANI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'647', N'KSAR SGHIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'648', N'GUEZNAIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'649', N'MALLOUSSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'650', N'TAN TAN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'651', N'RATBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'652', N'OUTABOUABANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'653', N'OULAD DAOUD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'654', N'ZRIZER', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'655', N'TAN TAN PLAGE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'656', N'KISSANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'657', N'KHLALFA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'658', N'GALAZ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'659', N'BOUCHABEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'660', N'TAOUNATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'661', N'AIN MEDIOUNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'662', N'BNI OULID', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'663', N'BOUHOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'664', N'THAR ES-SOUK', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'665', N'KARIA BA MOHAMED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'666', N'AIN LEGDAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'667', N'AIN MAATOUF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'668', N'RGHIOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'669', N'BOUADEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'670', N'TABOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'671', N'GHAFSAI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'672', N'OUARTZAGH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'673', N'TAFRANT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'674', N'OULAD TAYEB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'675', N'TISSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'676', N'TAMANARTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'677', N'AIN AICHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'678', N'BOUAROUSS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'679', N'TLITE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'680', N'TATA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'681', N'AKKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'682', N'FAM EL HISN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'683', N'ISSAFEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'684', N'TAGMOUT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'685', N'FOUM ZGUID', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'686', N'AIT OUABELLI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'687', N'TISSINT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'688', N'ALLOUGOUM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'689', N'ADIS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'690', N'TAZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'691', N'BAB MARZOUKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'692', N'BNI FRASSEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'693', N'BNI LENT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'694', N'MEKNASSA ACHARQIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'695', N'OUED AMLIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'696', N'AKNOUL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'697', N'AJDIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'698', N'BOURD', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'699', N'MAZGUITAM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'700', N'AIT SAGHROUCHEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'701', N'TIZI OUASLI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'702', N'BNI FTAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'703', N'GUERCIF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'704', N'BARKINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'705', N'HOUARA OULAD RAHO', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'706', N'LAMRIJA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'707', N'SAKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'708', N'TAIFA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'709', N'MATMATA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'710', N'TADDART', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'711', N'TAHLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'712', N'BOUZEMLANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'713', N'MAGHRAOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'714', N'RIBATE EL KHEIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'715', N'ZRARDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'716', N'TAINASTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'717', N'BAB EL MROUJ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'718', N'KAF EL GHAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'719', N'KASSITA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'720', N'TETOUAN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'721', N'BNI HASSANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'722', N'DAR BNI KARRICH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'723', N'AZLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'724', N'JBEL LAHBIB', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'725', N'ANJRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'726', N'FNIDEQ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'727', N'MARTIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'728', N'M''DIQ', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'729', N'OUED LAOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'730', N'ZOUADA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'731', N'KSAR EL KEBIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'732', N'LAOUAMRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'733', N'TATOFT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'734', N'SOUK TOLBA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'735', N'LARACHE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'736', N'RISSANA CHAMALIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'737', N'BNI GARFETT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'738', N'SAHEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'739', N'IGLI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'740', N'TIOUT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'741', N'ISSEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'742', N'ARAZANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'743', N'OUZIOUA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'744', N'IMSOUANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'745', N'OUNEINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'746', N'TIGHMI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'747', N'REGGADA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'748', N'OUIJJANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'749', N'TNINE AGLOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'750', N'TIZNIT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'751', N'ARBAA RASMOUKA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'752', N'AIT OUAFQA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'753', N'ARBAA SAHEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'754', N'ANZI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'755', N'ARBAA AIT AHMED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'756', N'IDA OU GOUGMAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'757', N'SIDI AHMED OU MOUSSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'758', N'BOUNAAMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'759', N'TASSRIRT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'760', N'SBOUYA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'761', N'SIDI IFNI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'762', N'MESTI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'763', N'MIRLEFT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'764', N'BOUTROUCH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'765', N'TAFRAOUT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'766', N'AFELLA IGHIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'767', N'IRIGH N''TAHALA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'768', N'LAGFIFAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'769', N'SIDI MOUSSA LHAMRI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'770', N'SIDI BORJA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'771', N'LAKHSAS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'772', N'AIT ERKHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'773', N'TIGHIRT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'774', N'BOUARG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'775', N'NAIMA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'776', N'BNI SIDEL LOUTA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'777', N'SIDI SLIMANE ECHCHARRAA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'778', N'CHOUIHIA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'779', N'MZOURA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'781', N'AIT KAMRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'782', N'IMRABTEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'783', N'AMTAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'784', N'DERDARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'785', N'TAMOROT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'786', N'SOUAKEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'788', N'ECH-CHALLALATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'789', N'MKANSA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'790', N'TAMEDIT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'791', N'BOUSKOURA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'792', N'DAR BOUAZZA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'793', N'MEDIOUNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'794', N'NOUACEUR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'795', N'OULAD SALAH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'796', N'AIN HARROUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'797', N'TIT MELLIL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'798', N'LAHRAOUYINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'799', N'LOUADAINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'800', N'OUTERBAT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'801', N'TAMEZMOUTE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'802', N'TINZOULINE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'803', N'M''SSICI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'804', N'OULAD YAHIA LAGRAIRE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'805', N'AIT EL FARSI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'806', N'OUAKLIM', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'807', N'SOUK LAKHMIS DADES', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'808', N'AMELLAGOU', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'809', N'ES-SIFA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'812', N'MESKALA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'813', N'EL MARBOUH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'814', N'RAS EL AIN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'815', N'SALE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'816', N'OUED JDIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'817', N'GALDAMANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'818', N'TISSAF', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'819', N'TOUARGA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'820', N'TAMESNA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'821', N'SKHIRATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'822', N'AIN EL AOUDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'823', N'SHOUL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'824', N'SIDI BOUKNADEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'825', N'TEMARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'826', N'HARHOURA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'827', N'AIN ATTIG', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'828', N'EL MENZEH', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'829', N'MERS EL KHEIR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'830', N'ASKAOUEN', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'831', N'TANOUGHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'832', N'AIT TAGUELLA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'833', N'LAGOUIRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'834', N'SIDI HAMMADI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'835', N'OULAD BOUGHADI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'836', N'IMLILI', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'837', N'FOUM EL OUED', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'838', N'EL GANZRA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'839', N'OUAZGUITA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'840', N'IJERMAOUAS', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'841', N'ZAOUIA SIDI TAHAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'843', N'LOUTA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'844', N'AIN BEIDA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'846', N'MOULAY BOUCHTA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'851', N'JORF EL MELHA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'852', N'AL HAOUAFATE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'853', N'SIDI AL KAMEL', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'854', N'ZIRARA', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'855', N'SIDI MOHAMED LAHMAR', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'856', N'TAZEMMOURT', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'857', N'TIZOUGHRANE', 0);
INSERT INTO city(COUNTRY_ID, code, NAME, RANK)
VALUES((SELECT id FROM country WHERE code = 'MA'), N'858', N'ASSAKI', 0);