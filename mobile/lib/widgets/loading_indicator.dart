import 'package:flutter/material.dart';
import 'package:mobile/utilities/color.dart';

class LoadingIndicatorWidget extends StatelessWidget {
  const LoadingIndicatorWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: SizedBox(
        height: 20.0,
        width: 20.0,
        child: CircularProgressIndicator(
          valueColor: AlwaysStoppedAnimation<Color>(iconsColor),
        ),
      ),
    );
  }
}
