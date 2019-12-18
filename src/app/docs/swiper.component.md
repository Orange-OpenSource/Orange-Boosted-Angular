#### Third party dependency

Swiper component is an Angular based wrapper for the native javascript plugin [Swiper](http://idangero.us/swiper).

You can bind the display of a pause/play button by using:

* `pauseButton` set it to `true` to display the button.

Beware in your option, you have to enbale autoplay.

In order to use the wrapper correctly, please add the following dependencies into your projet.

* [swiper.css](https://github.com/nolimits4web/Swiper/blob/master/dist/css/swiper.css)("^4.4.1") (make sure to add this in angular.json before boosted css)
           "styles": [
              "...",
              "node_modules/swiper/dist/css/swiper.css"
            ],
