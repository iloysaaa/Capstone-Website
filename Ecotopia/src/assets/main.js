
var sliderimg = document.querySelector('.slider-img');
var images = ['webtoon1.png', 'webtoon2.png'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length - 1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return sliderimg.setAttribute('src', '../../assets/webtoonpics/' + images[i]);
	
}

