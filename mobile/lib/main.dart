import 'package:flutter/material.dart';
// import 'package:mobile/Screens/Welcome/welcome_screen.dart';
// import 'package:mobile/constants.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:mobile/Screens/Welcome/welcome_screen.dart';

import 'Screens/main_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MainPage(),
    );
  }
}
