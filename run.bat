@echo off
setlocal

cd /d "%~dp0"

if not exist "node_modules" (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 goto :error
)

echo Starting the conference website...
call npm run dev
if errorlevel 1 goto :error

exit /b 0

:error
echo.
echo Failed to start the project.
pause
exit /b 1
