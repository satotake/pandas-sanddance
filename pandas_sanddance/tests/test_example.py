#!/usr/bin/env python
# coding: utf-8

# Copyright (c) satotake.
# Distributed under the terms of the Modified BSD License.
# TODO

import pytest

from ..sanddance import SandDanceWidget


def test_default():
    w = SandDanceWidget()
    assert w.height == '60vh'
