import 'package:mobile/model/filiere.dart';

class Module {
  int? id;
  String? libelle;
  Filiere? filiere;
  Filiere? semestre;

  Module({this.id, this.libelle, this.filiere, this.semestre});

  Module.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    libelle = json['libelle'];
    filiere =
        json['filiere'] != null ? Filiere.fromJson(json['filiere']) : null;
    semestre =
        json['semestre'] != null ? Filiere.fromJson(json['semestre']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['libelle'] = libelle;
    if (filiere != null) {
      data['filiere'] = filiere!.toJson();
    }
    if (semestre != null) {
      data['semestre'] = semestre!.toJson();
    }
    return data;
  }
}
