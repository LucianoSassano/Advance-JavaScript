var bussines = {
	first :"Google", 
	second: "Apple", 
	third: "Microsoft" ,
	fourth: "Facebook", 
	fifth: "Twitter",

	fullName : function(){
		return this.first + " " + this.fifth;
		}
};

document.getElementById("test").innerHTML = bussines.fullName();