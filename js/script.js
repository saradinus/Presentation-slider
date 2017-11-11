        jQuery(document).ready(function ($) {

var jssorTransitions = [
    {$Duration:800,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2,$Outside:true},
    {$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}, {$Duration:1500,x:-1,y:0.5,$Delay:100,$Cols:10,$Rows:5,$Opacity:2,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationZigZag,$Assembly:260,$Easing:{$Left:$Jease$.$Linear,$Top:$Jease$.$OutJump},$Round:{$Top:1.5}},
    {$Duration:800,$Zoom:1,$Rotate:-0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Brother:{$Duration:800,$Zoom:11,$Rotate:0.5,$Easing:{$Rotate:$Jease$.$InSine,$Zoom:$Jease$.$Swing},$Opacity:2,$Shift:200}},
    {$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$Formation:$JssorSlideshowFormations$.$FormationRectangleCross,$Easing:{$Clip:$Jease$.$InSine}},
 {$Duration:500,$Delay:50,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationRectangle,$Easing:$Jease$.$OutQuad}
];
            
            var jssor_1_options = {
             $AutoPlay: true,                                   
    $AutoPlaySteps: 1,                               
    $Idle: 2000,
                $LazyLoading: 2,
                $Loop: 1,
                $SlideDuration: 4000, 
                $PauseOnHover: 0, 
              $SlideEasing: $Jease$.$InOutSine,
              $DragOrientation: 3,
              $Align: 0,
                  $SlideshowOptions: {
  $Class: $JssorSlideshowRunner$,
  $Transitions: jssorTransitions,
  $TransitionsOrder: 1
},
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            //make sure to clear margin of the slider container element
            jssor_1_slider.$Elmt.style.margin = "";

            /*#region responsive code begin*/

            /*
                parameters to scale jssor slider to fill parent container

                MAX_WIDTH
                    prevent slider from scaling too wide
                MAX_HEIGHT
                    prevent slider from scaling too high, default value is original height
                MAX_BLEEDING
                    prevent slider from bleeding outside too much, default value is 1
                    0: contain mode, allow up to 0% to bleed outside, the slider will be all inside parent container
                    1: cover mode, allow up to 100% to bleed outside, the slider will cover full area of parent container
                    0.1: flex mode, allow up to 10% to bleed outside, this is better way to make full window slider, especially for mobile devices
            */

            var MAX_WIDTH = 3840;
            var MAX_HEIGHT = 3000;
            var MAX_BLEEDING = 1;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {
                    var originalWidth = jssor_1_slider.$OriginalWidth();
                    var originalHeight = jssor_1_slider.$OriginalHeight();

                    var containerHeight = containerElement.clientHeight || originalHeight;

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                    var expectedHeight = Math.min(MAX_HEIGHT || containerHeight, containerHeight);

                    //scale the slider to expected size
                    jssor_1_slider.$ScaleSize(expectedWidth, expectedHeight, MAX_BLEEDING);

                    //position slider at center in vertical orientation
                    jssor_1_slider.$Elmt.style.top = ((containerHeight - expectedHeight) / 2) + "px";

                    //position slider at center in horizontal orientation
                    jssor_1_slider.$Elmt.style.left = ((containerWidth - expectedWidth) / 2) + "px";
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        });