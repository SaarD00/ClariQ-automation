-- DropForeignKey
ALTER TABLE "TodoList" DROP CONSTRAINT "TodoList_userId_fkey";

-- AlterTable
ALTER TABLE "TodoList" ALTER COLUMN "userId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "TodoList" ADD CONSTRAINT "TodoList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
