import 'package:mobile/utilities/color.dart';
import 'package:flutter/material.dart';

class IBoxDecoration {
  static upperBoxDecoration() {
    return const BoxDecoration(
        color: bgColor,
        borderRadius: BorderRadius.only(
            topLeft: Radius.circular(10), topRight: Radius.circular(10)));
  }
}
