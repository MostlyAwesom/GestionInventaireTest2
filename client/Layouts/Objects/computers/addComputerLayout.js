Template.addComputerLayout.events({
    'submit form': function(e){
		e.preventDefault();
		
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
	'click #brandSelect': function(){
		console.log("The brand select element changed !");
	}
});

Template.addComputerLayout.helpers({
	modelFromBrand(){
        return Models.find({brandId: this.brandId});
    }
});
    