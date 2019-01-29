# MyFamily Application Course 

## Step 1: Initializing the application

In this step we will install all we need for our application and we will construct the first pages of the application.

### Start Ionic project

Set proxy (if needed)

Goto root folder of the project (MyFamilyAppCourse).

ionic start MyFamily tabs

? Try Ionic 4? Yes

? Integrate your new app with Cordova to target native iOS and Android? Yes

? Install the free Ionic Pro SDK and connect your app? No

cd MyFamily-1

npm install --save-dev @ionic/lab

ionic serve -l

### Create application pages
ionic generate page chat

ionic generate page tasks

ionic generate page location

ionic generate page family

### Add the new pages into the app
Update tabs.page.html with the new pages.
Update tabs.router.module.ts with the new pages.
Update tabs.module.ts with the new pages.

In app-routing.module.ts - remove all our new pages from the router. They was added by the CLI.

#### Remove the default pages: about, contact, home
From all the above 3 files, remove the pages Home, Contact and About.

Remove the pages Home, Contact and About files and folders.

### Deploy application on Android device

#### Add the Android platform
ionic cordova platform add android

#### Build and deploy on your Android device
ionic cordova run android --device