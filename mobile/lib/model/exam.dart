class ExamModel {
  int? id;
  int? presence;
  int? numTable;
  String? numSalle;
  int? student;
  int? module;
  int? salleSurveillant;

  ExamModel(
      {this.id,
      this.presence,
      this.numTable,
      this.numSalle,
      this.student,
      this.module,
      this.salleSurveillant});

  ExamModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    presence = json['presence'];
    numTable = json['numTable'];
    numSalle = json['numSalle'];
    student = json['student'];
    module = json['module'];
    salleSurveillant = json['salleSurveillant'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['presence'] = presence;
    data['numTable'] = numTable;
    data['numSalle'] = numSalle;
    data['student'] = student;
    data['module'] = module;
    data['salleSurveillant'] = salleSurveillant;
    return data;
  }
}
