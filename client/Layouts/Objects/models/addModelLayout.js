Template.addModelLayout.events({
    'submit form': function(e){
		e.preventDefault();
		
		var name = $("input[name='name']").val();
		var brandId = $("select[name='brandId']").val();
		var specs = $("input[name='specs']").val();
		var intermediateDate = new Date().now;
		var currentDate = moment(intermediateDate).format('HH:mm - DD.MM.YYYY');
		
		var model = {
				name: name,
				brandId: brandId,
				specs: specs,
				createdAt: currentDate
		}
        
        Models.insert(model);
	}
});