import 'dart:convert';
import 'package:mobile/config.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/model/user.dart';

class UserService {
  static const _viewUrl = "$apiUrl/student/appoge";

  static UserModel dataFromJson(String jsonString) {
    final data = json.decode(jsonString);
    return UserModel.fromJson(data);
  }

  static Future<UserModel?> getData(userId) async {
    var response = await http.get(Uri.parse("$_viewUrl/$userId"));
    if (response.statusCode == 200) {
      UserModel list = dataFromJson(response.body);
      return list;
    } else {
      return null; //if any error occurs then it return a blank list
    }
  }
}
