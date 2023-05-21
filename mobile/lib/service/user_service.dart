import 'dart:convert';
import 'dart:developer';
import 'package:mobile/config.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/model/user.dart';

class UserService {
  static const _viewUrl = "$apiUrl/student";

  static List<UserModel> dataFromJson(String jsonString) {
    final data = json.decode(jsonString);
    return List<UserModel>.from(data.map((item) => UserModel.fromJson(item)));
  }

  static Future<List<UserModel>> getData(userId) async {
    log("hhhhhhhhh 1 $userId");

    final response =
        await http.get(Uri.parse("http://localhost:8080/api/student/1904027"));
    if (response.statusCode == 200) {
      // Request was successful
      String responseData = response.body;
      log('Response data: $responseData');
    } else {
      // Request failed
      log('Request failed with status: ${response.statusCode}');
      log("hhhhhhhhh 1");
    }

    if (response.statusCode == 200) {
      List<UserModel> list = dataFromJson(response.body);
      log("message : ${list[0].firstName}");
      return list;
    } else {
      return []; //if any error occurs then it return a blank list
    }
  }
}
