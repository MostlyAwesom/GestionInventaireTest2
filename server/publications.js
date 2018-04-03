Meteor.publish("allComputers", function(){
    return Computers.find();
});

Meteor.publish("allBrands", function(){
    return Brands.find();
});

Meteor.publish("allModels", function(){
    return Models.find();
});
