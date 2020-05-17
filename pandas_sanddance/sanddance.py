#!/usr/bin/env python
# coding: utf-8

# Copyright (c) satotake.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import (Unicode, List, Instance, observe)
import pandas as pd
from IPython.core.display import display

from ._frontend import module_name, module_version

defaults = {
    'width': '100%',
    'height': '60vh',
    'value': '[]',
}

class SandDanceWidget(DOMWidget):
    """An SandDance widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('SandDanceView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('SandDanceModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('pandas-sanddance').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('pandas-sanddance').tag(sync=True)

    _view_module_version = Unicode('^0.2.0').tag(sync=True)
    _model_module_version = Unicode('^0.2.0').tag(sync=True)

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
