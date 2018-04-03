Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFoundLayout'
});

Router.map(function() {
    this.route('Home', {
        path: '/',
        template: 'homeLayout'
    });
    this.route('Computers', {
        path: '/computers',
        template: 'computersLayout',
        data: function(){
            var computers = Computers.find();
            var brands = Brands.find();
            var models = Models.find();
            
            return {
                computers: computers,
                brands: brands,
                models: models
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("allComputers"), Meteor.subscribe("allBrands"), Meteor.subscribe("allModels")];
        }
    });
    this.route('Brands', {
        path: '/brands',
        template: 'brandsLayout',
        data: function(){
            var brands = Brands.find();
            
            return {
                brands: brands
            };
        },
        waitOn: function(){
            return Meteor.subscribe("allBrands");
        }
    });
    this.route('Models', {
        path: '/models',
        template: 'modelsLayout',
        data: function(){
            var brands = Brands.find();
            var models = Models.find();
            
            return {
                brands: brands,
                models: models
            };
        },
        waitOn: function(){
            return [Meteor.subscribe("allBrands"),
                    Meteor.subscribe("allModels")];
        }
    });
});


