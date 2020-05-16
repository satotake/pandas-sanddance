const plugin = require('./index');
const base = require('@jupyter-widgets/base');

module.exports = {
  id: 'pandas-sanddance',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'pandas-sanddance',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

