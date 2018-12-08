// Equal Height
var EqualHeight = function() {
    "use strict";

    // Handle Equal Height
    var handleEqualHeight = function() {
        $(function($) {
            $('.equal-height').responsiveEqualHeightGrid();
			$('.equal-height-1').responsiveEqualHeightGrid();
			$('.equal-height-2').responsiveEqualHeightGrid();
			$('.equal-height-3').responsiveEqualHeightGrid();
			$('.equal-height-4').responsiveEqualHeightGrid();
			$('.equal-height-5').responsiveEqualHeightGrid();
			$('.equal-height-6').responsiveEqualHeightGrid();
			$('.services-v2-equal-height').responsiveEqualHeightGrid();
            $('.services-v3-equal-height').responsiveEqualHeightGrid();
            $('.services-v4-equal-height').responsiveEqualHeightGrid();
            $('.services-v6-equal-height').responsiveEqualHeightGrid();
            $('.services-v8-equal-height').responsiveEqualHeightGrid();
            $('.services-v9-equal-height').responsiveEqualHeightGrid();
            $('.services-v10-equal-height').responsiveEqualHeightGrid();
            $('.services-v11-equal-height').responsiveEqualHeightGrid();
            $('.services-v12-equal-height').responsiveEqualHeightGrid();
            $('.icon-box-v5-equal-height').responsiveEqualHeightGrid();
            $('.icon-box-v6-equal-height').responsiveEqualHeightGrid();
            $('.contact-us-equal-height').responsiveEqualHeightGrid();
            $('.team-section-equal-height').responsiveEqualHeightGrid();
            $('.news-v11-equal-height').responsiveEqualHeightGrid();
        });
    }

    return {
        init: function() {
            handleEqualHeight(); // initial setup for equal height
        }
    }
}();

$(document).ready(function() {
    EqualHeight.init();
});