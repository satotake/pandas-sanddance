# for development

## install python/dev dependencies

```bash
pip install -r requirements-dev.txt
```

## build js lib
```bash
npm run build:lib
```

## test (python) TODO
```bash
py.test
```

## test (js) TODO
```bash
npm test
```


## develop with jupyterlab
```bash
jupyter labextension install .
```


## develop with jupyter notebook
```bash
jupyter nbextension install --sys-prefix --symlink --overwrite --py pandas_sanddance 
jupyter nbextension enable --sys-prefix --py pandas_sanddance
```

## release
- Makse sure install dev dependencies of python `pip install -r requirements-dev.txt`
- Make a release commit, where you remove the `, 'dev'` entry in `_version.py`.
- Update the version in `package.json`
- Relase the npm packages:
  ```bash
  npm login
  npm publish
  ```
- Bundle the python package: `python setup.py sdist bdist_wheel`
- Publish the package to PyPI:
  ```bash
  twine upload dist/pandas_sanddance*
  ```
- Tag the release commit (`git tag <python package version identifier>`)
- Update the version in `_version.py`, and put it back to dev (e.g. 0.1.0 -> 0.2.0.dev).
  Update the versions of the npm packages (without publishing).
- Commit the changes.
- `git push` and `git push --tags`.
