import ipywidgets as widgets
from traitlets import (Unicode, List, Instance, observe)
import pandas as pd
from IPython.core.display import display

# See js/lib/sanddance.js for the frontend counterpart to this file.
#
defaults = {
    'width': '100%',
    'height': '60vh',
    'value': '[]',
}

@widgets.register
class SandDanceWidget(widgets.DOMWidget):
    """An SandDance widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('SandDanceView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('SandDanceModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('pandas-sanddance').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('pandas-sanddance').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with `sync=True`
    # is automatically synced to the frontend *any* time it changes in Python.
    # It is synced back to Python from the frontend *any* time the model is touched.
    value = Unicode(defaults['value']).tag(sync=True)
    df = Instance(klass=pd.DataFrame)

    width = Unicode(defaults['width']).tag(sync=True)
    height = Unicode(defaults['height']).tag(sync=True)
    snapshots = List([]).tag(sync=True)

    @observe('df')
    def _observe_df(self, change):
        new = change['new']
        self.value = new.to_json(orient='records')

    def show(self, **kwargs):
        self.width = kwargs.get('width', defaults['width']);
        self.height = kwargs.get('height', defaults['height']);
        display(self)

    def load(self, df):
        self.df = df
