requirejs.config({
	baseUrl : 'js',
	paths : {
		jquery : '../libs/jquery'
	}
});

requirejs(["jquery"], function (jquery) {
	console.log("Loaded jquery");
	console.log(jquery);
});