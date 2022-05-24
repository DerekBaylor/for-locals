USE ForLocals
GO

DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS Business;
DROP TABLE IF EXISTS Review;

CREATE TABLE [User] (
        UserId INTEGER NOT NULL PRIMARY KEY IDENTITY,
        [Name] VARCHAR(255),
        ImgUrl VARCHAR,
        Bio VARCHAR(255) DEFAULT 'Hello World' NOT NULL,
        IsAdmin CHAR(1) DEFAULT 'N' NOT NULL,
);

CREATE TABLE Business (
	    BusinessId INTEGER NOT NULL PRIMARY KEY IDENTITY,
        StateControlNum VARCHAR(9) NOT NULL,
        BusinessName VARCHAR(255) NOT NULL,
        Phone VARCHAR(55),
        [Address] VARCHAR(255) NOT NULL,
        [Description] VARCHAR(255) DEFAULT 'Hello World' NOT NULL,
        Keywords VARCHAR(255) NOT NULL,
        Industry VARCHAR(255) NOT NULL,
        Logo VARCHAR,
        ImgURL VARCHAR,
        ReviewScore INTEGER, 
        Verified CHAR(1) DEFAULT 'N' NOT NULL,
        UserId VARCHAR NOT NULL, 
);

CREATE TABLE Review (
        ReviewId INTEGER NOT NULL PRIMARY KEY IDENTITY,
        ReviewText VARCHAR NOT NULL,
        ImgUrl VARCHAR,
        Score INTEGER NOT NULL,
        UserId VARCHAR NOT NULL,
        BusinessId VARCHAR NOT NULL,
);

-- Mock User Data
INSERT INTO [USER] ([Name], Bio, IsAdmin) VALUES ('Derek B', 'Im the admin. Welcome to the site!','Y');
INSERT INTO [USER] ([Name], Bio) VALUES ('John Smith', 'I am the owner of Pick Tennessee!');

-- Mock Business Data
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry, UserId) 
VALUES ('000607957', 'Pick Tennessee Conference','6290 McDaniel Rd. College Grove, TN 37046', 'Agriculture, Farming', 'Agriculture', '2');

-- Mock Review Data