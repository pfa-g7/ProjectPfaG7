import 'dart:convert';
import 'package:mobile/config.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/model/exam.dart';
import 'dart:developer';

class ExamService {
  static const _viewUrl = "$apiUrl/exam/student";
  static const _addUrl = "$apiUrl/exam/isPresent";

  static List<ExamModel> dataFromJson(String jsonString) {
    final data = json.decode(jsonString);
    return List<ExamModel>.from(data.map((item) => ExamModel.fromJson(item)));
  }

  static Future<List<ExamModel>> getData(userId) async {
    final response = await http.get(Uri.parse("$_viewUrl/$userId"));
    if (response.statusCode == 200) {
      List<ExamModel> list = dataFromJson(response.body);
      return list;
    } else {
      return []; //if any error occurs then it return a blank list
    }
  }

  static updateData(int id, bool presence) async {
    final res = await http.put(Uri.parse("$_addUrl/$id/$presence"));
    if (res.statusCode == 200) {
      return res.body;
    } else {
      return "error";
    }
  }
}
