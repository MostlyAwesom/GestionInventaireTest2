Template.showModelsLayout.events({
	'click #delete_btn': function(){
		Models.remove(this._id);	
	}
});

Template.showModelsLayout.helpers({
    brand() {
        return Brands.findOne(this.brandId);
    }
})