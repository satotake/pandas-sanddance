import * as widgets from '@jupyter-widgets/base';
import * as deck from '@deck.gl/core';
import * as layers from '@deck.gl/layers';
import * as luma from 'luma.gl';
import * as fabric from 'office-ui-fabric-react';
import * as vega from 'vega';
import { Explorer, use } from '@msrvida/sanddance-explorer';
import ReactDOM from 'react-dom'
import React from 'react'

import './style.css';

use(fabric, vega, deck, layers, luma);

fabric.initializeIcons();

// See sanddance.py for the kernel counterpart to this file.

export var SandDanceModel = widgets.DOMWidgetModel.extend({
    defaults: Object.assign(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'SandDanceModel',
        _view_name : 'SandDanceView',
        _model_module : 'pandas-sanddance',
        _view_module : 'pandas-sanddance',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : {data: '', dtypes: {}},
    })
});


// Custom View. Renders the widget model.
export var SandDanceView = widgets.DOMWidgetView.extend({
    // Defines how the widget gets rendered into the DOM
    render: function() {
        // this.value_changed();
        //

        const explorerProps = {
            logoClickUrl: 'https://microsoft.github.io/SandDance/',
            mounted: explorer => {
                explorer.load([]);
                this.explorer = explorer;
                this.model.on('change:value', this.value_changed, this);
            },
            // style: {
            //     width: '80vw',
            //     height: '50vh',
            // }
        };

        ReactDOM.render(React.createElement('div', {style: {width: '80vw', height: '50vh'}} , [React.createElement(Explorer, explorerProps)]), this.el);

        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
    },

    value_changed: function() {
        console.log(JSON.parse(this.model.get('value')));
        this.explorer.load(JSON.parse(this.model.get('value')));
    }
});


