SELECT DISTINCT
    [Dept_Code],
    Department
INTO Dim_Department
FROM Fact_Finance
WHERE [Dept_Code] IS NOT NULL;

SELECT DISTINCT
    MAINACCOUNT,
    NAME AS Account_Name,
    [Account_Group]
INTO Dim_Account
FROM Fact_Finance
WHERE MAINACCOUNT IS NOT NULL;

SELECT DISTINCT
    GEOGRAPHYID
INTO Dim_Geography
FROM Fact_Finance
WHERE GEOGRAPHYID IS NOT NULL;

SELECT DISTINCT
    LOCALCOSTCENTER
INTO Dim_CostCenter
FROM Fact_Finance
WHERE LOCALCOSTCENTER IS NOT NULL;

SELECT DISTINCT
    ClientProgram
INTO Dim_ClientProgram
FROM Fact_Finance
WHERE ClientProgram IS NOT NULL;

-- Create table
CREATE TABLE dbo.Dim_Date
(
    DateKey DATE PRIMARY KEY,
    Year INT,
    MonthNumber INT,
    MonthName VARCHAR(20),
    MonthYear VARCHAR(20),
    Quarter VARCHAR(5),
    DayNumber INT,
    DayName VARCHAR(20),
    WeekNumber INT,
    IsWeekend BIT
);
GO

-- Populate data
DECLARE @StartDate DATE = '2023-01-01';
DECLARE @EndDate   DATE = '2023-11-30';

WHILE @StartDate <= @EndDate
BEGIN

INSERT INTO dbo.Dim_Date
VALUES
(
    @StartDate,
    YEAR(@StartDate),
    MONTH(@StartDate),
    DATENAME(MONTH, @StartDate),
    FORMAT(@StartDate,'MMM-yyyy'),
    'Q' + CAST(DATEPART(QUARTER, @StartDate) AS VARCHAR),
    DAY(@StartDate),
    DATENAME(WEEKDAY, @StartDate),
    DATEPART(WEEK, @StartDate),
    CASE 
        WHEN DATENAME(WEEKDAY, @StartDate) IN ('Saturday','Sunday') 
        THEN 1 ELSE 0 
    END
);

SET @StartDate = DATEADD(DAY, 1, @StartDate);

END;
GO