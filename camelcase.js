String.prototype.camelCase=function(){
  return this.split(' ').map((x, i) => {
	  if (i !== 0) {
		  return x.substr(0,1).toUpperCase() + x.substr(1);
	  } else {
		  return x;
	  }
  }).join('');
}

let s = "hello world";
console.log(s.camelCase());
