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
        Logo VARCHAR,
        ImgURL VARCHAR,
        ReviewScore INT, 
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

-- Mock Business Data
INSERT INTO Business (StateControlNum, BusinessName, [Address], Keywords, Industry,Verified, UserId) VALUES ('000607957', 'Pick Tennessee Conference','6290 McDaniel Rd. College Grove, TN 37046', 'Agriculture, Farming', 'Agriculture', 'Y', 2);

-- Mock Review Data
INSERT INTO Review (ReviewText, Score, UserId, BusinessId) VALUES ('This is a great business!', '5', 1, 1);
