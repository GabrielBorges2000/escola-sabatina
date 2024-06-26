-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Church" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "contact" TEXT,

    CONSTRAINT "Church_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionUnits" (
    "id" TEXT NOT NULL,
    "actionName" TEXT NOT NULL,
    "teacherName" TEXT NOT NULL,
    "assistantTeacherName" TEXT,
    "secretaryName" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,

    CONSTRAINT "ActionUnits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,
    "actionUnitsId" TEXT NOT NULL,
    "churchId" TEXT NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Requirements" (
    "id" TEXT NOT NULL,
    "dateOfRequirements" TIMESTAMP(3) NOT NULL,
    "studentsWithLesson" INTEGER DEFAULT 0,
    "dailyStudy" INTEGER DEFAULT 0,
    "smallGroup" INTEGER DEFAULT 0,
    "solidarityAction" INTEGER DEFAULT 0,
    "doubleMissionary" INTEGER DEFAULT 0,
    "bibleStudies" INTEGER DEFAULT 0,
    "baptized" INTEGER DEFAULT 0,
    "challengeOfTheWeek" INTEGER DEFAULT 0,
    "actionUnitsId" TEXT,

    CONSTRAINT "Requirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AttendanceList" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPresent" BOOLEAN NOT NULL DEFAULT false,
    "studentId" TEXT NOT NULL,
    "actionUnitsId" TEXT NOT NULL,

    CONSTRAINT "AttendanceList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ChurchToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_ChurchToUser_AB_unique" ON "_ChurchToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ChurchToUser_B_index" ON "_ChurchToUser"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionUnits" ADD CONSTRAINT "ActionUnits_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_actionUnitsId_fkey" FOREIGN KEY ("actionUnitsId") REFERENCES "ActionUnits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_churchId_fkey" FOREIGN KEY ("churchId") REFERENCES "Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Requirements" ADD CONSTRAINT "Requirements_actionUnitsId_fkey" FOREIGN KEY ("actionUnitsId") REFERENCES "ActionUnits"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceList" ADD CONSTRAINT "AttendanceList_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AttendanceList" ADD CONSTRAINT "AttendanceList_actionUnitsId_fkey" FOREIGN KEY ("actionUnitsId") REFERENCES "ActionUnits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChurchToUser" ADD CONSTRAINT "_ChurchToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Church"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChurchToUser" ADD CONSTRAINT "_ChurchToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
