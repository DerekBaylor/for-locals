USE ForLocals
GO

DROP TABLE IF EXISTS Locals;
DROP TABLE IF EXISTS Business;
DROP TABLE IF EXISTS Review;

CREATE TABLE Locals (
        UserId INT NOT NULL PRIMARY KEY IDENTITY,
        [Name] VARCHAR(255),
        ImgUrl VARCHAR(500) DEFAULT 'https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/BlankProfileImage.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQmxhbmtQcm9maWxlSW1hZ2UucG5nIiwiaWF0IjoxNjUzNDQyNzUxLCJleHAiOjE5Njg4MDI3NTF9.aXoYRONxtL6QujRWGV7fweD34R7x-tnW1CIbz78I3a0' NOT NULL,
        Bio VARCHAR(255) DEFAULT 'Hello World' NOT NULL,
        IsAdmin CHAR(1) DEFAULT 'N' NOT NULL,
        FirebaseKey VARCHAR(255) DEFAULT 'MockFBaseKey' NOT NULL,
);

CREATE TABLE Business (
	    BusinessId INT NOT NULL PRIMARY KEY IDENTITY,
        StateControlNum VARCHAR(9) NOT NULL,
        BusinessName VARCHAR(255) NOT NULL,
        Phone VARCHAR(55),
        [Address] VARCHAR(255) NOT NULL,
        [Description] VARCHAR(255) DEFAULT 'Hello World' NOT NULL,
        Keywords VARCHAR(255) NOT NULL,
        Industry VARCHAR(255) NOT NULL,
        Logo VARCHAR(255),
        ImgURL VARCHAR(255),
        WebUrl VARCHAR(255),
        ReviewScore INT(1), 
        Verified CHAR(1) DEFAULT 'N' NOT NULL,
        UserId INT NOT NULL, 
);

CREATE TABLE Review (
        ReviewId INT NOT NULL PRIMARY KEY IDENTITY,
        ReviewText VARCHAR(255) NOT NULL,
        ImgUrl VARCHAR,
        Score INTEGER NOT NULL,
        UserId INT NOT NULL,
        BusinessId INT NOT NULL,
);

-- Mock User Data
INSERT INTO Locals ([Name], Bio, IsAdmin) VALUES ('Derek B', 'Im the admin. Welcome to the site!','Y');
INSERT INTO Locals ([Name], Bio) VALUES ('John Smith', 'I am the owner of Pick Tennessee!');
INSERT INTO Locals ([Name], Bio) VALUES ('Kix Brooks', 'I am the owner of Arrington Vineyards!');
INSERT INTO Locals ([Name], Bio) VALUES ('Karen Hayes', 'I am the owner of Parnassus Books!');
INSERT INTO Locals ([Name], Bio) VALUES ('Doug', 'I am the owner of Gabbys Bugers!');
INSERT INTO Locals ([Name], Bio) VALUES ('Jeremiah Steinhauer', 'I am the owner of Pheonix Massage!');
INSERT INTO Locals ([Name], Bio) VALUES ('Ron', 'I am the owner of The Game Keep!');
INSERT INTO Locals ([Name], Bio) VALUES ('Carol Hagen', 'I am the owner of Queen Bee!');
INSERT INTO Locals ([Name], Bio) VALUES ('David Mitchell', 'I am the owner of Mitchell Delicatessen!');
INSERT INTO Locals ([Name], Bio) VALUES ('Revi Shetkar', 'I am the owner of Woodlands!');
INSERT INTO Locals ([Name], Bio) VALUES ('Nan Nelson', 'I am the owner of the Loft Salon!');
INSERT INTO Locals ([Name], Bio) VALUES ('Austin Reese', 'I am the owner of Corsair Distillery!');
INSERT INTO Locals ([Name], Bio) VALUES ('Mike', 'I am the owner of Mikes Ice Cream & Coffee Bar!');
INSERT INTO Locals ([Name], Bio) VALUES ('Joel Larabell', 'I am the owner of High Garden Tea!');
INSERT INTO Locals ([Name], Bio) VALUES ('Gunner', 'I am the owner of Gunners Glass Recycling!');
INSERT INTO Locals ([Name], Bio) VALUES ('Brandi Soda', 'I am the owner of The Filling Station!');
INSERT INTO Locals ([Name], Bio) VALUES ('Edward Rice', 'I am the owner of Rices County Hams!');
INSERT INTO Locals ([Name], Bio) VALUES ('Ed', 'I am the owner of 8th & Roast!');
INSERT INTO Locals ([Name], Bio) VALUES ('Barry Burnette', 'I am the owner of The Produce Place!');
INSERT INTO Locals ([Name], Bio) VALUES ('Meg Raj', 'I am the owner of Recycle Nash!');

-- Mock Business Data
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId) VALUES ('000607957', 'Pick Tennessee Conference','6290 McDaniel Rd. College Grove, TN 37046', 'Agriculture, Farming', 'Agriculture', 'Y', 2);
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000485847', 'Arrington Vineyards','6211 Patton Rd Arrington, TN 37014', 'Winery', 'Food & Beverage', 'Y', 3,'https://arringtonvineyards.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000664303', 'Parnassus Books','3900 Hillsboro Pike Nashville, TN 37215', 'Book, Authors', 'Books', 'Y', 4,'https://www.parnassusbooks.net/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000342696', 'Gabbys Burgers & Fries','493 Humphreys St Nashville, TN 37203', 'Hamburger, French Fries, American', 'Food & Beverage', 'Y', 5, 'https://www.gabbysburgersandfries.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES('100000004', 'Phoenix Massage Therapy','106 Misson Ct STE 801 Franklin, TN 37067', 'Massage', 'Health & Wellness', 'Y', 6, 'https://phoenixlmt.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('001146585', 'The Game Keepe','3952 Lebanon Pike Hermitage, TN 37076', 'Comics, Trading Card, Books, Board Games', 'Books', 'Y', 7, 'https://www.facebook.com/thegamekeep/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES('000000003', 'Queen Bee Pollinators','7680 Buffal Rd Nashville, TN 37221', 'Agriculture, Honey, Organic', 'Food & Beverage', 'Y', 8, 'https://queenbeepollinators.com/index.html');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000564177', 'Mitchell Delicatessen','1306 McGovock Pike Nashville, TN 37216', 'Deli, Resturant', 'Food & Beverage', 'Y', 9, 'https://mitchelldeli.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000913260', 'Woodlands','3415 West End Ave Nashville, TN 37203 ', 'Indian, Vegetarian, Resturant', 'Food & Beverage', 'Y', 10, 'https://woodlandstennessee.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000000002', 'Loft Salon','1106 16th Ave S Nashville, TN 37212 ', 'AgrSalon, Hairstylisti', 'Beauty', 'Y', 11, 'https://www.facebook.com/The-Loft-Salon-Nashville-167583026628630/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000568585', 'Corsair Distillery','1200 Clinton St #110 Nashville, TN 37203 ', 'Distillery', 'Food & Beverage', 'Y', 12, 'https://www.corsairdistillery.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000571065', 'Mikes Ice Cream & Coffee Bar','129 2nd Ave N Nashville, TN 37201 ', 'Ice Cream, Cafe, Coffee', 'Food & Beverage', 'Y', 13, 'https://mikesicecream.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('001140133', 'High Garden Tea','1826 New Hope Rd Joelton, TN 37080', 'Tea, Shop', 'Food & Beverage', 'Y', 14, 'https://www.highgardentea.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000628987', 'Gunners Glass Recycling','2336 Smith Springs Rd Nashville, TN 37217 ', 'Recycling, Glass', 'Sanitation', 'Y', 15, 'http://www.gunnersrecycling.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000693103', 'The Filling Station','1118 Halcyon Ave Nashville, TN 37204 ', 'Beer', 'Food & Beverage', 'Y', 16, 'https://brewstogo.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000000001', 'Rices County Hams','12217 Lebanon Rd Mt. Juliet, TN 37122 ', 'Ham, Butcher, Deli, Smokehouse', 'Food & Beverage', 'Y', 17, 'https://www.ricescountryhams.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000930352', '8th & Roast','2108A 8th Ave S Nashville, TN 37204 ', 'Coffe, Wholesale, Cafe', 'Food & Beverage', 'Y', 18, 'https://www.8thandroast.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000253436', 'The Produce Place','4000 Murphy Rd Nashville, TN 37209 ', 'Produce, Groceries, Market', 'Food & Beverage', 'Y', 19, 'https://produceplace.com/');
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId, WebUrl) VALUES ('000205000', 'Recycle Nash','5025 Hillsboro #171 Rd Nashville, TN 37215 ', 'Recycling, Glass, Pickup', 'Sanitation', 'Y', 20, 'http://www.recyclenash.com/home.html');

-- Mock Review Data
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('This is a great business!', '5', 1, 1);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('I love shopping here. Great people!', '5', 1, 6);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('They treat me great', '5', 1, 20);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('Best Ice Cream in town!', '5', 3, 12);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('Id eat here any day!', '5', 7, 4);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('Great food, long line!', '4', 6, 4);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('This is a great business!', '4', 3, 19);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('This is a great business!', '4', 2, 1);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('I kind of like it.', '3', 3, 1);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('My sandwhich was cold.', '4', 7, 17);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('This is a great business!', '5', 2, 8);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('This is a great business!', '5', 6, 8);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('They have meats!', '5', 10, 9);
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('I shop here every week.', '5', 11, 9);
