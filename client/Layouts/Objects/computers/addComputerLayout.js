Template.addComputerLayout.events({
    'submit form': function(event){
		event.preventDefault();
		
		var name = $("input[name='name']").val();
		var brandId = $("select[name='brandId']").val();
		var modelId = $("select[name='modelId']").val();
		var intermediateDate = new Date().now;
		var currentDate = moment(intermediateDate).format('HH:mm - DD.MM.YYYY');
		
		var computer = {
				name: name,
				brandId: brandId,
				modelId: modelId,
				createdAt: currentDate
		}
        
        Computers.insert(computer);
	},
	'change #js-brandSelect': function(event, template){
		Session.set('selectedBrand', $( event.target ).val());
	}
});

Template.addComputerLayout.helpers({
	checkBrand: function(currentModel){
		if(Session.get('selectedBrand') === currentModel.brandId){
			return true
		} else {
			return false
		}
	}
}); 
    