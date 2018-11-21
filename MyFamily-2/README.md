# MyFamily Application Course 

## Step 2: Add our business content

We will fulfill our 4 pages with our business conent.
* Chat - show chat of our family. It will allow us to write a message and send picture
* Tasks - show family task. Allow to add task and mark task as it done
* Location - show a google map with locations of all our family memebers. 
* Family - show all our family memebers and allow us to initiate a phone call to each one. 

In this step we will use mocks for all the data operations and mobile resources.
Means we still not working with server and don't have real interaction with other family memeber.
And still don't use the real mobile resources, such as camera and GPS.

Note: state management is a big deal in applications. In this course I don't focus on state management
and therefore I took the easiest way to do the state management. This is not the effcient or the best parctive way to 
do it. Useally, I preffer to use NGRX for my state management. 

### Chat

### Location

#### Info
* Google Maps API
* Google Maps native vs. Embeded

#### Steps
1. Goto https://console.developers.google.com/
2. Start new project
3. Enable 'Google Maps JavaScript API'
4. Create Credentials
5. Generate API KEY
6. Add the following line into the main index.html file
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_APY_KEY"></script>
```
7. Edit the location component (html, css and component TS).