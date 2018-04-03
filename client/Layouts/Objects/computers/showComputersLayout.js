Template.showComputersLayout.events({
	'click #delete_btn': function(){
		Computers.remove(this._id);	
	}
});

Template.showComputersLayout.helpers({
    brand() {
        return Brands.findOne(this.brandId);
    },
    model() {
        return Models.findOne(this.modelId); 
    },
    modelFromBrand(){
        return Models.find({brandId: this.brandId});
    }
});

