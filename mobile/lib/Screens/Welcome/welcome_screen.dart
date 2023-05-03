// ignore_for_file: prefer_const_literals_to_create_immutables, prefer_const_constructors

import 'package:flutter/material.dart';

class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({Key? key}) : super(key: key);

  @override
  State<WelcomeScreen> createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[300],
      body: Column(children: [
        // hello again!
        Text(
          'Hello Again!',
          style: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 24,
          ),
        ),
        SizedBox(height: 10),
        Text(
          'Welcome back,',
          style: TextStyle(
            fontSize: 20,
          ),
        ),
        SizedBox(
          height: 20,
        )
        // email textfield

        // password textfield

        // sign in button

        //not a member? register now
      ]),
    );
  }
}
