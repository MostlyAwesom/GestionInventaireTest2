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
	'change .js-brandSelect': function(event, template){
		this.brandSelect = new ReactiveVar($( event.target ).val());
		console.log("The brand select element changed to " + this.brandSelect);
	}
});

Template.addComputerLayout.helpers({
	modelFromBrand(){
        return Models.find({brandId: this.brandSelect});
    }
}); 
    