function main () {
    CANVAS_WIDTH = 200,
    CANVAS_HEIGHT = 200;
    container = document.getElementById( 'canvas' );
    document.body.appendChild( container );
    renderer = new THREE.WebGLRenderer({alpha:true});
    renderer.setClearColor(0xEBEBEB, 1);
    renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
    container.appendChild( renderer.domElement );
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000);
    camera.position.z = 20;
    camera.lookAt(scene.position);
    var verticesOfCube = [-1,-1,-1,1,-1,-1,1, 1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1,
        1,-1,1,1,];
    var indicesOfFaces = [2,1,0,0,3,2,0,4,7,7,3,0,0,1,5,5,4,0,1,2,6,6,5,1,
        2,3,7,7,6,2,4,5,6,6,7,4];
    var geometry = new THREE.PolyhedronGeometry(verticesOfCube, indicesOfFaces, 7, 2);
    material = new THREE.MeshBasicMaterial({color : 0x363636, wireframe: true});
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    animate();
    $("#nav-github").click(function () {
        window.open("http://github.com/carlosflrs", "_blank");});
    $("#nav-resume").click(function () {
        window.open("assets/files/carlos_flores_resume.pdf", "_blank");});
    $("#nav-email").click(function () {
        window.location = "mailto:carlos.flrs@berkeley.edu";});
    $("#nav-linkedin").click(function () {
        window.open("http://linkedin.com/in/carlosflrs", "_blank");});
    $(".infolink").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    }); 
    
    
//    function typeText(letters_list, index, text) {
//        if (index > letters_list.length) {
//            return;
//        }
//        text += letters[index];
//        console.log(text);
//        index = index + 1;
//        $("#name span").html(text);
//        setTimeout(typeText(letters_list, index, text),10000);
//    }
//    letters = "CarlosFlores".split("");
//    text = "";
//    typeText(letters, 0, text);
    
}
function animate() {
    requestAnimationFrame(animate);
    render();
}
function render() {
    mesh.rotation.y += 0.01;
    mesh.rotation.x += 0.01;
    renderer.render(scene, camera);
}
function link(data) {
    document.location.href = $(data).val();
}
window.onload = main;
