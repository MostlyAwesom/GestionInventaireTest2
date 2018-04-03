Template.showBrandsLayout.events({
	'click #delete_btn': function(){
		Brands.remove(this._id);	
	}
});