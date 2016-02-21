var yRotation = 0;
var xRotation = 0;
function main() {
    CANVAS_WIDTH = 200,
    CANVAS_HEIGHT = 200;
    container = document.getElementById( 'canvas' );
    document.body.appendChild( container );
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setClearColor(0x151718, 1);
    renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
    container.appendChild( renderer.domElement );
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000);
    camera.position.z = 20;
    camera.lookAt(scene.position);
    var verticesOfCube = [-1,-1,-1,1,-1,-1,1, 1,-1,-1, 1,-1,-1,-1, 1,1,-1,1,
        1, 1, 1,-1, 1, 1,];
    var indicesOfFaces = [2,1,0,0,3,2,0,4,7,7,3,0,0,1,5,5,4,0,1,2,6,6,5,1,2,3,7,
        7,6,2,4,5,6,6,7,4];
    var geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 7, 2);
    material = new THREE.MeshBasicMaterial({color : 0x1588c8, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    animate();
    document.onmousemove = handleMouseMove;
    changeTab("#nav-home");
    $('.nav-item').click(function () {changeTab(this);});
    $("#email").click(function () {
        window.location ="mailto:carlos.flrs@berkeley.edu";});
    $("#web").click(function () {
        window.open("assets/img/carlos_flores_resume_web.png", "_blank");});
    $("#github").click(function () {
        window.open("http://github.com/carlosflrs", "_blank");});
    $("#linkedin").click(function () {
        window.open("http://linkedin.com/in/carlosflrs", "_blank");});
    $("#random-color").hover(function () {
        $("#random-color").css({opacity:1});
    }, function () {
        $("#random-color").css({opacity:0});
    });
    $("#random-color").click(function () {
        var color = Please.make_color();
        $("#random-color").css({"background-color":color})
        $("#content-info").css({"background-color":color});
        $("html, body").css({"background-color":color});
    });

    //$("#resume").hover(function () {
        //$("#resume-links").css({display:"block"});
    //}, function () {
        //$("#resume-links").css({display:"none"});
    //});
    //$("#resume-links").hover(function () {
        //$("#resume-links").css({display:"block"});
    //}, function () {
        //$("#resume-links").css({display:"none"});
    //});
    //
    $("#resume").click(function () {
        window.open("assets/files/carlos_flores_resume.pdf", "_blank");});
}
function changeTab(div) {
    var id = $(div).attr('id').split('-')[1];
    if (id == "home" || id == "about") {
        $("#random-color").hide();
    } else {
        $("#info-wrapper").show();
        $("#random-color").show();
    }
    $('.nav-item').removeClass("nav-item-active");
    $(div).addClass("nav-item-active");
    if (id != "home") {
        $("#canvas").hide();
    } else {
        $("#canvas").show();
    }
    $(".section").hide();
    $("#section-" + id).show();
}
function animate() {
    requestAnimationFrame(animate);
    render();
}
function render() {
    mesh.rotation.y += yRotation;
    mesh.rotation.x += xRotation;
    renderer.render(scene, camera);
}
function handleMouseMove(event) {
    height = $(window).height();
    width = $(window).width();
    yRotation = ((event.pageX - (width / 2)) / (width * 15));
    xRotation = ((event.pageY - (height / 2)) / (height * 15));
}
window.onload = main;
