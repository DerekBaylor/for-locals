USE ForLocals
GO

DROP TABLE IF EXISTS Bussiness;
DROP TABLE IF EXISTS [User];
DROP TABLE IF EXISTS Review;

CREATE TABLE [User] (
        UserId INTEGER NOT NULL PRIMARY KEY IDENTITY,
        [Name] VARCHAR(255),
        ImgUrl VARCHAR,
        Bio VARCHAR(255),
        IsAdmin CHAR(1) DEFAULT 'N' NOT NULL,
);

CREATE TABLE Business (
	    BusinessId INTEGER NOT NULL PRIMARY KEY IDENTITY,
        StateControlNum VARCHAR(55) NOT NULL,
        BusinessName VARCHAR(255) NOT NULL,
        Phone VARCHAR(55),
        [Address] VARCHAR(255) NOT NULL,
        [Description] VARCHAR NOT NULL,
        Keywords VARCHAR(255) NOT NULL,
        Industry VARCHAR(255) NOT NULL,
        Logo VARCHAR,
        ImgURL VARCHAR,
        ReviewScore INTEGER, 
        Verified CHAR(1) DEFAULT 'N' NOT NULL,
        CONSTRAINT FK_User_Id FOREIGN KEY (UserId) REFERENCES [User](Id), 
);

CREATE TABLE Review (
        ReviewId VARCHAR NOT NULL PRIMARY KEY IDENTITY,
        ReviewText VARCHAR NOT NULL,
        ImgUrl VARCHAR,
        Score INTEGER NOT NULL,
        CONSTRAINT FK_Reviewer_Id FOREIGN KEY (UserId) REFERENCES [User](UserId),
        CONSTRAINT FK_Business_Id FOREIGN KEY (BusinessId) REFERENCES Business(BusinessId),
);

INSERT INTO [USER] ([Name], ImgUrl, Bio, IsAdmin) VALUES ('Derek B', 'https://wgfuljukrcejubfajlyl.supabase.co/storage/v1/object/sign/images/BlankProfileImage.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvQmxhbmtQcm9maWxlSW1hZ2UucG5nIiwiaWF0IjoxNjUzMzU2ODE4LCJleHAiOjE5Njg3MTY4MTh9.HVj6zriVzWXj5qZHceNEvTVvdZOgN7dHH1rUAnXg_lg','Hello World','Y');