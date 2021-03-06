Package.describe({
  name: 'chipcastledotcom:jspdf-autotable',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'Meteor package for AutoTable plugin to jsPDF',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ChipCastleDotCom/meteor-jspdf-autotable',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('chipcastledotcom:jspdf@0.0.1', 'client');
  api.addFiles('jsPDF-AutoTable/jspdf.plugin.autotable.js', 'client');
});
