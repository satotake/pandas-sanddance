# pandas-sanddance

Custom Jupyter Widget SandDance


_NOTE_: this widget is alpha stage for now

## Installation

You can install using `pip`:

```bash
pip install pandas_sanddance
```

Or if you use jupyterlab:

```bash
pip install pandas_sanddance
jupyter labextension install @jupyter-widgets/jupyterlab-manager
```

If you are using Jupyter Notebook 5.2 or earlier, you may also need to enable
the nbextension:
```bash
jupyter nbextension enable --py [--sys-prefix|--user|--system] pandas_sanddance
```

## Getting Started With

See also example/introduction.ipynb

```python
import pandas as pd
from pandas_sanddance import SandDanceWidget
widget = SandDanceWidget()
widget.show()

df = pd.DataFrame([
    {'x': 1, 'y': 1: 'text': 'first'},
    {'x': 2, 'y': 2: 'text': 'second'},
    {'x': 3, 'y': 3: 'text': 'third'},
])
widget.load(df)
```

Powered by [widget-ts-cookiecutter](https://github.com/jupyter-widgets/widget-ts-cookiecutter)
