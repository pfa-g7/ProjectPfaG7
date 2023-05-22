import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:get/get.dart';
import 'package:mobile/routes/app_routes.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:mobile/Screens/Welcome/welcome_screen.dart';
import 'package:mobile/Screens/choosetimeslots.dart';
import 'package:mobile/Screens/home_page.dart';

import 'Screens/main_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  initializeDateFormatting();

  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      debugShowCheckedModeBanner: false,
      initialRoute: AppRoutes.authScreen,
      getPages: AppRoutes.pages,
    );
  }
}
