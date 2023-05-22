import 'package:mobile/model/module.dart';

class ExamModel {
  int? id;
  bool? presence;
  int? numTable;
  String? salle;
  String? date;
  String? heure;
  Module? module;

  ExamModel(
      {this.id,
      this.presence,
      this.numTable,
      this.salle,
      this.date,
      this.heure,
      this.module});

  ExamModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    presence = json['presence'];
    numTable = json['numTable'];
    salle = json['salle'];
    date = json['date'];
    heure = json['heure'];
    module = json['module'] != null ? Module.fromJson(json['module']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['presence'] = presence;
    data['numTable'] = numTable;
    data['salle'] = salle;
    data['date'] = date;
    data['heure'] = heure;
    if (module != null) {
      data['module'] = module!.toJson();
    }
    return data;
  }
}
