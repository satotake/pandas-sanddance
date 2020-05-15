import { DOMWidgetModel, DOMWidgetView } from '@jupyter-widgets/base';
import * as deck from '@deck.gl/core';
import * as layers from '@deck.gl/layers';
import * as luma from 'luma.gl';
import * as fabric from 'office-ui-fabric-react';
import * as vega from 'vega';
import { Explorer, use } from '@msrvida/sanddance-explorer';
import ReactDOM from 'react-dom'
import React from 'react'
import './sanddance-explorer.css';

use(fabric, vega, deck, layers, luma);
fabric.initializeIcons();

export class SandDanceModel extends DOMWidgetModel {
    get defaults () {
        return {
            ...super.defaults(),
            _model_name : 'SandDanceModel',
            _view_name : 'SandDanceView',
            _model_module : 'pandas-sanddance',
            _view_module : 'pandas-sanddance',
            _model_module_version : '0.1.0',
            _view_module_version : '0.1.0',
            value : '[]',  // json string
            width : '100%',  // json string
            heigth : '60vh',  // json string
            snapshots: [],
        }
    }
}

export class SandDanceView extends DOMWidgetView {
    constructor(options) {
        super(options)
        this._explorer = null;
        this._wrapper = null;
        this.intervalID = null;
    }


    render () {

        const explorerProps = {
            logoClickUrl: 'https://microsoft.github.io/SandDance/',
            compactUI: true,
            mounted: explorer => {
                this._explorer = explorer;
                this.model.on('change:value', this.value_changed, this);

                setTimeout(() => {
                    this.value_changed();
                }, 1);
            },
            // TODO
            ref: ref => {
                // restore previoous snapshot states
                ref.state.snapshots = this.model.get('snapshots');
                this.intervalID = this.autosaveSnapshots(ref)
            },
            key: 'explorer-key'
        };


        this._wrapper = React.createElement(
            'div',
            {
                style: {
                    width: this.model.get('width'),
                    height: this.model.get('height'),
                }
            },
            [React.createElement(Explorer, explorerProps)],
        );

        ReactDOM.render(this._wrapper, this.el);

        this.model.on('change:width', this.size_changed, this);
        this.model.on('change:height', this.size_changed, this);
    }

    // TODO
    autosaveSnapshots (ref) {
        return setInterval(() => {
            this.model.set('snapshots', ref.state.snapshots)
            this.model.save_changes();
        }, 1000 * 30);
    }

    size_changed () {
        const style = {
            width: this.model.get('width'),
            height: this.model.get('height'),
        };
        this._wrapper.props.style = style;
    }

    value_changed () {
        this._explorer.load(JSON.parse(this.model.get('value')));
    }

    remove() {
        if (this.intervalID) {
            clearInterval(this.intervalID);
        }
        super.remove();
    }

}
