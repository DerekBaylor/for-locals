﻿USE ForLocals
GO

DROP TABLE Locals;
DROP TABLE Business;
DROP TABLE Review;

CREATE TABLE Locals (
        UserId INT NOT NULL PRIMARY KEY IDENTITY,
        [Name] VARCHAR(255) DEFAULT '',
        Email VARCHAR(100) Default '',
        ImgUrl VARCHAR(2000) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/BlankProfileImg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9CbGFua1Byb2ZpbGVJbWcucG5nIiwiaWF0IjoxNjU1MTY0ODc5LCJleHAiOjE5NzA1MjQ4Nzl9.tFYCMfkFr2wU3a2by288dXBiVuIeDa7VLW_FO7DN2_U',
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
        ImgURL VARCHAR(2000) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/BusinessIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9CdXNpbmVzc0ljb24ucG5nIiwiaWF0IjoxNjU1MjQ3ODQyLCJleHAiOjE5NzA2MDc4NDJ9.aNICkDp-Px5nCOUZE_VbjxScRmsgZjx4peKc-7uT3Og',
        WebUrl VARCHAR(500) DEFAULT '',
        ReviewScore INT DEFAULT 0, 
        Verified CHAR(1) DEFAULT 'N' NOT NULL,
        OwnerKey VARCHAR(255) NOT NULL, 
);

CREATE TABLE Review (
        ReviewId INT NOT NULL PRIMARY KEY IDENTITY,
        ReviewTitle VARCHAR(100) NOT NULL,
        ReviewText VARCHAR(1000) NOT NULL,
        ImgUrl VARCHAR(2000) DEFAULT 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ReviewIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SZXZpZXdJY29uLnBuZyIsImlhdCI6MTY1NTU1ODA5NCwiZXhwIjoxOTcwOTE4MDk0fQ.phspICuNYjbQisR_WkhL9PfFikqgDCBhMmXlAt4_HQc',
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
INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey)
VALUES ('000607957', 'Pick Tennessee Conference','615-445-9354', '6290 McDaniel Rd. College Grove, TN 37046','The new Pick TN Conference gives Tennessee farmers their best opportunity to explore the latest information and access the best resources.', 'Agriculture, Farming, Conference, Event, Trade Show', 'Agriculture','https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/PickTNConference.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9QaWNrVE5Db25mZXJlbmNlLnBuZyIsImlhdCI6MTY1NTc2MTgzNSwiZXhwIjoxOTcxMTIxODM1fQ.X2jikHA6p9Nhg8mkSRJfJSB8PyjeY31D8ebqLnY5ej4','https://www.picktnconference.com/', 'Y', '3BmdIm3F9GZmm0UBnH2ADGNljhu2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('000485847', 'Arrington Vineyards','615-395-0102', '6211 Patton Rd Arrington, TN 37014', 'Arrington Vineyards provides a wine country experience complete with award-winning wines, wine tasting flights, Food Truck Fridays, and “Music in the Vines” – free live music on the weekends – all set among the picturesque rolling countryside of Williamson County. This Franklin winery has slowly turned into a Southeast sensation. Owned by country music artist Kix Brooks, winemaker Kip Summers, and entrepreneur John Russell, Arrington Vineyards has indeed become Franklin’s wine country.', 'Winery, Venue, Vineyard, Food, Restaruant, Live Entertainment', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ArringtonVineyards.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9BcnJpbmd0b25WaW5leWFyZHMuanBnIiwiaWF0IjoxNjU1NzYyNTAzLCJleHAiOjE5NzExMjI1MDN9.ox9rPqbsDwzMQQGUZ3mbeIxiCKfqlsj_r_YGivMpXeU', 'https://arringtonvineyards.com/', 'Y', '7vUgp5uOGoQYIAcqQlUMx1E6RbC2' );

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey)
VALUES ('000664303','Parnassus Books','615-953-2243', '3900 Hillsboro Pike Nashville, TN 37215', 'Parnassus Books is the independent bookstore for independent people located in Nashville, Tennessee. Our shop has been co-owned by novelist Ann Patchett and her business partner, Karen Hayes, since it opened in 2011. Parnassus stocks an extensive and exciting selection of books including fiction, non-fiction, children’s, local interests, and the arts. The store also boasts an extensive local author section.','Book, Authors, Book Store, Books, Read, Reading', 'Retail', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ParnassuesBooks.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9QYXJuYXNzdWVzQm9va3MucG5nIiwiaWF0IjoxNjU1NTU4MjQwLCJleHAiOjE5NzA5MTgyNDB9.Vz_bpmraPsKJ16sglqijbyggmk8MPp5jT-LZxf5WprI', 'https://www.parnassusbooks.net/', 'Y', 'HRQXSE97G5N1KrvyTEjkkdDbv3G3');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
Values ('342696', 'Gabbys Burgers & Fries','615-733-3119', '493 Humphreys St Nashville, TN 37203', 'We serve great burgers. You create it. Add eggs, peppers, mushrooms, cheeses, bacon or anything else we can think of (including peanut butter) And the sweet potato fries are amazing. People literally drive for an HOUR just for the fries. And over it all is a fun atmosphere of good music and laughing people. Just a fun place with great food. Worth talking about!', 'Hamburger, French Fries, American', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/GabbysBurgers.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9HYWJieXNCdXJnZXJzLmpwZyIsImlhdCI6MTY1NTc2MjkwNiwiZXhwIjoxOTcxMTIyOTA2fQ.fsHBVRHqbUQuhBMSkFSkW6XIolB0hK0MlfDKGsDSMDQ', 'https://www.gabbysburgersandfries.com/', 'Y', 'WVsOfVUcQVXoCHs0TXBJMthdbdV2' );

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('100000004', 'Phoenix Massage Therapy', '615-948-9581', '106 Misson Ct STE 801 Franklin, TN 37067', 'Phoenix Massage Therapy is Owned by Jeremiah Steinhauer. Jeremiah has been serving the greater Nashville/Franklin area for more than 12 years. Jeremiah first obtained his massage license in August of 2006 and has been practicing the healing art of massage in Franklin and around Nashville. Jeremiah’s main focus while giving a deep tissue massage is to “Alleviate chronic pain issues and to help bring the body back to it’s natural state of harmony. These issues are either caused by injury, pure posture or continuous work related tasks.” Through his extensive experience, Jeremiah has realized that the mind needs recovery just as the body needs physical attention and relief from pain. He believes that through his de-stressing Swedish massage, your emotional state of mind will find a place and time to relax, renew, and rejuvenate.', 'Massage, Therapy, ', 'Health & Wellness', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/PhoenixMassage.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9QaG9lbml4TWFzc2FnZS5wbmciLCJpYXQiOjE2NTU3NjMzNDIsImV4cCI6MTk3MTEyMzM0Mn0.AVMgjMYujCRvvWjiU_5AjtynkboFyRZ8SvY3KcAD5bQ', 'https://phoenixlmt.com/', 'Y', 'u8aMHDzCyAXb9G9xl81EEPbk3sC2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('1146585', 'The Game Keep', '615-883-4800', '3952 Lebanon Pike Hermitage, TN 37076', 'The Game Keep is a small, family owned business dedicated to supplying the Greater Nashville area with board games, RPGs, and hobby supplies. Your one-stop geek shop! We have got boardgames, miniatures, role playing games, cards of all sorts, and all the gaming accessories you can eat!', 'Comics, Trading Card, Books, Board Games, Collectibles', 'Retail', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/TheGameKeep.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9UaGVHYW1lS2VlcC5qcGciLCJpYXQiOjE2NTU3NjM1MjIsImV4cCI6MTk3MTEyMzUyMn0.i8M9D42mKMtzuCSsaQRu8TzIIzKAWkeVgCDiire02bc', 'https://www.facebook.com/thegamekeep/', 'Y', '72qLtEPpmSP0TRdVX6GTwqU29zl2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('100000003', 'Queen Bee Pollinators', '615-828-8405', '7680 Buffal Rd Nashville, TN 37221', 'Carol Hagen is the proprietor of Tennessee Artisan Honey, purveyor of Artisan Creamed Honey and the Nashville area distributor for Strange Honey Farm. A lifelong advocate of sustainability and natural farming, Carol strongly believes happy, healthy bees produce the best honey. Tennessee Artisan Honey is pleased to deliver pure, raw honey and pollen from naturally managed mountain bee hives. STRANGE HONEY FARM harvests three distinct types of honey: Dark Wildflower, Sourwood and Tennessee Mountain. Our honey is lightly filtered so the naturally occurring pollen remains a significant feature of Tennessee Artisan Honey.', 'Agriculture, Honey, Organic, Artisan, Bee, Bees, ', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/QueenBee.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9RdWVlbkJlZS5qcGciLCJpYXQiOjE2NTU3NjM2NzMsImV4cCI6MTk3MTEyMzY3M30.n9a6jZYD3cAdAIqZJP1N1uUhJ9gerjw_vCBw7NrMgxw', 'https://queenbeepollinators.com/index.html', 'Y', 'ZKBIsMcdJmPNyGrnoHm1HCdtexs1');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('564177', 'Mitchell Delicatessen', '615-262-9862', '1306 McGovock Pike Nashville, TN 37216', 'Mitchell Delicatessen first opened its doors in 2008. The idea was simple: provide East Nashville with a full service delicatessen that only uses the highest quality, natural ingredients from local sources. This idea immediately resonated with local residents, so much so in fact, that the first day Mitchell’s was open for business the delicatessen ran out of food! Humbled and amazed by this enthusiastic response we immediately adjusted to the higher demand and began working furiously on expanding our menu and making our products even better. This effort was almost immediately repaid in our first year in business when Mitchell Delicatessen was voted “Best Sandwich” in Nashville Scene’s annual “Best Of” poll.', 'Deli, Resturant, Catering, Bacon, Sandwhich', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/mitchell_logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9taXRjaGVsbF9sb2dvLnBuZyIsImlhdCI6MTY1NTc2Mzc4MCwiZXhwIjoxOTcxMTIzNzgwfQ.ak-KNSveWCKcXs15XXmg4C_9cc3kgYPuRIz5WC9h6TY', 'https://mitchelldeli.com/', 'Y', 'beLGloSSUwVqOxna63LxKWIafGU2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('913260', 'Woodlands', '615-463-3005','3415 West End Ave Nashville, TN 37203', 'We are known for our fresh and innovative extensive selection of Indian cuisine at just the right price. Our menu consists of a variety of vegetarian Indian cuisine ranging from an extensive selection of south and north Indian dishes. Vegan options are available as well as Gluten-Free.', 'Indian, Vegetarian, Resturant, Vegan', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/WoodlandsIndian.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9Xb29kbGFuZHNJbmRpYW4uanBnIiwiaWF0IjoxNjU1NzYzOTEzLCJleHAiOjE5NzExMjM5MTN9.iXCOe6H8Vj0oR3Yn_lj6o1hAIaonybHnvnsMp8qHsfs', 'https://woodlandstennessee.com/', 'Y', '8Rb7yIs2WdXZmwCocX9no9CpyLA2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('100000002', 'Loft Salon', '615-568-2129','1106 16th Ave S Nashville, TN 37212', 'Welcome the The Loft Salon. Located on Music Row in Nashville, we are conveniently located only minutes from downtown. We offer a full range of services, including hair styling, manicures, pedicures, waxing, highlighting, wedding and prom updos, and much more. Stop by or give us a call today.​', 'Salon, Hair, Stylist, Beauty', 'Beauty', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/LoftSalon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9Mb2Z0U2Fsb24uanBnIiwiaWF0IjoxNjU1NzY0MTMzLCJleHAiOjE5NzExMjQxMzN9.D4DaOeWrx2UeZVOVqzNUvgavOFg69dBDcXRRAJLcO5M', 'https://www.facebook.com/The-Loft-Salon-Nashville-167583026628630/', 'Y', 'pVLgX34GJVam68za2qQt0UI4p8D2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey)
VALUES ('568585', 'Corsair Distillery', '615-200-0320','1200 Clinton St #110 Nashville, TN 37203', 'Soon after, in 2008, Corsair Distillery was founded in Bowling Green, KY. By 2010, Corsair set its marks where it all started, becoming the first craft distillery in Nashville since prohibition. Corsair’s spirits have been praised in publications like Food and Wine, Saveur, Imbibe, Whisky Magazine, Whisky Advocate, the Atlantic, Time Out New York, and Maxim.com. Corsair’s innovative and adventurous spirits have won over 800 medals at national and international spirits competitions.', 'Distillery, Whiskey, Tours, Tastings, Bar, Spirits', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/CorsairDistillery.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9Db3JzYWlyRGlzdGlsbGVyeS5qcGciLCJpYXQiOjE2NTU3NjQyNjksImV4cCI6MTk3MTEyNDI2OX0.BKr8cDIk1yfErtgE42c-y-sVYaUK0FZVyQzFyPgbFKA', 'https://www.corsairdistillery.com/', 'Y', 'tDF74APvazWAbPfa8EY2OnXGYur1');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('571065', 'Mikes Ice Cream & Coffee Bar', '615-742-6453', '129 2nd Ave N Nashville, TN 37201', 'Locally owned and operated ice cream shop in the heart of downtown nashville! 36 delicious, homemade flavors to choose from, as well as a full espresso bar menu.', 'Ice Cream, Cafe, Coffee, Wholesale, Espresso', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/MikesIceCream.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9NaWtlc0ljZUNyZWFtLmpwZyIsImlhdCI6MTY1NTc2NDM1OCwiZXhwIjoxOTcxMTI0MzU4fQ.fBElZugD2nUenfJ7XfqzDoEQRPh97sYbgQZ9Klaryh0', 'https://mikesicecream.com/', 'Y', 'x2zUvLuTZ5Vm7MSDOckVSVJj1bu2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('1140133', 'High Garden Tea', '615-589-4252', '1826 New Hope Rd Joelton, TN 37080', 'We hold tea in the highest regard and have had the joy of studying, creating and offering potent herbal infusions and fine teas for over 15 years. Each is formulated and hand-crafted with skill and love for the plant wisdom we carry and seek. This way of life is very special to us and it’s an honor to share our tea with you.', 'Tea, Shop, Herbs, Spices , Apothecary', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/HighGardenTea.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9IaWdoR2FyZGVuVGVhLmpwZyIsImlhdCI6MTY1NTc2NDQ2NywiZXhwIjoxOTcxMTI0NDY3fQ.wDpKr20BJL-TY1sQjIFO3Y3jRXhIkM1Tau0Au3k6dvg', 'https://www.highgardentea.com/', 'Y', 'aaIrLfDUbXeXMGEtjblOkZS309x1');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('628987', 'Gunners Glass Recycling', '615-708-2953', '2336 Smith Springs Rd Nashville, TN 37217', 'Gunner was 5 years old when he became interested in recycling and keeping the Earth healthy. Gunner and his Dad began asking neighbors to take their glass to the recycling center for a few bucks a month. Within the first month we started receiving emails from other neighbors and quickly realized the city’s need for our service. We began expanding to new neighborhoods with customers’ help by using email and word of mouth. Our service model has remained constant over the years by keeping our service simple, keeping our customers happy and reducing expenses.', 'Recycling, Glass, Worm Wine', 'Sanitation', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/GunnersRec.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9HdW5uZXJzUmVjLmpwZyIsImlhdCI6MTY1NTc2NDUzMiwiZXhwIjoxOTcxMTI0NTMyfQ.soxg-k90jEqPp8Z-WTVEyY0ylCZZSX529a_8vdfVS8g', 'http://www.gunnersrecycling.com/', 'Y', 'gr5YuqIyLReth8sq6il2CioUWQj1');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('693103', 'The Filling Station', '615-818-0012','1118 Halcyon Ave Nashville, TN 37204', '2 locations, 12 South & East Nashville, serving pints, samplers, & filling growlers. Wonder what is on tap? Click the link on our homepage for a list', 'Beer, Pints, Bar, Growlers, Samples', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/TheFillingStation.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9UaGVGaWxsaW5nU3RhdGlvbi5qcGciLCJpYXQiOjE2NTU3NjQ1OTksImV4cCI6MTk3MTEyNDU5OX0.JqFdQk2P9pLU-l7gMbos_cJk8cC_-BYPNiVH4gtNmcQ', 'https://brewstogo.com/', 'Y', 'R4oqyyaenYShvGDZukCUnra0rMY2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('100000001', 'Rices County Hams', '615-758-2362','12217 Lebanon Rd Mt. Juliet, TN 37122', 'Rice’s Country Hams is a third generation family owned and operated business. It is the oldest retail business still in operation in Mt. Juliet Tennessee. We have been curing Country Hams for over 60 years. The Rice Family takes pride in doing things the “Old Fashion Way”. We offer the highest quality country cured meats you will find. Our Country Hams are cured for at least 10 months to give you the best flavor. Not only do we cure country hams, but we also offer thick sliced smoked bacon, hickory smoked sausage and a variety of other southern treats. One bite of our country meats is sure to bring back childhood memories of a simpler time.', 'Ham, Butcher, Deli, Smokehouse', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/RicesCountryHam.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SaWNlc0NvdW50cnlIYW0uanBnIiwiaWF0IjoxNjU1NzY0NzA0LCJleHAiOjE5NzExMjQ3MDR9.lSQdNGAMyBU7kPqb2fvVl-AMbEpNgGORlCbtVqHFCjQ', 'https://www.ricescountryhams.com/', 'Y', 'WxeV0OAvM8aCpc8TDzZBalUF1NZ2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey)
VALUES ('930352', '8th & Roast', '615-730-8074','2108A 8th Ave S Nashville, TN 37204', '"It all started when…
childhood friends Ed and Q began meeting at a little coffee shop named 8th And Roast. As they laid plans to build their dream restaurant, the coffee shop became their unofficial headquarters.
Then, it happened – they fell in love… with coffee.
When the owners of their favorite unofficial headquarters offered them the opportunity to partner up, they jumped at the chance. 
Coming from a hospitality background, they realized a coffee shop is always more than just a coffee shop. At its best, it’s a third home, a place to feel welcomed, connected, and part of a larger community. 
Armed with a vision to make the shop all that it could be, they set out to make the best craft coffee experience imaginable. Connecting with a network of fair trade farmers from around the world, they became an active part of a global sustainability movement. Whenever possible, they partner directly with the producers to import straight from the source, bypassing the middle-men. 
So come by, say hi, enjoy a great cup of coffee, and tap into a growing community now in 2 locations in Nashville (and the airport).
', 'Coffe, Wholesale, Cafe', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/8thRoast.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy84dGhSb2FzdC5wbmciLCJpYXQiOjE2NTU3NjQ4NTAsImV4cCI6MTk3MTEyNDg1MH0.pMDkCU8xk2j1DGQcAAkhOn9JFv0ZURVIiCJ4gBzTFiI', 'https://www.8thandroast.com/', 'Y', 'ejcmiPhpcsaxqrKg7yFtXby93iW2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('253436', 'The Produce Place', '615-383-2664', '4000 Murphy Rd Nashville, TN 37209', '"Established in 1988 by Barry Burnette, The Produce Place has provided an outlet for small business and local farmers to sell their produce and products. 
Here at The Produce Place we offer a wide variety of natural groceries and fresh produce supplied to us as often as possible by local farmers when the season is appropriate, when we cannot find items locally we do our very best to source our items from reputable vendors and provide organic options. 
You will find when you shop here, that our chemistry within the store is what really makes us stand out. When you walk through our doors, we do our best to make you feel like you’re apart of the family here at The Produce Place. 
For a list of local vendors and farmers we carry, please visit our ‘Local Vendors’ tab. If you’re interested in what we have in the store seasonally or on sale, please visit our ‘Featured Items’ tab.
"', 'Produce, Groceries, Market, Vegetables, Farm, Fresh, Fruit, Grocery', 'Food & Beverage', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/TheProducePlace.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9UaGVQcm9kdWNlUGxhY2UucG5nIiwiaWF0IjoxNjU1NzY1MDkwLCJleHAiOjE5NzExMjUwOTB9.1SVMLlowDNcD6LJ_Fcdg8F1VPeUVrBu8K_uMUR0RCIc', 'https://produceplace.com/', 'Y', 'NFX2ejnX65eWInWMBrf9X81wRyV2');

INSERT INTO Business (StateControlNum, BusinessName, Phone, [Address], [Description], Keywords, Industry, ImgURL, WebUrl, Verified, OwnerKey) 
VALUES ('205000', 'Recycle Nash', '615-905-6274', '5025 Hillsboro #171 Rd Nashville, TN 37215', 'RecycleNash has a simple mission - to spread awareness and encourage glass recycling by offering glass recycling pick-up services for a nominal fee to residents in the greater Nashville area, from Bellevue to Brentwood. We know how much of a hassle it can be load up your car with glass and try to find the closest recycling center. Your time is important, so let us take care it for you.', 'Recycling, Glass, Pickup', 'Sanitation', 'https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/RecNash.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SZWNOYXNoLnBuZyIsImlhdCI6MTY1NTc2NTUxNiwiZXhwIjoxOTcxMTI1NTE2fQ.kRn7DSYuqvNEzmQPAG_w-pGKmRzz9dE87iJCtx-4oZI', 'http://www.recyclenash.com/home.html', 'Y', 'F2FTyqZgWRe9N4phzGnQHpubVuT2');

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
