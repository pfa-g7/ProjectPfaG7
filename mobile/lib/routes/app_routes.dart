import 'package:get/get.dart';
import 'package:mobile/screens/student_page.dart';
import 'package:mobile/screens/auth/authentification.dart';

class AppRoutes {
  static String homeScreen = '/HomePage';
  static String chooseTimeSlotPage = "/ChooseTimeSlotPage";
  static String studentPage = '/StudentPage';
  static String authTest = '/AuthTest';
  static String authScreen = '/AuthScreen';

  static List<GetPage> pages = [
    GetPage(
      name: authScreen,
      page: () => const AuthScreen(),
    ),

    // GetPage(
    //   name: chooseTimeSlotPage,
    //   page: () => ChooseTimeSlotPage(),
    // ),

    GetPage(
      name: studentPage,
      page: () => const StudentPage(),
    ),

    // GetPage(
    //   name: authScreen,
    //   page: () => const LoginPage(),
    // ),
  ];
}
