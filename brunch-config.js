// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'app.js': /^app/,
      'vendor.js': /^(?!app)/
    }
  },
  stylesheets: {joinTo: 'app.css'},
  templates: {
    joinTo: {'app.js': /^app\/templates/}
  }
};

exports.plugins = {
  babel: {
    presets: ['env']
  },
  copycat: {
    fonts: ['node_modules/font-awesome/fonts'],
    onlyChanged: true
  },
  sass: {
    options: {
      includePaths: ['node_modules/bootstrap/scss']
    }
  }
};

exports.npm = {
  globals: {
    jQuery: 'jquery',
    '$': 'jquery',
    Backbone: 'backbone',
    Mn: 'backbone.marionette',
    Popper: 'popper.js',
    bootstrap: 'bootstrap'
  },
  styles: {
    'font-awesome': ['css/font-awesome.css']
  }
};

exports.modules = {
  autoRequire: {
    'app.js': ['initialize']
  }
};
