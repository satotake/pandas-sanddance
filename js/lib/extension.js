// This file contains the javascript that is run when the notebook is loaded.
// It contains some requirejs configuration and the `load_ipython_extension`
// which is required for any notebook extension.
//
__webpack_public_path__ = document.querySelector('body').getAttribute('data-base-url') + 'nbextensions/{{ cookiecutter.npm_package_name }}';

// Configure requirejs
if (window.require) {
    window.require.config({
        map: {
            "*" : {
                "pandas-sanddance": "nbextensions/pandas-sanddance/index",
            }
        }
    });
}

// Export the required load_ipython_extension
export function load_ipython_extension() { }
