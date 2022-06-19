USE ForLocals
GO

DROP TABLE Locals;
DROP TABLE Business;
DROP TABLE Review;

CREATE TABLE Locals (
        UserId INT NOT NULL PRIMARY KEY IDENTITY,
        [Name] VARCHAR(255) DEFAULT '',
        Email VARCHAR(100) Default '',
        ImgUrl VARCHAR(500) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/BlankProfileImg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9CbGFua1Byb2ZpbGVJbWcucG5nIiwiaWF0IjoxNjU1MTY0ODc5LCJleHAiOjE5NzA1MjQ4Nzl9.tFYCMfkFr2wU3a2by288dXBiVuIeDa7VLW_FO7DN2_U',
        Bio VARCHAR(255) DEFAULT 'Hello World',
        IsAdmin CHAR(1) DEFAULT 'N',
        FirebaseKey VARCHAR(255),
);

CREATE TABLE Business (
	    BusinessId INT NOT NULL PRIMARY KEY IDENTITY,
        StateControlNum VARCHAR(9) NOT NULL,
        BusinessName VARCHAR(255) NOT NULL,
        Phone VARCHAR(55) DEFAULT '',
        [Address] VARCHAR(255) NOT NULL,
        [Description] VARCHAR(5000) DEFAULT 'Hello World' NOT NULL,
        Keywords VARCHAR(1000) NOT NULL,
        Industry VARCHAR(255) NOT NULL,
        Logo VARCHAR(500) DEFAULT '',
        ImgURL VARCHAR(500) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/BusinessIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9CdXNpbmVzc0ljb24ucG5nIiwiaWF0IjoxNjU1MjQ3ODQyLCJleHAiOjE5NzA2MDc4NDJ9.aNICkDp-Px5nCOUZE_VbjxScRmsgZjx4peKc-7uT3Og',
        WebUrl VARCHAR(500) DEFAULT '',
        ReviewScore INT DEFAULT 0, 
        Verified CHAR(1) DEFAULT 'N' NOT NULL,
        OwnerKey VARCHAR(255) NOT NULL, 
);

CREATE TABLE Review (
        ReviewId INT NOT NULL PRIMARY KEY IDENTITY,
        ReviewTitle VARCHAR(100) NOT NULL,
        ReviewText VARCHAR(1000) NOT NULL,
        ImgUrl VARCHAR(500) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ReviewIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SZXZpZXdJY29uLnBuZyIsImlhdCI6MTY1NTU1ODA5NCwiZXhwIjoxOTcwOTE4MDk0fQ.phspICuNYjbQisR_WkhL9PfFikqgDCBhMmXlAt4_HQc',
        Score INTEGER NOT NULL,
        UserId INT NOT NULL,
        BusinessId INT NOT NULL,
);

-- Mock User Data
INSERT INTO Locals ([Name], Email, Bio, IsAdmin, FirebaseKey) VALUES ('Derek B', 'dbaylor25@gmail.com', 'Im the admin. Welcome to the site!','Y', 'Js0JmwyFZjgqbqrMnLavrsUB0B32');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('John Smith', 'john@forlocals.com','I am the owner of Pick Tennessee!','3BmdIm3F9GZmm0UBnH2ADGNljhu2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Kix Brooks', 'kix@forlocals.com','I am the owner of Arrington Vineyards!', '7vUgp5uOGoQYIAcqQlUMx1E6RbC2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Karen Hayes', 'karen@forlocals.com','I am the owner of Parnassus Books!', 'HRQXSE97G5N1KrvyTEjkkdDbv3G3');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Doug', 'doug@forlocals.com','I am the owner of Gabbys Bugers!', 'WVsOfVUcQVXoCHs0TXBJMthdbdV2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Jeremiah Steinhauer', 'jeremiah@forlocals.com','I am the owner of Pheonix Massage!', 'u8aMHDzCyAXb9G9xl81EEPbk3sC2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Ron', 'ron@forlocals.com','I am the owner of The Game Keep!' ,'72qLtEPpmSP0TRdVX6GTwqU29zl2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Carol Hagen', 'carol@forlocals.com','I am the owner of Queen Bee!', 'ZKBIsMcdJmPNyGrnoHm1HCdtexs1');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('David Mitchell', 'david@forlocals.com','I am the owner of Mitchell Delicatessen!', 'beLGloSSUwVqOxna63LxKWIafGU2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Revi Shetkar', 'revi@forlocals.com','I am the owner of Woodlands!', '8Rb7yIs2WdXZmwCocX9no9CpyLA2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Nan Nelson', 'nan@forlocals.com','I am the owner of the Loft Salon!' ,'pVLgX34GJVam68za2qQt0UI4p8D2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Austin Reese', 'austin@forlocals.com','I am the owner of Corsair Distillery!' ,'tDF74APvazWAbPfa8EY2OnXGYur1');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Mike', 'mike@forlocals.com','I am the owner of Mikes Ice Cream & Coffee Bar!', 'x2zUvLuTZ5Vm7MSDOckVSVJj1bu2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Joel Larabell', 'joel@forlocals.com','I am the owner of High Garden Tea!', 'aaIrLfDUbXeXMGEtjblOkZS309x1');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Gunner', 'gunner@forlocals.com','I am the owner of Gunners Glass Recycling!' ,'gr5YuqIyLReth8sq6il2CioUWQj1');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Brandi Soda', 'brandi@forlocals.com','I am the owner of The Filling Station!', 'R4oqyyaenYShvGDZukCUnra0rMY2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Edward Rice', 'edward@forlocals.com','I am the owner of Rices County Hams!', 'WxeV0OAvM8aCpc8TDzZBalUF1NZ2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Ed', 'ed@forlocals.com','I am the owner of 8th & Roast!', 'ejcmiPhpcsaxqrKg7yFtXby93iW2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Barry Burnette', 'barry@forlocals.com','I am the owner of The Produce Place!', 'NFX2ejnX65eWInWMBrf9X81wRyV2');
INSERT INTO Locals ([Name], Email, Bio, FirebaseKey) VALUES ('Meg Raj', 'meg@forlocals.com','I am the owner of Recycle Nash!', 'F2FTyqZgWRe9N4phzGnQHpubVuT2');

-- Mock Business Data
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey) VALUES ('000607957', 'Pick Tennessee Conference','6290 McDaniel Rd. College Grove, TN 37046', 'Agriculture, Farming', 'Agriculture', 'Y', '3BmdIm3F9GZmm0UBnH2ADGNljhu2');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000485847', 'Arrington Vineyards','6211 Patton Rd Arrington, TN 37014', 'Winery', 'Food & Beverage', 'Y', '7vUgp5uOGoQYIAcqQlUMx1E6RbC2','https://arringtonvineyards.com/');

INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry, Verified, OwnerKey, WebUrl, imgUrl, Logo, [Description], Phone) 
VALUES 
('000664303', 
'Parnassus Books',
'3900 Hillsboro Pike Nashville, TN 37215', 
'Book, Authors, Book Store, Books, Read, Reading', 
'Retail', 
'Y', 
'HRQXSE97G5N1KrvyTEjkkdDbv3G3',
'https://www.parnassusbooks.net/',
'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ParnassuesBooks.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9QYXJuYXNzdWVzQm9va3MucG5nIiwiaWF0IjoxNjU1NTU4MjQwLCJleHAiOjE5NzA5MTgyNDB9.Vz_bpmraPsKJ16sglqijbyggmk8MPp5jT-LZxf5WprI',
'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ParnassusLogo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9QYXJuYXNzdXNMb2dvLnBuZyIsImlhdCI6MTY1NTU1ODIyNywiZXhwIjoxOTcwOTE4MjI3fQ.DaXulfs2gRasbO7oO9zyH2Xd-Y2F4LCSkKQVFgE2ypg',
'Parnassus Books is the independent bookstore for independent people located in Nashville, Tennessee. Our shop has been co-owned by novelist Ann Patchett and her business partner, Karen Hayes, since it opened in 2011. Parnassus stocks an extensive and exciting selection of books including fiction, non-fiction, children’s, local interests, and the arts. The store also boasts an extensive local author section.',
'615-953-2243'
);

INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000342696', 'Gabbys Burgers & Fries','493 Humphreys St Nashville, TN 37203', 'Hamburger, French Fries, American', 'Food & Beverage', 'Y', 'WVsOfVUcQVXoCHs0TXBJMthdbdV2', 'https://www.gabbysburgersandfries.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES('100000004', 'Phoenix Massage Therapy','106 Misson Ct STE 801 Franklin, TN 37067', 'Massage', 'Health & Wellness', 'Y', 'u8aMHDzCyAXb9G9xl81EEPbk3sC2', 'https://phoenixlmt.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('001146585', 'The Game Keepe','3952 Lebanon Pike Hermitage, TN 37076', 'Comics, Trading Card, Books, Board Games', 'Books', 'Y', '72qLtEPpmSP0TRdVX6GTwqU29zl2', 'https://www.facebook.com/thegamekeep/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES('000000003', 'Queen Bee Pollinators','7680 Buffal Rd Nashville, TN 37221', 'Agriculture, Honey, Organic', 'Food & Beverage', 'Y', 'ZKBIsMcdJmPNyGrnoHm1HCdtexs1', 'https://queenbeepollinators.com/index.html');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000564177', 'Mitchell Delicatessen','1306 McGovock Pike Nashville, TN 37216', 'Deli, Resturant', 'Food & Beverage', 'Y', 'beLGloSSUwVqOxna63LxKWIafGU2', 'https://mitchelldeli.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000913260', 'Woodlands','3415 West End Ave Nashville, TN 37203 ', 'Indian, Vegetarian, Resturant', 'Food & Beverage', 'Y', '8Rb7yIs2WdXZmwCocX9no9CpyLA2', 'https://woodlandstennessee.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000000002', 'Loft Salon','1106 16th Ave S Nashville, TN 37212 ', 'AgrSalon, Hairstylisti', 'Beauty', 'Y', 'pVLgX34GJVam68za2qQt0UI4p8D2', 'https://www.facebook.com/The-Loft-Salon-Nashville-167583026628630/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000568585', 'Corsair Distillery','1200 Clinton St #110 Nashville, TN 37203 ', 'Distillery', 'Food & Beverage', 'Y', 'tDF74APvazWAbPfa8EY2OnXGYur1', 'https://www.corsairdistillery.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000571065', 'Mikes Ice Cream & Coffee Bar','129 2nd Ave N Nashville, TN 37201 ', 'Ice Cream, Cafe, Coffee', 'Food & Beverage', 'Y', 'x2zUvLuTZ5Vm7MSDOckVSVJj1bu2', 'https://mikesicecream.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('001140133', 'High Garden Tea','1826 New Hope Rd Joelton, TN 37080', 'Tea, Shop', 'Food & Beverage', 'Y', 'aaIrLfDUbXeXMGEtjblOkZS309x1', 'https://www.highgardentea.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000628987', 'Gunners Glass Recycling','2336 Smith Springs Rd Nashville, TN 37217 ', 'Recycling, Glass', 'Sanitation', 'Y', 'gr5YuqIyLReth8sq6il2CioUWQj1', 'http://www.gunnersrecycling.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000693103', 'The Filling Station','1118 Halcyon Ave Nashville, TN 37204 ', 'Beer', 'Food & Beverage', 'Y', 'R4oqyyaenYShvGDZukCUnra0rMY2', 'https://brewstogo.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000000001', 'Rices County Hams','12217 Lebanon Rd Mt. Juliet, TN 37122 ', 'Ham, Butcher, Deli, Smokehouse', 'Food & Beverage', 'Y', 'WxeV0OAvM8aCpc8TDzZBalUF1NZ2', 'https://www.ricescountryhams.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000930352', '8th & Roast','2108A 8th Ave S Nashville, TN 37204 ', 'Coffe, Wholesale, Cafe', 'Food & Beverage', 'Y', 'ejcmiPhpcsaxqrKg7yFtXby93iW2', 'https://www.8thandroast.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000253436', 'The Produce Place','4000 Murphy Rd Nashville, TN 37209 ', 'Produce, Groceries, Market', 'Food & Beverage', 'Y', 'NFX2ejnX65eWInWMBrf9X81wRyV2', 'https://produceplace.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000205000', 'Recycle Nash','5025 Hillsboro #171 Rd Nashville, TN 37215 ', 'Recycling, Glass, Pickup', 'Sanitation', 'Y', 'F2FTyqZgWRe9N4phzGnQHpubVuT2', 'http://www.recyclenash.com/home.html')
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, OwnerKey, WebUrl) VALUES ('000000005', 'For Locals','123 ABC Ave Nashville, TN 37215 ', 'Locals, Web, Internet Search', 'Tech', 'Y', 'Js0JmwyFZjgqbqrMnLavrsUB0B32', 'http://www.for-locals.com/')

-- Mock Review Data
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
