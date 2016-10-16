/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
 

    // Wait for device API libraries to load

    //

    document.addEventListener("deviceready", onDeviceReady, false);

 

    // Global InAppBrowser reference

    var iabRef = null;

 

    // Inject our custom JavaScript into the InAppBrowser window

    //

    function replaceHeaderImage() {

        iabRef.executeScript({

            code: "var img=document.querySelector('#header img'); img.src='http://cordova.apache.org/images/cordova_bot.png';"

        }, function() {

            alert("Image Element Successfully Hijacked");

        });

    }

 

    function iabClose(event) {

         iabRef.removeEventListener('loadstop', replaceHeaderImage);

         iabRef.removeEventListener('exit', iabClose);

    }

 

    // device APIs are available

    //

    function showBrowser() {

          
         iabRef = window.open('http://www.google.com', '_blank', 'location=yes');

         iabRef.addEventListener('loadstop', replaceHeaderImage);

         iabRef.addEventListener('exit', iabClose);

    }

 
function onDeviceReady()
    {   
        return false;
    }