USE ForLocals
GO

DROP TABLE Review;

CREATE TABLE Review (
        ReviewId INT NOT NULL PRIMARY KEY IDENTITY,
        ReviewTitle VARCHAR(100) NOT NULL,
        ReviewText VARCHAR(1000) NOT NULL,
        ImgUrl VARCHAR(500) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ReviewIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SZXZpZXdJY29uLnBuZyIsImlhdCI6MTY1NTU1ODA5NCwiZXhwIjoxOTcwOTE4MDk0fQ.phspICuNYjbQisR_WkhL9PfFikqgDCBhMmXlAt4_HQc',
        Score INTEGER NOT NULL,
        UserId INT NOT NULL,
        BusinessId INT NOT NULL,
);

INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Business', 'This is a great business!', 5, 1, 1);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Love the People', 'I love shopping here. Great people!', 5, 1, 6);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Service', 'They treat me great', 5, 1, 20);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('I scream for icecream', 'Best Ice Cream in town!', 5, 3, 12);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Food', 'Id eat here any day!', 5, 7, 4);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('They get busy.', 'Great food, long line!', 4, 6, 4);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Business', 'This is a great business!', 4, 3, 19);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Business', 'This is a great business!', 4, 2, 1);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Meh', 'I kind of like it.', 3, 3, 1);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Cold Food', 'My sandwhich was cold.', 4, 7, 17);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Business', 'This is a great business!', 5, 2, 8);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Great Business', 'This is a great business!', 5, 6, 8);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('Love them meat!', 'They have the meats!', 5, 10, 9);
INSERT INTO Review (ReviewTitle, ReviewText, Score, UserId, BusinessId) VALUES ('My Favorite Shop!', 'I shop here every week.', 5, 11, 9);