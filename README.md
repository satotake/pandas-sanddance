pandas-sanddance
===============================

Custom Jupyter Widget Library for inspection of DataFrame

Installation
------------

To install use pip:

    $ pip install pandas_sanddance
    $ jupyter nbextension enable --py --sys-prefix pandas_sanddance

To install for jupyterlab

    $ jupyter labextension install pandas_sanddance

For a development installation (requires npm),

    $ git clone https://github.com//pandas-sanddance.git
    $ cd pandas-sanddance
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix pandas_sanddance
    $ jupyter nbextension enable --py --sys-prefix pandas_sanddance
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This take a minute or so to get started, but then allows you to hot-reload your javascript extension.
To see a change, save your javascript, watch the terminal for an update.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.

