// Create an immediately invoked functional expression to wrap our code
(function() {

  // Define our constructor
  this.Keeva = function() {

    // Create global element references
    this.Keeva = null;

    // Define option defaults
    var defaults = {
      whateve: 'value'
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") this.options = _helpers.extendDefaults(defaults, arguments[0]);
  }

  // --------------
  // Public Methods
  // --------------
  Keeva.prototype.close = function() {
    var _ = this;
  }

  Keeva.prototype.open = function() {
    var _ = this;
  }

  // --------------
  // Private Methods
  // --------------
  var _helpers = {
    extendDefaults: function(source, properties) {
      var property;
      for (property in properties) {
        if (properties.hasOwnProperty(property)) {
          source[property] = properties[property];
        }
      }
      return source;
    }
  };

  var _setup = function() {

  };

  // TODO <-- What other events will be needed?

}());