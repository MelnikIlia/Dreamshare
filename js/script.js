let body              = document.querySelector('body'),
	modal_register    = document.querySelector('.modal-register'),
	form_login        = document.querySelector('.form-login'),
	form_signUp       = document.querySelector('.form-sign-up'),
	logIn_button      = document.querySelector('#log-in'),
	signUp_button     = document.querySelector('#sign-up'),
	modalClose_button = document.getElementsByClassName('modal-close'),
	ibg               = document.getElementsByClassName('ibg');

logIn_button.addEventListener("click", () => {
	modal_register.classList.add('showed');
	form_login.classList.add('showed');
	body.classList.add('lock');
});

signUp_button.addEventListener("click", () => {
	modal_register.classList.add('showed');
	form_signUp.classList.add('showed');
	body.classList.add('lock');
});

for (const item of modalClose_button) {
	item.addEventListener("click", () => {
		modal_register.classList.remove('showed');
		item.closest('div').classList.remove('showed');
		body.classList.remove('lock');
	});	
}

(() => {
	for (const item of ibg) {
		if(item.querySelectorAll("img")[0].getAttribute("data-src").length > 0) {
			item.style.backgroundImage =
				'url("' + item.querySelectorAll("img")[0].getAttribute("data-src") + '")';
		} else if(item.querySelectorAll("picture")[0].length > 0) {
			item.style.backgroundImage =
				'url("' + item.querySelectorAll("source")[0].getAttribute("srcset") + '")';
		} else if(item.querySelectorAll("img")[0].length > 0) {
			item.style.backgroundImage =
				'url("' + item.querySelectorAll("img")[0].getAttribute("src") + '")';
		}
	}
})();

new WOW({mobile: false}).init();