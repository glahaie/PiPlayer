CREATE TABLE RADIO(
	ID	INT	PRIMARY KEY	NOT NULL,
	NAME	TEXT	NOT NULL,
	URL		TEXT	NOT NULL,
	LANGUAGE	TEXT,
	TYPE	TEXT,
	TIMES_PLAYED	INT
);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(1, "Radio-Canada Première", "http://2QMTL0.akacast.akamaistream.net:80/7/953/177387/v1/rc.akacast.akamaistream.net/2QMTL0", "FR", "TALK", 0);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(2, "Radio-Canada Espace Musique", "http://7qmtl0.akacast.akamaistream.net/7/445/177407/v1/rc.akacast.akamaistream.net/7QMTL0", "FR", "MUSIC", 0);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(3, "RDI", "http://RDIRADIO.akacast.akamaistream.net:80/7/501/177423/v1/rc.akacast.akamaistream.net/RDIRADIO", "FR", "NEWS", 0);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(4, "CBC Radio One", "http://cbc_r1_mtl.akacast.akamaistream.net/7/35/451661/v1/rc.akacast.akamaistream.net/cbc_r1_mtl", "ENG", "TALK", 0);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(5, "CBC Radio Two", "http://cbc_r2_tor.akacast.akamaistream.net/7/364/451661/v1/rc.akacast.akamaistream.net/cbc_r2_tor", "ENG", "MUSIC", 0);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(6, "Radio Énergie", "http://17493.live.streamtheworld.com/CKMFFMAAC.aac?tdsdk=js-2.9&pname=TDSdk&pversion=2.9&banners=none&sbmid=0f565ef9-2ab6-4ec1-fe87-b9b13a5da706", "FR", "MUSIC", 0);

INSERT INTO RADIO(ID, NAME, URL, LANGUAGE, TYPE, TIMES_PLAYED)
VALUES(7, "CISM", "http://stream03.ustream.ca/cism128.mp3", "FR", "MUSIC", 0);