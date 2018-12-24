var images = ["img/trees1.jpg", "img/dogs1.jpg", "img/fox1.jpg","img/coffe1.jpg", "img/snow1.jpg", "img/flower1.jpg", "img/view1.jpg" ];

var quotes = ['"Radość jest sercem duszy: oświetla tego, kto ją ma, i ogrzewa wszystkich, na których padają jej promienie."<br> <i>św. Jan od Krzyża</i>',
'"Poprzez pogodę ducha, którą chcę nabyć, pokażę, że życie chrześcijańskie jest piękne i niesie z sobą radość"<br> <i>Elisabeth Leseur</i>',
'"Przyjaźń jest delikatnym darem: łączy ludzi, lecz nigdy ich nie krępuje". <br> <i>ks. Roman Mleczko SSP</i>', 
'"Radość i uśmiech są jak okno i drzwi, którymi może przedostać się w życie człowieka nieskończone dobro". <br> <i>Christian Morgenstein</i>',
'"Naszym życiem powinniśmy ziemię na niebo przemieniać". <br><i>św. Jan Chryzostom</i>',
'"Cieszcie się, że żyjecie, bo życie ofiaruje wam możność kochania, pracy, zabawy i podziwiania gwiazd". <br> <i>Henry Van Dyke</i>',
'"Czasem potrzeba jednego radosnego oblicza, by rozjaśniło się nasze życie" <br> <i>Phil Bosmans</i>'];

var num = 0;

function next(){
	var slider = document.getElementById("slide");
	var quo = document.getElementById("quote");
	num++;
	if (num >= images.length) num=0;
	
	slider.src = images[num];	
	quo.innerHTML = quotes[num];
}

function prev(){
	var slider = document.getElementById("slide");
	var quo = document.getElementById("quote");
	num--;
	if (num < 0) num=images.length-1;
	
	slider.src = images[num];
	quo.innerHTML = quotes[num];	
}

var t = setInterval(next, 5000);


function stop(){
	clearInterval(t);
}
