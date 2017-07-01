$(function(){
	$("#big").on("click",function(){
		var processingInstance1;
		if (!processingInstance1) {

			processingInstance1 = Processing.getInstanceById('canvas1');

		}
		processingInstance1.big();
	});
	
	$("#small").on("click",function(){
		var processingInstance1;
		if (!processingInstance1) {

			processingInstance1 = Processing.getInstanceById('canvas1');

		}
		processingInstance1.small();
	})

	
})