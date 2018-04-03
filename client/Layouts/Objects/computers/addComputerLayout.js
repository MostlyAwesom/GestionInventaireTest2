Template.addComputerLayout.events({
    'submit form': function(e){
		e.preventDefault();
		
		var name = $("input[name='name']").val();
		var brandId = $("select[name='brandId']").val();
		var model = $("select[name='model']").val();
		var intermediateDate = new Date().now;
		var currentDate = moment(intermediateDate).format('HH:mm - DD.MM.YYYY');
		
		var computer = {
				name: name,
				brandId: brandId,
				model: model,
				createdAt: currentDate
		}
        
        Computers.insert(computer);
	}
});

/*Template.addComputersLayout.helpers({
    modelFromSpecificBrand() {
        return Models.findOne({brandId: this.brandId});
    }
});*/