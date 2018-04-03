Template.addBrandLayout.events({
    'submit form': function(e){
		e.preventDefault();
		
		var name = $("input[name='name']").val();
		var intermediateDate = new Date().now;
		var currentDate = moment(intermediateDate).format('HH:mm - DD.MM.YYYY');
		
		var brand = {
				name: name,
				createdAt: currentDate
		}
        
        Brands.insert(brand);
	}
});