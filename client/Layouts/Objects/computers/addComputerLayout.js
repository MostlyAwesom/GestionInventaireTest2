import { ReactiveVar } from 'meteor/reactive-var'

Template.addComputerLayout.onCreated(function(){
	this.selectedBrandId = new ReactiveVar();
});

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
		template.selectedBrandId.set( $( event.target ).val() );
		console.log($( event.target ).val());
	}
});

Template.addComputerLayout.helpers({
	getSelectedBrandId: function() {
		return Template.instance().selectedBrandId.get();
	},
	checkBrand: function(currentModel){
		console.log(currentModel.brandId);
		console.log(Template.instance().getSelectedBrandId);
		
		if(Template.instance().getSelectedBrandId === currentModel.brandId){
			return true
		} else {
			return false
		}
	}
}); 
    