$(function () {
    $("#wizard").steps({
        headerTag: "h4", bodyTag: "section", transitionEffect: "fade", enableAllSteps: true, transitionEffectSpeed: 500, onStepChanging: function (event, currentIndex, newIndex) {
            if (newIndex >= 1) { $('.actions ul').addClass('actions-next'); } else { $('.actions ul').removeClass('actions-next'); }
            return true;
        }});
});