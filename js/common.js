
$(document).ready(function() {
	$(".fancybox").click(function() {
		$(".fancybox").fancybox({
			maxWidth: 800,
			maxHeight: 600,
			fitToView: false,
			width: document.documentElement.clientWidth > 700?'80%':'90%',
			height: document.documentElement.clientWidth > 700?'80%':'50%',
			autoSize: false,
			closeClick: false,
			openEffect: 'fade',
			closeEffect: 'elastic',
			helpers: {
				title: {
					type: 'inside'
				}
			}
		});
	});
		// Fancybox add
	$(".various").fancybox({
			maxWidth	: 800,
			maxHeight	: 600,
			fitToView	: false,
			width		: document.documentElement.clientWidth > 700?'40%':'90%',
			height		: document.documentElement.clientWidth > 700?'60%':'80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'elastic'
	});

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function(event) {
		event.preventDefault();
	});
	$('#main_bg_video').attr('src','vid_bg.mp4');
});
// Скрипт разворачивающегося меню
var main_obj = {
	menu_activity: false, // активность вверхнего меню в мобильной версии
	active_list: 1,
	repertory_choosen: 0, //активный элемент в выборе репертуара роликов
};
document.querySelector('#img-logo-attr').onclick = function() {
	if (document.documentElement.clientWidth > 768) {
		slideTop();
		//setTimeout(activateMenu, 500, 1);
	} else {
		activateMenu(1);
		document.querySelector('#header').setAttribute('class', 'container-fluid header-noactive');
		main_obj.menu_activity = false;
	};
	changeBackhroundFooter();
};
document.querySelector('#name-company').onclick = function() {
	if (document.documentElement.clientWidth > 768) {
		slideTop();
		//setTimeout(activateMenu, 500, 1);
	} else {
		activateMenu(1);
		document.querySelector('#header').setAttribute('class', 'container-fluid header-noactive');
		main_obj.menu_activity = false;
	};
	changeBackhroundFooter();
};
document.querySelectorAll('.navbar-top')[0].onclick = function() {
	if (document.documentElement.clientWidth > 768) {
		slideTop();
		//setTimeout(activateMenu, 500, 2);
	} else {
		activateMenu(2);
		document.querySelector('#header').setAttribute('class', 'container-fluid header-noactive');
		main_obj.menu_activity = false;
	};
	changeBackhroundFooter(1);
};
document.querySelectorAll('.navbar-top')[1].onclick = function() {
	if (document.documentElement.clientWidth > 768) {
		slideTop();
		//setTimeout(activateMenu, 500, 3);
	} else {
		activateMenu(3);
		document.querySelector('#header').setAttribute('class', 'container-fluid header-noactive');
		main_obj.menu_activity = false;
	};
	changeBackhroundFooter(1);
};
document.querySelectorAll('.navbar-top')[2].onclick = function() {
	if (document.documentElement.clientWidth > 768) {
		slideTop();
		//setTimeout(activateMenu, 500, 4);
	} else {
		activateMenu(4);
		document.querySelector('#header').setAttribute('class', 'container-fluid header-noactive');
		main_obj.menu_activity = false;
	};
	changeBackhroundFooter(1);
};
// скрипт меню
document.querySelector('.button-menu').onclick = function() {
	if (!main_obj.menu_activity) {
		document.querySelector('#header').setAttribute('class', 'container-fluid header-active');
		main_obj.menu_activity = true;
	} else {
		document.querySelector('#header').setAttribute('class', 'container-fluid header-noactive');
		main_obj.menu_activity = false;
	}
};

function changeRepertoryLong() {
	var len = document.querySelectorAll('.reportory-block'), // блоки с видео из раздела репертуар
		info = document.querySelectorAll('.info');
	// В цикле убираем все видео не подходящие условиям
	for (var i = 0; i < len.length; i++) {
		if (len[i].getAttribute('data-video') === 'short') {
				len[i].classList.add('reportory-block-off');
				info[i].setAttribute('style', 'display:none;');
		};
	};
};

function changeRepertoryShort() {
	var len = document.querySelectorAll('.reportory-block'), // блоки с видео из раздела репертуар
		info = document.querySelectorAll('.info');

	// В цикле убираем все видео не подходящие условиям
	for (var i = 0; i < len.length; i++) {
		if (len[i].getAttribute('data-video') === 'long') {
				len[i].classList.add('reportory-block-off');
				info[i].setAttribute('style', 'display:none;');
		};
	};
};

function doNormalRepertory() {
	var len = document.querySelectorAll('.reportory-block'),
		info = document.querySelectorAll('.info');

	// в цикле возращаем все к первоначальному виду
	for (var i = 0; i < len.length; i++) {
		info[i].removeAttribute('style');
		len[i].classList.remove('reportory-block-off');
	};
};

function changeChoosenActivity(a) {
	document.querySelector('.active-chose').setAttribute('class', 'choosen');
	document.querySelectorAll('.choosen')[a].setAttribute('class', 'choosen active-chose');
};

//function activateMenu(a) {
//	document.querySelector('#section' + main_obj.active_list).setAttribute('style', 'display:none;');
//	main_obj.active_list = a;
//	document.querySelector('#section' + main_obj.active_list).removeAttribute('style');
//	document.querySelector('#section' + main_obj.active_list).setAttribute('class', 'container-fluid animated');
//};

function changeBackhroundFooter() {
	if (!arguments[0]) {
		document.querySelector('#footer').removeAttribute('style');
	} else {
		document.querySelector('#footer').setAttribute('style', 'background: #f4f4f4;');
	}
};
// Плавный скроллинг к топу страницы
function slideTop() {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
};
// скрипт плавающего меню
function flyMenu() {
	if (document.documentElement.clientWidth > 768) {
		document.querySelector('#intro').setAttribute('style', 'margin-top:' + document.querySelector('#header').offsetHeight + 'px;');
	} else {
		document.querySelector('#intro').removeAttribute('style');
	}
};
setInterval(flyMenu, 250);

// Открытие формы
document.querySelector('#get_form').onclick = function() {
	document.querySelector('#form').setAttribute('class', 'active_form');
};
document.querySelector('#get_form2').onclick = function() {
	document.querySelector('#form').setAttribute('class', 'active_form');
};
document.querySelector('.close__form').onmousemove = function() {
	document.querySelector('#form').setAttribute('style', '-webkit-filter:opacity(0.5)');
};
document.querySelector('.close__form').onmouseout = function() {
	document.querySelector('#form').removeAttribute('style');
}
document.querySelector('.close__form').onclick = function() {
	document.querySelector('#form').setAttribute('class', 'not_active_form');
}
document.querySelector('.close__form').removeAttribute('style');