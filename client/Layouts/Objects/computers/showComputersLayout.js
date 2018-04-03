Template.showComputersLayout.events({
	'click #delete_btn': function(){
		Computers.remove(this._id);	
	}
});

Template.showComputersLayout.helpers({
    brand() {
        return Brands.findOne(this.brandId);
    }
});