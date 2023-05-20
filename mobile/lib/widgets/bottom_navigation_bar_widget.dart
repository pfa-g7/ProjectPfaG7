import 'package:flutter/material.dart';

class BottomNavigationStateWidget extends StatelessWidget {
  final String? title;

  final String? clickable;

  // ignore: prefer_typing_uninitialized_variables
  final onPressed;

  // ignore: use_key_in_widget_constructors
  const BottomNavigationStateWidget(
      {this.title, this.onPressed, this.clickable});
  @override
  Widget build(BuildContext context) {
    return BottomAppBar(
        shape: const CircularNotchedRectangle(),
        notchMargin: 4.0,
        child: Padding(
          padding: const EdgeInsets.only(
              left: 20.0, right: 20, top: 8.0, bottom: 8.0),
          child: SizedBox(
            height: 35,
            width: MediaQuery.of(context).size.width,
            child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepOrangeAccent,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(5.0)),
                ),
                onPressed: clickable == "" ? null : onPressed,
                child: Center(
                    child: Text(
                  title ?? '',
                  style: const TextStyle(
                    color: Colors.white,
                  ),
                ))),
          ),
        ));
  }
}
