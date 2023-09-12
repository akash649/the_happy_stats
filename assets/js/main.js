// mmenu light js start
document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector("#menu"),
            "(max-width: 575px)"
        );

        const navigator = menu.navigation();
        const drawer = menu.offcanvas();

        document.querySelector("a[href='#menu']")
            .addEventListener("click", (evnt) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);
// mmenu light js end
// pie chart js start
$('#rowtest_ang3').listtopie({
    startAngle: 180,//0.90,180,270,
    strokeWidth: 3,
    hoverEvent: true,
    drawType: 'round',
    speedDraw: 200,
    hoverColor: '#ff0000',
    textColor: '#222221',
    strokeColor: '#e5e5e5',
    textSize: '14',
    hoverAnimate: true,
    marginCenter: 0,
    infoText: true,
    sectorRotate: true
});
$(window).on('resize', function() {
    if ($(window).width() >= 992) {
        $('#rowtest_ang3').listtopie('updateOptions', { textSize: '16' });
    } else if ($(window).width() >= 768) {
        $('#rowtest_ang3').listtopie('updateOptions', { textSize: '14' });
    } else {
        $('#rowtest_ang3').listtopie('updateOptions', { textSize: '14' }); 
    }
});

$('#rowtest_ang4').listtopie({
    startAngle: 180,//0.90,180,270,
    strokeWidth: 3,
    hoverEvent: true,
    drawType: 'round',
    speedDraw: 200,
    hoverColor: '#ff0000',
    textColor: '#222221',
    strokeColor: '#e5e5e5',
    textSize: '14',
    hoverAnimate: true,
    marginCenter: 0,
    infoText: true,
    sectorRotate: true
});
// pie chart js end